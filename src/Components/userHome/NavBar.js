import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Components/navbar.css";
import "react-responsive-modal/styles.css";

const userdata = JSON.parse(localStorage.getItem("user"));
const username = `${userdata?.FirstName} ${userdata?.LastName} `;
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
              <Link
                to="/myhome"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/myPets"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                MyPets
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Profile
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
