import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm();

  const handleLogIn = (data) => {
    console.log("after login data", data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-14 flex flex-col justify-center items-center h-dvh">
      <h2 className="font-extrabold text-5xl text-center">Welcome Back</h2>
      <p className="text-center mt-2">Login with ZapShift</p>
      {/* form */}
      <div className="card bg-base-100 w-full max-w-sm">
        <form onSubmit={handleSubmit(handleLogIn)} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-black w-81 mt-4">Login</button>
          </fieldset>
        </form>
        <div className="ml-5">
          <p>
            Don't have any account?
            <Link className="text-primary" to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className="flex justify-center my-5 w-81 ml-5 items-center gap-2">
          <p className="text-sm">OR</p>
        </div>
        {/*  Google Login Button */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
