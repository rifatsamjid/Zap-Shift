import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const { handleResetPassword } = useAuth();

  const handleForgotPassword = (data) => {
    handleResetPassword(data.email)
      .then(() => {
        alert("If this email exists, a reset link has been sent.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-extrabold">Forgot Password</h1>
      <p>Enter your email address and we’ll send you a reset link.</p>
      <div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
          </fieldset>
          <button
            type="submit"
            className="btn btn-primary text-black w-81 mt-4"
          >
            Send
          </button>
        </form>
      </div>

      <p>
        Remember your password?{" "}
        <Link className="text-primary" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
