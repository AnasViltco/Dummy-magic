import React, { useState, useRef, useEffect } from "react";
import "../assets/css/navMenu.css";
import { Nav, Navbar } from "react-bootstrap";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillXCircleFill, BsInstagram, BsFacebook } from "react-icons/bs";
import ArrowUp from "../assets/homeScreenImages/Arrows (1).png";
import ArrowDown from "../assets/homeScreenImages/Arrows (2).png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import akiba from "../assets/areaMapImages/Akiba Dori.png";
import Asia from "../assets/areaMapImages/Asia Asia.png";
import Central from "../assets/areaMapImages/Central.png";
import Daikan from "../assets/areaMapImages/Daikan.png";
import Drop from "../assets/areaMapImages/Drop Ad.png";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";
import marinaIcon from "../assets/homeScreenImages/hamburger.png";
import waterFrontIcon from "../assets/homeScreenImages/hamburger2.png";
import Facebook from "../assets/homeScreenImages/UI FB (2).png";
import Insta from "../assets/homeScreenImages/UI Insta (1).png";

export default function Menu(props) {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();
  const [tab, setTab] = useState();
  const ref = useRef(null);
  let url = window.location.href.split("/")[3];
  const reference = useRef(null);
  console.log(url);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  const submit = () => {
    console.log(value, "data");
    let validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const templateParams = {
      email: value,
    };
    if (value.match(validEmail)) {
      emailjs
        .send(
          "service_xcr7no2",
          "template_1sn1deq",
          templateParams,
          "l_uJoPwBfU0lbR98V"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setValue("");
            handleShow("lg-down");
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    } else {
      alert("invalid email enter");
    }
  };
  // const scroltoBottom = ()=>{
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // }
  // const scroltoTop = ()=>{
  //   reference.current?.scrollIntoView({behavior: 'smooth'});
  // }
  return (
    <>
      <Container fluid>
        <Row className="text-center" ref={reference}>
          {/* <Col xs={12}>
         <div className="imgDown">
         <img src={ArrowDown} alt ="" className="imgarrow1"
          // onClick={()=>scroltoBottom()}
          />
         </div>
          </Col> */}
        </Row>
        <Row className="mx-3">
          <Col xs={4}>
            <div className="mt-2 text-white backicon" role="button">
              <BsFillArrowLeftCircleFill
                size="2em"
                onClick={() => (window.location.href = "/")}
              />
            </div>
          </Col>

          {/* <Col xs={4}>
          <div className="mt-2 text-center text-white" role="button">
              <img src={ArrowUp} alt ="" className="imgarrow" 
              // onClick={()=>scroltoTop()}
              />
            </div>
          </Col> */}
          <Col xs={4}>
            <div className="imgburger">
              {url === "yasmarina" ? (
                <img
                  className={show ? "navbg d-none" : "navbg navicon"}
                  src={waterFrontIcon}
                  alt=""
                  onClick={() => handleShow("xl-down")}
                />
              ) : (
                <img
                  className={show ? "navbg d-none" : "navbg navicon"}
                  src={marinaIcon}
                  alt=""
                  onClick={() => handleShow("xl-down")}
                />
              )}
            </div>
            <Navbar
              className="d-none"
              collapseOnSelect
              expand="null"
              variant="dark"
            >
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => handleShow("xl-down")}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Modal
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                  className={
                    fullscreen === "sm-down"
                      ? "newsLetter"
                      : fullscreen === "lg-down"
                      ? "newsLetter"
                      : fullscreen === "md-down"
                      ? "modalImge"
                      : "modalImge"
                  }
                >
                  <Modal.Body>
                    {fullscreen === "sm-down" ? (
                      <div className="row text-center">
                        <div className="col-12 my-3">
                          <span className="letterText">
                            JOIN OUR NEWS LETTER
                          </span>
                        </div>
                        <div className="col-12 my-2">
                          <input
                            type="email"
                            className="input"
                            placeholder="TYPE YOUR EMAIL HERE"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <div className="col-12 my-2">
                          <Button
                            onClick={(e) => submit()}
                            className="submitbutton"
                          >
                            Submit
                          </Button>
                        </div>
                        <div className="col-sm-12 pt-3 pb-2">
                          {/* onClick={() => setShow(false)} */}
                          <i
                            onClick={() => setShow(false)}
                            id="times"
                            class="fas fa-times"
                          ></i>
                        </div>
                      </div>
                    ) : fullscreen === "lg-down" ? (
                      <p className="enjoyWinter">
                        Hope you enjoyed the magic of winter. See you soon!
                      </p>
                    ) : fullscreen === "md-down" ? (
                      <div className="row my-2">
                        <div className="col-md-6 col-12 mt-2">
                          <Button
                            className="waterfrontButton"
                            onClick={() => setTab(true)}
                          >
                            YAS BAY WATERFRON OFFERS
                          </Button>
                        </div>
                        <div className="col-md-6 col-12 mt-2">
                          <Button
                            className="mainaButton"
                            onClick={() => setTab(false)}
                          >
                            YAS MARINA OFFERS
                          </Button>
                        </div>

                        {tab ? (
                          <>
                            <div className="col-12">
                              <div className="text-center offerdiv">
                                <img src={akiba} alt="" />
                                <p>
                                  Hope you enjoyed the magic of winter. See you
                                  soon!
                                </p>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="text-center offerdiv">
                                <img src={Asia} alt="" />
                                <p>
                                  Hope you enjoyed the magic of winter. See you
                                  soon!
                                </p>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="text-center offerdiv">
                                <img src={Central} alt="" />
                                <p>
                                  Hope you enjoyed the magic of winter. See you
                                  soon!
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-12">
                              <div className="text-center offerdiv">
                                <img src={Daikan} alt="" />
                                <p>
                                  Hope you enjoyed the magic of winter. See you
                                  soon!
                                </p>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="text-center offerdiv">
                                <img src={Drop} alt="" />
                                <p>
                                  Hope you enjoyed the magic of winter. See you
                                  soon!
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <>
                        <Nav
                          onClick={() => handleShow("sm-down")}
                          className="linkList"
                        >
                          <Nav.Link>JOIN OUR NEWS LETTER</Nav.Link>
                        </Nav>
                        <Nav className="linkList">
                          <Nav.Link onClick={() => handleShow("md-down")}>
                            CHECKOUT OUR LATEST OFFER
                          </Nav.Link>
                        </Nav>
                        <Nav className="visitMarina">
                          <Nav.Link href="/yasmarina">
                            VISITE YAS MARINA
                          </Nav.Link>
                        </Nav>
                        <Nav className="visitMarina">
                          <div className="d-flex mx-auto iconData">
                            <span className="p-2">FOLLOW US ON</span>
                            <img
                              src={Facebook}
                              onClick={() =>
                                window.open(
                                  "https://www.facebook.com/YasMarinaAbuDhabi",
                                  "_blank"
                                )
                              }
                            />
                            <img
                              className="mx-2"
                              src={Insta}
                              onClick={() =>
                                window.open(
                                  "https://www.instagram.com/yasmarinaabudhabi/",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                        </Nav>
                        <Nav className="visitFront">
                          <Nav.Link href="/yasbaywaterfront">
                            VISITE YAS BAY WATERFONT
                          </Nav.Link>
                        </Nav>
                        <Nav className="visitFront">
                          <div className="d-flex mx-auto iconData">
                            <span className="p-2">FOLLOW US ON</span>
                            <img
                              src={Facebook}
                              onClick={() =>
                                window.open(
                                  "https://www.facebook.com/YasBayUAE/",
                                  "_blank"
                                )
                              }
                            />
                            <img
                              className="mx-2"
                              src={Insta}
                              onClick={() =>
                                window.open(
                                  "https://www.instagram.com/yasbayuae/",
                                  "_blank"
                                )
                              }
                            />
                          </div>
                        </Nav>
                      </>
                    )}
                  </Modal.Body>
                </Modal>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      {/* <div ref={ref} className="ref"></div> */}
    </>
  );
}
