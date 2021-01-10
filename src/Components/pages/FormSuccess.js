import React from 'react';
import './Form.css';

var userdata = JSON.parse(localStorage.getItem("user"))
var username = userdata?.username
console.log(username)
const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1>Hello {username} </h1>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src='images/success.svg' alt='success-image' />
    </div>
  );
};

export default FormSuccess;