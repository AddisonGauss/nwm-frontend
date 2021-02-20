import React, { useState } from "react"
import { Button } from "../ButtonElement"
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements"

const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
    console.log(hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src="./images/grass.jpg" alt="heroimage" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Northside Wholesale Nursery</HeroH1>
        <HeroP>
          We can help you with your landscape project 7 days a week!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="products"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            href="#"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-85}
          >
            VIEW PRODUCTS{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
