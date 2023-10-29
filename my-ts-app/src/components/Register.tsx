import React from "react";
// 2) install and import rhf to help manage forms with ease
import { useForm } from "react-hook-form";
// to verify that our form is beeing tracked install and import devtool component
import { DevTool } from "@hookform/devtools";

// 3) define the type of form data being sumitted by creating the user profile object
type userProfile = {
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  // 4) link our form to useForm hook , useForm hook returns an object we call submittedFormValues
  // Add userProfile type when invoking useForm  hook so that the userProfile match our submitted form values
  const submittedFormValues = useForm<userProfile>();

  // 5) create submittedFormValue object to destructure form values register, control, handleSubmit and formState
  // - register method from rhf registers and manages form values
  // - control object links devtool component to the form 
  // - handleSubmit is a react form onSubmit handler
  // - formState contains errors object 
  const { register, control, handleSubmit, formState } = submittedFormValues;

  // 6) destructure errors object, which contains individual field errors
  const { errors } = formState;

  // 7) define onsubmit function that should be called when the submit button is pressed
  //  onsubmit automatically receives the form  data of type userProfile which we can  log into the console
  const onSubmit = (data: userProfile) => {
    console.log("form submitted", data);
  };
  return (
    <div>

      {/* 1) create form with labels and form fields */}
      {/* 8) listen to the form onsubmit event and assign handleSubmit as a handler
          - to handleSubmit pass onsubmit as argument */}
      <form onSubmit={handleSubmit(onSubmit)}
        // 9) add noValidate attribute to the form element , prevents default browser validation 
        noValidate>
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          id="email"
          // 16) add required field validation to the email field 
          //  a) pass an object as a second argument to the register function 
          //  b) specify required as the key and the error message as its value
          {
               // 10) use register method to allow rhf to start tracking the state of form controls by adding props
               // on input tags eg email = {email}, simplify by spreading the register method on the form control
            ...register
            ("email", 
            { required: "email   is required" })}
        />
        {/* 20 ) access field errors and display them below the corresponding element ?. = optional chaining  
        optional chaining is necessary since the error mesage for a field might never exist if no validation rules fail*/}
        <p>{errors.email?.message}</p>
        {/* 17) Pattern validation set key to pattern and value to an object  */}
        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: "password   is required" })}
        />
        <p>{errors.password?.message}</p>

        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          type="text"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "confirmPassword   is required",
          })}
        />
        <p>{errors.confirmPassword?.message}</p>

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
