import styled from "styled-components"

export const ServicesContainer = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const ServicesBg = styled.div`
  position: absolute;
  background: #3a7257;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
  -o-object-fit: contain;
  opacity: 0.045;
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);

  @media screen and (max-width: 480px) {
    width: auto;
    height: auto;
  }
`

export const ServicesContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  top: 0;
  padding: 0 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 100px;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 375px;
  /* padding: 30px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale() (1.5);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 240px;
  }
`

export const ServicesIcon = styled.img`
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  z-index: 1;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`
export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;

  color: #fff;

  @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

export const ServicesP = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`
