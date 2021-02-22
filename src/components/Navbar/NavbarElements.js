import styled from "styled-components"
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"

export const Nav = styled.nav`
  background: #fff;
  height: 85px;
  margin-top: -85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
`

export const PhoneNumberContainerOnSmallScreens = styled.div`
  display: none;
  @media screen and (max-width: 550px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    position: sticky;
    top: 85px;
    width: 100%;
    background: #60ce29;
    z-index: 3;
  }
`

export const NavPhoneNumberForSmallScreens = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #3a7257;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
`

export const NavLogo = styled(LinkRouter)`
  color: #075534;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 0 24px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  @media screen and (max-width: 780px) {
    width: 40%;
  }
  @media screen and (max-width: 1400px) {
    font-size: 1.2rem;
  }
  &:hover {
    text-decoration: none;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: auto;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #075534;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const NavItem = styled.li`
  color: #000;
  height: 85px;
  &:hover {
    color: #60ce29;
  }
`

export const NavLinks = styled(LinkScroll)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: bold;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #60ce29;
  }

  &:hover {
    text-decoration: none;
    color: #60ce29;
    transition: 0.3s ease-out;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #3a7257;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  letter-spacing: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #60ce29;
    color: #fff;
    text-decoration: none;
  }
`
export const NavPhoneNumberContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 24px;

  @media screen and (max-width: 550px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    justify-content: flex-end;
    margin: auto;
    width: 80%;
    margin-left: 0;
    margin-right: 7rem;
  }
`
export const NavPhoneNumber = styled.a`
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  align-items: center;
  color: #3a7257;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #60ce29;
    text-decoration: none;
  }

  @media screen and (max-width: 550px) {
    color: #60ce29;
    margin: auto;
    font-size: 1.5rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #fff;
      text-decoration: none;
    }
  }
`
