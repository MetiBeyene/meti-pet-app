import React, { useEffect, useState } from 'react';
import '../../Components/Card.css';
import './PetPage.css'
import '../button.css'

const userdata = JSON.parse(localStorage.getItem("user"))
const user_id = userdata?.id;
function Pet() {
const [petData, setData] = useState([])
function fetchdata() {
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/${window.location.href.split('/').reverse()[0]}`)
    .then(async response => {
        let data = await response.json();
       setData(data)
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
    })
    .catch(error => {
       
        console.error('There was an error!', error);
    });
}
function adopt(){
  const petId = window.location.href.split('/').reverse()[0];
  
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/own_pet`, {
    method:'POST',
    body:JSON.stringify({user_id: user_id, pet_id: petId}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(async res => {
      const pet = await res.json();
      setData(pet)
      fetchdata()
  })
}
function foster_pet(){
  const petId = window.location.href.split('/').reverse()[0];
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/foster_pet`, {
    method:'POST',
    body:JSON.stringify({user_id: user_id, pet_id: petId}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(async res => {
      const pet = await res.json();
      setData(pet)
      fetchdata()
  })
}
function save_pet(){
  const petId = window.location.href.split('/').reverse()[0];
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/save_pet`, {
    method:'POST',
    body:JSON.stringify({user_id: user_id, pet_id: petId}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(async res => {
      var pet = await res.json();
      setData(pet)
      fetchdata()
  })
}
function Unsave_pet(){
  const petId = window.location.href.split('/').reverse()[0];
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/Unsave_pet`, {
    method:'POST',
    body:JSON.stringify({user_id: user_id, pet_id: petId}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(async res => {
      const pet = await res.json();
      setData(pet)
      fetchdata()
  })
}

function return_pet(){
  const petId = window.location.href.split('/').reverse()[0];
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets/return_pet`, {
    method:'POST',
    body:JSON.stringify({pet_id: petId}),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(async res => {
      const pet = await res.json();
        setData(pet)
        fetchdata()
  })
}
useEffect(() => {
  fetchdata();

}, []);
  var pet = {
    type: "String",
    name: "name"
  }
  return (
    <div className='container'>
        <div className="content">
        <div className='img_container'>
     <img  className="img" src={`${petData?.avatar}`}></img>
     </div>
     <div className='text-contaier'>
      <div>Type: {petData?.Type}</div>
      <div>Name: {petData?.Name}</div>
      <div>Adaption Status: {petData?.Status}</div>
      <div>Height: {petData?.Height}</div>
      <div>Weight: {petData?.Weight}</div>
      <div>Color: {petData?.Color}</div>
      <div>Bio: {petData?.Bio}</div>
     <div>Hypoallergenic: { petData?.Hypoallargenic}</div> 
     <div>dietary restrictions: {petData?.DietaryRestrictions}</div>
    <div>breed of animal: {petData?.Breed}</div> 
     </div>

     {petData.Owner_id == user_id && petData.Status == 'Adopted' ?
     <button className="btn btn--primary "  onClick={return_pet}>Return Pet</button>
     : <button className="btn btn--primary " onClick={adopt}>Adopt</button> 
}
{petData.Owner_id != user_id && petData.Status !='Adopted' && petData.Status != 'Fostered' || (petData.Status == 'Available') ?
<button className="btn btn--primary " onClick={foster_pet}>Foster</button> :
 <button className="btn btn--primary "  onClick={return_pet}>Return Pet</button>

}

{petData.Owner_id != user_id ?
<button className="btn btn--primary " onClick={save_pet}>Save</button> : 
<button className="btn btn--primary " onClick={Unsave_pet}>UnSave</button> 

}
        </div>
      
     
    

            
        </div>

  );
}

export default Pet ;