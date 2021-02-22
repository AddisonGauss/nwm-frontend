import React from "react"
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterTitle,
} from "./FooterElements"
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterTitle>Northside Wholesale Nursery</FooterTitle>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                href="#"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                About
              </FooterLink>
              <FooterLink
                href="#"
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Services
              </FooterLink>
              <FooterLink
                href="#"
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Testimonials
              </FooterLink>
              <FooterLink
                href="#"
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Products
              </FooterLink>
              <FooterLink
                href="#"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Contact
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
