import { useState} from 'react';
import {addNewPet} from '../../lib/app'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    Name: '',
    Type:'',
    Status: '',
    avatar: '',
    Height: '',
    Weight:'',
    Color:'',
    Bio:'',
    Hypoallergenic:'',
    DietaryRestrictions:'',
    Breed:''
  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 const handleChange = e => {
  const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
};
  const handleSubmit = e => {
    e.preventDefault();
   setErrors(validate(values));
    addNewPet(values);
    localStorage.setItem("Pets",JSON.stringify(values))
    setIsSubmitting(true);
  };
 return { handleChange, handleSubmit, values, errors };
};

export default useForm;