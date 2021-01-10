import React from 'react'
import '../../App.css'
import Cards from '../Card'
import '../HeroSection'
import HeroSection from '../HeroSection'
import Navbar from '../../Components/navbar';


function Home(){
    return(
        <>
         <Navbar />
        <HeroSection/>
        <Cards/>
        </>
    )    
}
export default Home