import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import yasBayLogo from "../assets/homeScreenImages/YasBayLogo.png";
import yasMarinaLogo from "../assets/homeScreenImages/YasMarinaLogo.png";
import yasIslandLogo from "../assets/homeScreenImages/YasIslandLogo.png";
import magicOfWinterLogo from "../assets/homeScreenImages/MagicOfWinterLogo.png";
import "../assets/css/homePage.css";

function HomePage() {
  return (
    <>
    <Container fluid className="homePagebg">
      <Row className="align-items-center mb-5 homelogo">
        <Col className="justify-content-center d-flex">
          <img class="img-fluid imgIcon" src={magicOfWinterLogo}></img>
        </Col>
      </Row>
      <Row className="align-items-center mb-3">
        <Col></Col>
        <Col sm={4}>
          <Button
            className="fw-bold rounded-pill w-100 marinaButton"
            onClick={() => (window.location.href = "/yasmarina")}
          >
            Welcome to Yas Marina
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Row className="align-items-center">
        <Col></Col>
        <Col sm={4}>
          <Button
            className=" fw-bold rounded-pill  w-100 YasButton"
            onClick={() => (window.location.href = "/yasbaywaterfront")}
          >
            Welcome to Yas Bay Waterfront
          </Button>
        </Col>
        <Col></Col>
      </Row>
      
    </Container>
    <div className="col-sm-12 text-center">
        

          <img class="img-fluid" src={yasIslandLogo}></img>
          <img class="img-fluid" src={yasMarinaLogo}></img>
          <img class="img-fluid" src={yasBayLogo}></img>

        </div>
      
    </>

  );
}

export default HomePage;
