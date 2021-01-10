import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignUp";
import UserHome from '../userHome/UserHome'


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  const userdata = JSON.parse(localStorage.getItem("user"));
  const username = userdata?.username;
  return (
    <div className="form-container">
      {!username ? <FormSignup submitForm={submitForm} /> : <UserHome />}
    </div>
  );
};

export default Form; 
