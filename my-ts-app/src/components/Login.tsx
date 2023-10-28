import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const form = useForm<FormValues>();
  // 7) -then associate the devtool comp with the form you are tracking using control object you can destructure from form
  // 9) from the form object destructure a function called handleSubmit

  const { register, control, handleSubmit, formState } = form;
  // 19) destructure errors object, which contains individual field errors

  const { errors } = formState;   

  // 8) define a function that should be called when the submit button is pressed
  // 11) onsubmit automatically receives the form  data which we can  log into the console
  // 14) now data is of type formValues
  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };
  return (
    <div>
      {/*render count value divided by 2 because react strict mode renders components 
      twice during development in order to detect any problems with the code and warn us about them  */}

      {/* 10) listen to the form onsubmit event and assign handleSubmit as a handler
      to handleSubmit pass onsubmit as argument 

      15) add noValidate attribute to the form element , prevents default browser validation */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email">EMAIL</label>

        {/*          
         16) add required field validation to the username field 
             a) pass an object as a second argument to the register function 
             b) specify required as the key and the error message as its value  */}
        <input
          type="text"
          id="email"
          {...register("email", { required: "email   is required" })}
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

        <button>Submit</button>
      </form>
      {/* 7) invoke devtools after the closing form tag 
      -then associate the devtool comp with the form you are tracking using control object you can destructure from form 
      - specify a control prop and assign the control object as value
      -touched = whether the field has been interacted with 
      -dirty = whether the field value has changed 
      - rhf tracks forms without rerendering the component, it follows uncontrolled inputs behaviour */}
      <DevTool control={control} />
    </div>
  );
}

export default Login;
