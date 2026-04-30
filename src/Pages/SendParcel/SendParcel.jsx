import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const { register, handleSubmit, control } = useForm();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleParcelSent = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistricts === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    console.log(isSameDistrict);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);

    Swal.fire({
      title: "Agree with the cost",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree!",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
    });
  };
  return (
    <div className="text-black bg-white p-4 shadow-2xl rounded-xl my-24 mx-3">
      <h2 className="text-5xl font-bold">Sen A Parcel</h2>
      <form onSubmit={handleSubmit(handleParcelSent)} className="mt-12 p-4">
        {/*parcel document */}
        <div className="space-x-3">
          <label className="label">
            <input
              type="radio"
              value="document"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              value="non-document"
              {...register("parcelType")}
              className="radio"
            />
            non-Document
          </label>
        </div>
        {/* parcel info: name,wight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Parcel Name */}
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>

          {/* Parcel Weight */}
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender info */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-extraBold">Sender Details</h4>
            {/* Sender Name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* Sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/*sender region */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="w-full select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender districts */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select
                {...register("senderDistricts")}
                defaultValue="Pick a districts"
                className="w-full select"
              >
                <option disabled={true}>Pick a districts</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender Phone No */}
            <label className="label">Sender Phone No</label>
            <input
              type="number"
              {...register("senderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* Pickup Instruction */}
            <label className="label">Pickup Instruction</label>
            <textarea
              className="border border-gray-300 rounded-sm p-4"
              name="Pickup Instruction"
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
              id=""
            ></textarea>
          </fieldset>

          {/* receiver info  */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-extraBold">Receiver Details</h4>
            {/* Receiver Name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* Receiver Email */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* receiver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="w-full select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a district"
                className="w-full select"
              >
                <option disabled={true}>Pick a district</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender Phone No */}
            <label className="label">Receiver Phone No</label>
            <input
              type="number"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />

            {/* Pickup Instruction */}
            <label className="label">Delivery Instruction</label>
            <textarea
              className="border border-gray-300 rounded-sm p-4"
              name="Delivery Instruction"
              {...register("deliveryInstruction")}
              placeholder="Delivery Instruction"
              id=""
            ></textarea>
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Proceed to Confirm Booking"
        />
      </form>
    </div>
  );
};

export default SendParcel;
