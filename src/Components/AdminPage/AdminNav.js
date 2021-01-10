import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/navbar.css";
import "react-responsive-modal/styles.css";
import { getUserById } from "../../lib/app";

let token = JSON.parse(localStorage.getItem("token"));
let id = `${token}`;
let username = getUserById(id).FirstName;
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const logOut = () => {
    window.location.replace("/");
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Pet Adaption
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addPet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                AddPet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/PetList"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PetList
              </Link>
            </li>

            <p className="nav-item">
              <Link to="#" className="">
                Wellcome {username}
                <button onClick={logOut}>Logout</button>
              </Link>
            </p>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
