import React, { useState, useEffect } from 'react';

import { Link} from 'react-router-dom';
import './navbar.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Form from './pages/Form'
import FormLogin from './pages/FormLogin'
import  {Button} from '../Components/button'


var userdata = JSON.parse(localStorage.getItem("user"))
var username = userdata?.FirstName
var isAdmi =  false;
if(userdata?.type === "Admi"){
  isAdmi  = true
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick= () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = () => setIsLoggedIn(true)
  const onCloseModal1 = () => setOpen1(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false)
  var token = localStorage.getItem("token")
  if(!isLoggedIn){
    if(token){
      setIsLoggedIn(true)
    }
  }
  if(username){
    if(!loggedIn){
      setIsLoggedIn(true)
    }
    
  }
 const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

 
  const logOut = () => {
    setIsLoggedIn(true)
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    window.location.reload();
  }

     const logIn=()=>{
       if( !loggedIn){
         onOpenModal2()
       }}
     
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  

  return (
    
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Pet Adaption
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
           
            { isAdmi   &&  <li className='nav-item'>
              <Link
                to='/adminHome'
                className='nav-links'
               
              >
                AdminHome
              </Link>
            </li> }
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && !loggedIn && 
              <Link
              to="/sign-up"
                className='nav-links'
                 >
                  <Button buttonStyle='btn--outline'>Sign up</Button>
                  </Link>}
          <div>
      <Modal open={open1} onClose={onCloseModal1} center>
      <Form/>
      </Modal>
      </div>  
      <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            {button && !loggedIn && 
              <Link
                className='nav-links'
                onClick={logIn} >
                  <Button buttonStyle='btn--outline'>Log In</Button>
                  </Link>}
           
            {button && loggedIn && <Button buttonStyle='btn--outline'>
               <Link className='nav-links' onClick={logOut}>
                Log Out
              </Link></Button>}
        </div>
<div>
      <Modal open={open2} onClose={onCloseModal2} center>
      <FormLogin/>
      </Modal>
      </div>
   
   
      </nav>
    </>
  );
  }

export default Navbar;