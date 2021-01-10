import { useState, useEffect } from 'react';


var userdata = JSON.parse(localStorage.getItem("user"))
var FirstName= userdata?.FirstName
var LastName= userdata?.LastName
var email=userdata?.email
var user_id = userdata?.id
var password= userdata?.Password1
var phone= userdata?.Phone

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    FirstName: FirstName,
    LastName: LastName,
    email:email,
    password:password,
    password2: password,
    phone: phone,
    bio:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  
    setErrors(validate(values));
    console.log(values)
    var data = {id:user_id, Firstname: values.FirstName, LastName: values.Lastname, email: values.Email }
    fetch("https://meti-petadoption.azurewebsites.net/api/users", {
      method:'PUT',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  })
    localStorage.setItem("user",JSON.stringify(values))
    setIsSubmitting(true);
  };
 

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;