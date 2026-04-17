import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log("after register", data.photo[0]);
    const profileImage = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image upload", res, res.data.data.url);

          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
              navigate(location.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-14 flex flex-col justify-center items-center h-dvh">
      <h2 className="font-extrabold text-4xl">Create an Account</h2>
      <p className="text-center my-2">Register with ZapShift</p>
      <div className="card bg-base-100 w-full max-w-sm">
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}
            {/* photo */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}<>~`+=|:;"',./\\_-]).{8,}$/,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 character or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must have at least one uppercase, at least one
                lowercase, at least one number and at least one special
                characters
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-black mt-4">Login</button>
          </fieldset>
        </form>
        <div className="mt-2.5">
          <p>
            Already have an account?{" "}
            <Link state={location.state} className="text-primary" to="/login">
              LogIn
            </Link>
          </p>
        </div>
        <div className="flex justify-center my-5 w-81 ml-5 items-center gap-2">
          <p className="text-sm">OR</p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
