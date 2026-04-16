import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

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
    <div className="m-14">
      <h2 className="font-extrabold text-5xl">Welcome Back</h2>
      <p>Login with ZapShift</p>
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
            <button className="btn btn-neutral w-81 mt-4">Login</button>
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
        <button className="btn ml-5 btn-neutral border w-81 border-gray-300 bg-white hover:bg-gray-100 text-black flex items-center justify-center gap-2">
          <FcGoogle size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
