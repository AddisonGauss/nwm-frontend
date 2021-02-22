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
import { Link } from "react-router-dom"
import { Products } from "../components/ShowProduct/Data"
const ShowProductPage = ({ match }) => {
  const id = match.params.id
  const product = Products[id - 1]
  const arrayOfPrices = Object.keys(product.price)
  const arrayOfStock = Object.keys(product.inStock)
  return (
    <Container className="text-center">
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>{" "}
      <Card>
        <h1>{product.name}</h1>
        <h3>{product.subtitle}</h3>
        <Row className="mt-5">
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Stats</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Full Grown:</Col>
                  <Col>{product.fullGrown}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Climate:</Col>
                  <Col>{product.climate}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Size</Col>
                  <Col>Price</Col>
                  <Col>Stock</Col>
                </Row>
              </ListGroup.Item>
              {arrayOfPrices.map((type, index) => (
                <ListGroup.Item>
                  <Row>
                    <Col>{type}</Col>
                    <Col>{product.price[type]}</Col>
                    <Col>
                      {product.inStock[type] ? "In Stock" : "Out of stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5 mx-3">
          {product.description}
        </Row>
      </Card>
    </Container>
  )
}

export default ShowProductPage
