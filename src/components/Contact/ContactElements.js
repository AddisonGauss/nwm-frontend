import styled from "styled-components"

export const ContactContainer = styled.div`
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: #fff;
  margin-bottom: 10rem;

  @media screen and (max-width: 768px) {
    padding: 150px 0;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ContactBg = styled.div`
  position: absolute;
  background: #f9f9f9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin: 2rem auto;
  padding: 0 24px;
  align-content: center;

  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`

export const ContactRow = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`

export const ContactH1 = styled.h1`
  font-size: 3rem;
  margin-top: 8rem;
  color: #3a7257;
  font-weight: bold;
  margin-bottom: 2rem;
  z-index: 1;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Column2 = styled.div`
  background-color: #3a7257;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const ContactFormWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 24px;
`

export const ColumnHeader = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 800;
  color: #3a7257;

  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`
export const ContactGroup = styled.div`
  margin: 1rem 0;
`

export const ContactP = styled.div`
  color: #3a7257;
  font-weight: ${({ bold }) => (bold ? "800" : "400")};

  font-size: 20px;
  line-height: 24px;
`

export const Link = styled.a`
  color: #3a7257;
`
