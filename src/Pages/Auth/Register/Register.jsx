import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegister = (data) => {
    console.log("after", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
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
            <Link className="text-primary" to="/login">
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
