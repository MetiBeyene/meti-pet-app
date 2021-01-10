import React from "react";
import "../Card.css";

function Content() {
  return (
    <div className="cards">
      <h1>User List</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div className="about">
              <p> The Shelter</p>
            </div>
            <div className="about">
              <p> The Shelter</p>
            </div>
            <ul className="cards__items">
              <div className="about">
                <p> The Shelter </p>
              </div>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
