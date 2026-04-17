import React from "react";
import Img from "../../../../assets/service.png";
const data = [
  {
    id: 1,
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurService = () => {
  return (
    <div className="bg-secondary mt-24 rounded-xl">
      <div className="flex flex-col text-white justify-center items-center p-5 space-y-3">
        <h1 className="font-extrabold text-4xl">Our Services</h1>
        <p className="text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div>
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className=" p-14 lg:p-20 bg-white rounded-xl w-[250px] h-[300px] shadow-sm lg:w-[410px] lg:h-[346px] hover:bg-[#CAEB66]"
            >
              <div className="flex justify-center m-4 ">
                <img
                  className="bg-gradient-to-b from-[#fabdc0] to-[#fdfafa] rounded-full p-2.5"
                  src={Img}
                  alt=""
                />
              </div>
              <h1 className="font-bold text-2xl text-center text-[#03373D]">
                {item.title}
              </h1>
              <p className="text-sm font-medium text-center text-[#606060]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
