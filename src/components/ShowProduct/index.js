import React from "react"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap"
const ShowProduct = ({ product }) => {
  const arrayOfPrices = Object.keys(product.price)
  const arrayOfStock = Object.keys(product.inStock)
  return (
    <Container>
      <Row>
        {" "}
        <h1 className="m-4">{product.name}</h1>
        <h3>{product.subtitle}</h3>
      </Row>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Prices/Stock</h3>
            </ListGroup.Item>
            {arrayOfPrices.map((type, index) => (
              <ListGroup.Item>
                <Row>
                  <Col>{type}</Col>
                  <Col>{product.price[type]}</Col>
                  {console.log(product.inStock[type])}
                  <Col>{product.inStock[type]}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowProduct
