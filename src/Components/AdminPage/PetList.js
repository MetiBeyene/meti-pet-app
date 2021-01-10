import React, { useState, useEffect } from "react";

function PetList() {
  const [petData, setData] = useState([]);
  function fetchdata() {
    fetch(`https://meti-petadoption.azurewebsites.net/api/pets`)
      .then(async (response) => {
        let data = await response.json();
        setData(data);
        console.log(data);
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="cards">
      <h1>Pets</h1>
      <div className="cards__container">
        <div className="cards">
          <ul className="card_items">
            {petData.map((item) => (
              <div key={item.objectID}>
                <a href="/addPet">{item.Name}</a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PetList;
