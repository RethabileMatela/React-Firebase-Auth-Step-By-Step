import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const form = useForm<FormValues>();

  const { register, control, handleSubmit, formState } = form;
  // 19) destructure errors object, which contains individual field errors

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: "email   is required" })}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: "password   is required" })}
        />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Login;
