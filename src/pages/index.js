import React, { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data"

import Services from "../components/Services"
import InfoSection from "../components/InfoSection"
import ProductSection from "../components/ProductSection"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services />
      <Testimonials />
      <ProductSection />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
