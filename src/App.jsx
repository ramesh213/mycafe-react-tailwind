import React, { useEffect, useState } from "react"
import Navbar from "./comnponents/navbar/Navbar"
import Hero from "./comnponents/hero/Hero"
import Banner from "./comnponents/banner/Banner"
import AboutUs from "./comnponents/about/AboutUs"
import Contact from "./comnponents/contact/Contact"
import ContactPopup from "./comnponents/dialogbox/ContactPopup"
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {

  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => {
    setPopUp(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  },[]);

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Banner/>
      <AboutUs/>
      <Contact handlePopUp = {handlePopUp}/>
      <ContactPopup popUp = {popUp} setPopUp = {setPopUp}/>
    </div>
  )
}

export default App
