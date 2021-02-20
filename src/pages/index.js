import React, { useState } from "react"
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
      <Services />
      <InfoSection {...homeObjOne} />
      <ProductSection />
    </>
  )
}

export default Home
