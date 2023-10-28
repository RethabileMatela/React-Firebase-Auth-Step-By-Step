import React from "react";
// 2) install and import rhf to help manage forms with ease
import { useForm } from "react-hook-form";
// 6) to verify that our form is beeing tracked install and import devtool component
import { DevTool } from "@hookform/devtools";

// 3) define the type of form data being sumitted by creating the form value type
type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  // 4) link our form to useForm hook , useForm hook returns an object we call form
  // Add UseFormValues type when invoking useForm  hook so that the UseFormValues match our submitted form values
  const form = useForm<FormValues>();

  // 3)  rhf provides Register method to help manage and register form state, that can be accessed on earlier created  form object,
  //lets destructure it
  const { register, control, handleSubmit, formState } = form;

  return (
    <div>
      {/* 1) create form with labels and form fields */}
      <form>
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          id="email"
          // 5) use register method to allow rhf to start tracking the state of form controls by adding props
          // on input tags eg email = {email}, simplify by spreading the register method on the form control
          {...register("email", { required: "email   is required" })}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: "password   is required" })}
        />

        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          type="text"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "confirmPassword   is required",
          })}
        />
        <button>Submit</button>
      </form>
      {/* 7) invoke devtool after closing form tag
      -touched = field interacted with 
      -dirty = field value changed 
      rhf tracks values without rerendering them, follows uncontrolled inputs behaviour*/}
      <DevTool control={control} />
    </div>
  );
}

export default Register;
