import React, { useEffect } from 'react';
import '../../Components/Card.css';
import CardItem from '../../Components/CardItem';

function Cards({petData}) {

  return (
    <div className='cards'>
      <h1> Pets</h1>
      {petData.length == 0 ?
      <div>You curretly don't own pet</div>:
      <div></div>
       }
      <div className='cards__container'>
       
          <ul className="cards__items">
        {petData.map((value, index) => {
        return <div >
         <CardItem
        src= {`https://meti-petadoption.azurewebsites.net/${value.avatar}`}
        text= {`PetName: ${value.Name} Status:${value.Status}`}
       label={value.Type}
        path={`/PetPage/${value._id}`}
     />
     </div>
      })}
            </ul>
            </div>
        </div>
      );
}

export default Cards;