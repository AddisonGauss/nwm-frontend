import React from "react"
import { Image, Card } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../App.css"
import { CardWrapper, ProductsH1 } from "./ProductElements"
import { Link } from "react-router-dom"

const ImageSlider = () => {
  let settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <CardWrapper>
        <Link to="/silver-date-palm">
          <Card>
            <Card.Img variant="top" src="./images/silver-date-palm.jpg" />
            <Card.Body>
              <Card.Title>Silver Date Palm</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <Card.Img
            variant="top"
            src="./images/Texas_Sabal_may_hurricane_cut_transport-431x384.jpg"
          />
          <Card.Body>
            <Card.Title>Texas Sabal </Card.Title>
          </Card.Body>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <Card.Img
            variant="top"
            src="./images/Washingtonia_Mexana_Mar_30_2018_2_-273x256.jpg"
          />
          <Card.Body>
            <Card.Title>Washingtonia Mexana</Card.Title>
          </Card.Body>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <Card.Img variant="top" src="./images/cycas-revoluta-king-sago.jpg" />
          <Card.Body>
            <Card.Title>Cycas Revoluta-king-sapo</Card.Title>
          </Card.Body>
        </Card>
      </CardWrapper>

      <CardWrapper>
        <Card>
          <Card.Img variant="top" src="./images/citrus-tree.jpg" />
          <Card.Body>
            <Card.Title>Citrus Trees</Card.Title>
          </Card.Body>
        </Card>
      </CardWrapper>
    </Slider>
  )
}

export default ImageSlider
