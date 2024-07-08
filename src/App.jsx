import React from "react"
import Navbar from "./comnponents/navbar/Navbar"
import Hero from "./comnponents/hero/Hero"
import Banner from "./comnponents/banner/Banner"
import AboutUs from "./comnponents/about/AboutUs"
import Contact from "./comnponents/contact/Contact"


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Banner/>
      <AboutUs/>
      <Contact/>
    </div>
  )
}

export default App
