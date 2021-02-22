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
            From raised flower beds to decorative pavers and walkways, sometimes
            your property needs a little hardiness.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="./images/delivery.jpg" alt="water" />
          <ServicesH2>Delivery and Installation</ServicesH2>
          <ServicesP>
            Our knowledge and expertise will accompany you in whatever product
            you choose.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
