import React from "react"
// import "../../bootstrap.min.css"
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesBg,
  ImageBg,
  ServicesContent,
} from "./ServicesElements"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesBg>
        <ImageBg src="./images/palm.png" />
      </ServicesBg>
      <ServicesContent>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesP>
          We work hard to keep your projects efficient and profitable. We
          deliver to your site at your convenience. Contact us for a delivery
          quote to your location.
        </ServicesP>
      </ServicesContent>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="./images/Spruce_with_grass.svg" alt="grass" />
          <ServicesH2>Landscape Design</ServicesH2>
          <ServicesP>
            Build your dream lawn or garden with our designers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="./images/grassland.svg" alt="sod" />
          <ServicesH2>Sod Sales and Installation</ServicesH2>
          <ServicesP>
            We Offer end to end services from mowing to pruning.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src="./images/Earth_Water_Recycling_Woofer.svg"
            alt="water"
          />
          <ServicesH2>Water Management</ServicesH2>
          <ServicesP>
            Maximize water while ensuring the health of your plants
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
