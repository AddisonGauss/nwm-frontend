import React, { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi"
import { animateScroll } from "react-scroll"
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavPhoneNumber,
  PhoneNumberContainerOnSmallScreens,
  NavPhoneNumberContainer,
  NavPhoneNumberForSmallScreens,
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 85) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    animateScroll.scrollToTop()
  }
  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Northside Wholesale Nursery
          </NavLogo>
          <MobileIcon>
            <FaBars onClick={toggle} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="testimonials"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Testimonials
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="products"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Products
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-85}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavPhoneNumberContainer>
            <NavPhoneNumber href="tel:+7132919466">
              <FiPhoneCall style={{ margin: "0 10px" }} />
              713-291-9466
            </NavPhoneNumber>
          </NavPhoneNumberContainer>
        </NavbarContainer>
      </Nav>
      <PhoneNumberContainerOnSmallScreens>
        <NavPhoneNumberForSmallScreens href="tel:+7132919466">
          <FiPhoneCall style={{ margin: "0 10px" }} />
          713-291-9466
        </NavPhoneNumberForSmallScreens>
      </PhoneNumberContainerOnSmallScreens>
    </>
  )
}

export default Navbar
