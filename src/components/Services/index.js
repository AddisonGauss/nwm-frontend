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
          <ServicesIcon src="./images/SylvesterTorrete1.jpg" alt="grass" />
          <ServicesH2>Landscaping</ServicesH2>
          <ServicesP>
            Build your dream lawn or garden with our designers. Many choices of
            sod and tree installations.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="./images/flower-bed.jpg" alt="sod" />
          <ServicesH2>Hardscapes</ServicesH2>
          <ServicesP>
            From raised flower beds to gravel, sometimes your property needs a
            little hardiness.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src="./images/Earth_Water_Recycling_Woofer.svg"
            alt="water"
          />
          <ServicesH2>Irrigation-Drainage</ServicesH2>
          <ServicesP>
            Maximize water while ensuring the health of your plants.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
