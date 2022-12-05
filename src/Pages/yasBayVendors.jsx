import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function YasBayVendors() {
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
          <h2>Yas Bay Vendors List</h2>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="text-white justify-content-center d-flex mx-5">
          <Table bordered responsive className="text-white">
            <thead>
              <tr>
                <th>Tenant</th>
                <th>Offer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default YasBayVendors;
