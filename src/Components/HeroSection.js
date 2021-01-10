import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';

function HeroSection() {
  const videosrc="https://www.instagram.com/p/CIZNzG6h9uB/?igshid=1x339wl4fvpn"
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4 ' autoPlay loop muted />
      <h1>Welcome To PetAdaption</h1>
      <p>Do You Want To Have a Pet?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Join Us  
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;