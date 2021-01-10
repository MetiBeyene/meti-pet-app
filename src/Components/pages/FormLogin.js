import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import UserHome from './UserHome'

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, handleLogSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  var token = localStorage.getItem("token")
  if(token){
    return <UserHome/>
  }
  return (
    <div className='form-content-right'>
      <form onSubmit={handleLogSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
       
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
         Dont have  an account? SignUp <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;