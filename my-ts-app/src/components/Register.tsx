import React, { useState } from "react";
// a2) install and import rhf to help manage forms with ease
import { useForm } from "react-hook-form";
// a3.2) to verify that our form is beeing tracked install and import devtool component
import { DevTool } from "@hookform/devtools";

// a4) define the type of form data being sumitted by creating the user profile object
type userProfile = {
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {

  // r3) get whatever the user is writing in the input using usestate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // a5) link our form to useForm hook , useForm hook returns an object we call submittedFormValues
  // Add userProfile type when invoking useForm  hook so that the userProfile match our submitted form values
  const submittedFormValues = useForm<userProfile>();

  // a6) create submittedFormValue object to destructure form values register, control, handleSubmit and formState
  // - register method from rhf registers and manages form values
  // - control object links devtool component to the form 
  // - handleSubmit is a react form onSubmit handler
  // - formState contains errors object 
  const { register, control, handleSubmit, formState } = submittedFormValues;

  //a7) destructure errors object, which contains individual field errors
  const { errors } = formState;

  // a8) define onsubmit function that should be called when the submit button is pressed
  //  onsubmit automatically receives the form  data of type userProfile which we can  log into the console
  const onSubmit = (data: userProfile) => {
    console.log("form submitted", data);
  };
  return (
    <div>

      {/* a1) create form with labels and form fields */}
      <form
        //  a9) listen to the form onsubmit event and assign handleSubmit as a handler
        //  - to handleSubmit pass onsubmit as argument
        onSubmit={handleSubmit(onSubmit)}
        // a10) add noValidate attribute to the form element , prevents default browser validation 
        noValidate>
        <label htmlFor="email">EMAIL</label>
        <input
          type="text"
          id="email"

          {
          // a11) use register method to allow rhf to start tracking the state of form controls by adding props
          // on input tags eg email = {email}, simplify by spreading the register method on the form control
          ...register(
            "email",
            {
              // a12 ) add required field validation to the email field 
              required: "email   is required",

              // a13) Pattern validation set key to pattern and value to an object
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "email must be in correct format",
              },
            })}
          // r4) register changes to the email state  using onChange property
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* a14 ) access field errors and display them below the corresponding element 
              - ?. is optional chaining  
              - optional chaining is necessary since the error mesage for a field might never exist if no validation rules fail*/}
        <p>{errors.email?.message}</p>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: "password   is required" })}
          onChange={(e) => setPassword(e.target.value)}

        />
        <p>{errors.password?.message}</p>

        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          type="text"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: "confirmPassword   is required",
          })}
          onChange={(e) => setConfirmPassword(e.target.value)}

        />
        <p>{errors.confirmPassword?.message}</p>

        <button>Submit</button>
      </form>
      {/* a3.1) invoke devtool after closing form tag
      -touched = field interacted with 
      -dirty = field value changed 
      rhf tracks values without rerendering them, follows uncontrolled inputs behaviour*/}
      <DevTool control={control} />
    </div>
  );
}

export default Register;
