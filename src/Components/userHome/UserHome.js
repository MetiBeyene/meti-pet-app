import React, { useEffect, useState } from 'react';
import '../../App.css';
import Cards from './myPetsCards'
import Navbar from './NavBar';
  

function UserHome() {
  const [petData, setData] = useState([])
function fetchdata() {
  fetch(`https://meti-petadoption.azurewebsites.net/api/pets`)
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
useEffect(() => {
  fetchdata();
}, []);
  return (
    
    <>
     <Navbar></Navbar>
     <Cards petData={petData}></Cards>
     
    </>
  );
}
export default UserHome;