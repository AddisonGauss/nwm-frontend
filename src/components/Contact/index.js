import React from "react"
import { Form, Button } from "react-bootstrap"
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  ContactH1,
  ContactFormWrapper,
  Column1,
  Column2,
  ColumnHeader,
  ContactP,
  ContactGroup,
  TextWrapper,
  Link,
} from "./ContactElements"
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactH1>Contact</ContactH1>

      <ContactWrapper>
        <ContactRow>
          <Column1>
            <TextWrapper>
              <ColumnHeader>Contact Us</ColumnHeader>
              <ContactGroup>
                <ContactP bold={true}>Physical Address</ContactP>
                <ContactP>
                  1331 Crosstimbers Houston, TX. 77022 <br />
                  (Interstate 45 at Crosstimbers)
                </ContactP>
              </ContactGroup>

              <ContactGroup>
                <ContactP bold={true}>Email</ContactP>
                <ContactP>
                  <Link href="mailto:sodmonster@gmail.com">
                    sodmonster@gmail.com
                  </Link>
                </ContactP>
              </ContactGroup>
              <ContactGroup>
                {" "}
                <ContactP bold={true}>Phone Number</ContactP>
                <ContactP>
                  <Link href="tel:+7132919466">713-291-9466</Link>
                </ContactP>
              </ContactGroup>
            </TextWrapper>
          </Column1>
          <Column2>
            <ContactFormWrapper>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control required placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPhoneNumber">
                  <Form.Label>Your Phone Number</Form.Label>
                  <Form.Control required placeholder="Enter Phone Number" />
                </Form.Group>
                <Form.Group controlId="formGroupContactText">
                  <Form.Label>Describe Your Interest</Form.Label>
                  <Form.Control as="textarea" rows={7} />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-block">
                  Send
                </Button>
              </Form>
            </ContactFormWrapper>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default Contact
