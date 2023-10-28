import React from "react";
// 2) install and import rhf to help manage forms with ease 
import { useForm } from "react-hook-form";

// 3) define the type of form data being sumitted by creating the form value type
type FormValues = {
  email: string;
  password: string;
};
function Register() {
  return (
    <div>
      {/* 1) create form with labels and form fields */}
      <form>
        <label htmlFor="email">EMAIL</label>
        <input type="text" id="email" />
        <label htmlFor="password">PASSWORD</label>
        <input type="text" id="password" />
        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input type="text" id="confirmPassword" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;