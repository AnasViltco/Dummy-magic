import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Subscribe(props) {
  return (
    <Container fluid className="h-100 bg-dark">
      <Row>
        <Col>
          <div className="text-white mt-2 float-end" role="button">
            <BsFillArrowLeftCircleFill
              size="2em"
              onClick={() => (window.location.href = "/yasbaywaterfront")}
            />
          </div>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="text-white justify-content-center d-flex">
          <h2>Subscribe</h2>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col></Col>
        <Col sm={6} className="text-white mx-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User name</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className="d-block w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Subscribe;
