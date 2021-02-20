import React from "react"

import { ProductsContainer, ProductsH1 } from "./ProductElements"
import { Container } from "react-bootstrap"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ImageSlider from "./ImageSlider"

const ProductSection = () => {
  return (
    <ProductsContainer id="products">
      <ProductsH1>Products</ProductsH1>
      <Container style={{ width: "80%" }}>
        <ImageSlider />
      </Container>
    </ProductsContainer>
  )
}

export default ProductSection
