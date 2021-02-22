import styled from "styled-components"

export const ProductsContainer = styled.div`
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

export const ProductBg = styled.div`
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

export const ProductImageBg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  -o-object-fit: cover;
  opacity: 0.045;
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);
`

export const ProductsHeaderContent = styled.div`
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

export const ProductsH1 = styled.h1`
  font-size: 3rem;
  margin-top: 8rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 2rem;
  z-index: 1;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  &.active,
  &.hover,
  &.focus {
    outline: none;
    border: none;
  }
`
