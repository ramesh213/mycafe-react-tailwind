import React from "react"
import Navbar from "./comnponents/navbar/Navbar"
import Hero from "./comnponents/hero/Hero"
import Banner from "./comnponents/banner/Banner"




function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Banner/>
    </div>
  )
}

export default App
