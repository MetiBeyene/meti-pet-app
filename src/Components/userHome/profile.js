
import React from 'react';
import validate from '../../Components/pages/validateInfo';
import useForm1 from './useForm1';
import '../../Components/pages/Form.css';

var userdata = JSON.parse(localStorage.getItem("user"))
const Profile = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm1(
    submitForm,
    validate
  );
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='FirstName'
            value={values.FirstName}
            onChange={handleChange}
          />
          {errors.FirstName && <p>{errors.FirstName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='LastName'
            value={values.LastName}
            onChange={handleChange}
          />
          {errors.LastName && <p>{errors.LastName}</p>}
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
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
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone number</label>
          <input
            className='form-input'
            type='phone'
            name='phone'
            placeholder='Enter your phone number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Bio</label><br></br>
        <textarea name="bio" rows="10" cols="80"  onChange={handleChange}></textarea></div>
        <button className='form-input-btn' type='submit'>
          Save
        </button>
        <span className='form-input-login'>
         
        </span>
      </form>
    </div>
  );
};

export default Profile;