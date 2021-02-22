import { Link as LinkScroll } from "react-scroll"
import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #3a7257;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterTitle = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
  color: #fff;
  font-weight: bold;
`

export const FooterLinkItems = styled.div`
  margin: 16px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;

  margin-bottom: 16px;
  color: #fff;
  font-weight: bold;
`

export const FooterLink = styled(LinkScroll)`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #60ce29;
    transition: 0.3s ease-out;
  }
`
