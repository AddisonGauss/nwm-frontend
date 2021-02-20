import styled from "styled-components"

export const ProductsContainer = styled.div`
  height: 100vh;
  background: #3a7257;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 800px;
  }

  /* @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`

export const ProductsH1 = styled.h1`
  font-size: 3rem;
  margin-top: 8rem;
  color: #fff;
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
