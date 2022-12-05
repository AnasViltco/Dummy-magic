import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location1 from "../assets/yasMarinaAssets/locationImages/NutcrackerShop.png";
import location2 from "../assets/yasMarinaAssets/locationImages/SnowGlobe.png";
import location3 from "../assets/yasMarinaAssets/locationImages/YasDome.png";
import location4 from "../assets/yasMarinaAssets/locationImages/WelcomeArch.png";
import location5 from "../assets/yasMarinaAssets/locationImages/ChristmasTree.png";
import location6 from "../assets/yasMarinaAssets/locationImages/Santa_sGrotto.png";
import popup1 from "../assets/yasMarinaAssets/popupImages/NutcrackerShop.png";
import popup2 from "../assets/yasMarinaAssets/popupImages/SnowGlobe.png";
import popup3 from "../assets/yasMarinaAssets/popupImages/YasDome.png";
import popup4 from "../assets/yasMarinaAssets/popupImages/WelcomeArch.png";
import popup5 from "../assets/yasMarinaAssets/popupImages/ChristmasTree.png";
import popup6 from "../assets/yasMarinaAssets/popupImages/Santa_sGrotto.png";
import qrLocation from "../assets/yasMarinaAssets/You-Are-Here.png";
import yasMarina from "../assets/areaMapImages/YasMarinaMap.jpg"

import "../assets/css/yasMarinaMap.css";

import Modal from "react-bootstrap/Modal";
import Menu from "../Components/NavMenu";

function YasMarinaMap() {
  const [show, setShow] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDescription, setPopupDescription] = useState("");
  const ref = useRef(null);
  let url = window.location.href.split("/")[4];
  const qrLocList = ["1m", "2m", "3m", "4m", "5m", "6m"];

  useEffect(() => {
    const locationUrl = window.location.href.split("/");
    let url = window.location.href.split("/")[4];
    const locationPointer = locationUrl[locationUrl.length - 1];
    if (qrLocList.includes(url)) {
      var element = document.getElementById(locationPointer);
      console.log(locationPointer, "''''", element)
      element.classList.remove("show-icon");
      element.scrollIntoView();
    }
  }, [url]);

  const handleClose = () => setShow(false);
  const handleShow = (location1, title) => {
    setShow(true);
    setPopupImage(location1);
    if(title === "nuter"){
      setPopupTitle("Nutcracker Shop");
      setPopupDescription("Walk through the tunnel of tales near the waters of Yas Marina.");
    }
    if(title === "snow"){
      setPopupTitle("Snow Globe");
      setPopupDescription("Immersive yourself inside the Snow Globe photo opportunity at Yas Marina walkway.");
    }
    if(title === "tree"){
      setPopupTitle("Christmas Tree");
      setPopupDescription("Standing tall at the center of Yas Marina, let’s come together as one, at the Christmas Tree to share the festive spirit with each other.");
    }
    if(title === "arch"){
      setPopupTitle("Welcome Arch");
      setPopupDescription("The Magic of Winter is here! Welcome to the festive experience crafted for you at Yas Marina.");
    }
    if(title === "santa"){
      
      setPopupTitle("Santa’s Grotto");
      setPopupDescription("Say ‘Hello’ to Santa and his Elves at Santa’s magical grotto. Make sure you let him know your wintery wishes!");
    
    }
  };

  // const yasMarinalocations = [
  //   {
  //     id: "loc1m",
  //     src: location1,
  //     title: "Nutcracker Shop",
  //     description:
  //       "Walk through the tunnel of tales near the waters of Yas Marina.",
  //     class: "locImage loc1",
  //     modalImg: popup1,
  //   },
  //   {
  //     id: "loc2m",
  //     src: location2,
  //     title: "Snow Globe",
  //     description:
  //       "Immersive yourself inside the Snow Globe photo opportunity at Yas Marina walkway.",
  //     class: "locImage loc2",
  //     modalImg: popup2,
  //   },
  //   {
  //     id: "loc4m",
  //     src: location4,
  //     title: "Welcome Arch",
  //     description:
  //       "The Magic of Winter is here! Welcome to the festive experience crafted for you at Yas Marina.",
  //     class: "locImage loc4",
  //     modalImg: popup4,
  //   },
  //   {
  //     id: "loc5m",
  //     src: location5,
  //     title: "Christmas Tree",
  //     description:
  //       "Standing tall at the center of Yas Marina, let’s come together as one, at the Christmas Tree to share the festive spirit with each other.",
  //     class: "locImage loc5",
  //     modalImg: popup5,
  //   },
  //   {
  //     id: "loc6m",
  //     src: location6,
  //     title: "Santa’s Grotto",
  //     description:
  //       "Say ‘Hello’ to Santa and his Elves at Santa’s magical grotto. Make sure you let him know your wintery wishes!",
  //     class: "locImage loc6",
  //     modalImg: popup6,
  //   },
  // ];

  // const yasMarinaQRlocations = [
  //   {
  //     id: "1m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc1",
  //   },
  //   {
  //     id: "2m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc2",
  //   },
  //   {
  //     id: "3m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc3",
  //   },
  //   {
  //     id: "4m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc4",
  //   },
  //   {
  //     id: "5m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc5",
  //   },
  //   {
  //     id: "6m",
  //     src: qrLocation,
  //     class: "d-none qrImage qrloc6",
  //   },
  // ];

  // const yasMarinaLandmarklocations = [
  //   {
  //     id: "landmark1m",
  //     src: landmark1,
  //     class: "lmImage lmloc1",
  //   },
  //   {
  //     id: "landmark2m",
  //     src: landmark2,
  //     class: "lmImage lmloc2",
  //   },
  //   {
  //     id: "landmark3m",
  //     src: landmark3,
  //     class: "lmImage lmloc3",
  //   },
  // ];

  return (
    <div className="col-sm-12 overflow_app ">
      <Menu vendorlink="yasMarinaVendors" />
      {/* <div className="col-sm-12 ">
      <img src={yasMarina} className="img-fluid yasbayImg"/>
      </div> */}
      <div className="col-sm-12 text-center">
        <img src={yasMarina} className="img-fluid imd_width" />
      </div>
      <div className="col-sm-12 negative_mar">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="6m"/>
        <div className="col-sm-12 marginset">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="1m"/>
        </div>
        <div className="col-sm-12 marginset1">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="5m"/>
        </div>
        <div className="col-sm-12 marginset2">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="4m"/>
        </div>
        <div className="col-sm-12 marginset3">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="2m" />
        </div>
        <div className="col-sm-12 marginset4">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="3m" />
        </div>
        <div className="col-sm-12 marginset5">
        <img src={location1} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup1, "nuter")}/>
        </div>
        <div className="col-sm-12 marginset6">
        <img src={location2} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup2, "snow")}/>
        </div>
        <div className="col-sm-12 marginset7">
        <img src={location5} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup5, "tree")}/>
        </div>
        <div className="col-sm-12 marginset8">
        <img src={location4} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup4, "arch")}/>
        </div>
        <div className="col-sm-12 marginset9">
        <img src={location6} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup6, "santa")}/>
        </div>
      </div>
      <div>
        {/* <Menu vendorlink="yasMarinaVendors" />
        {yasMarinalocations &&
          yasMarinalocations.map((loc) => (
            <img
              src={loc.src}
              className={loc.class}
              onClick={() => handleShow(loc)}
            />
          ))}
        {yasMarinaQRlocations &&
          yasMarinaQRlocations.map((qrloc) => (
            <img
              key={qrloc.id}
              id={qrloc.id}
              src={qrloc.src}
              className={qrloc.class}
            />
          ))} */}
        {/* {yasMarinaLandmarklocations &&
          yasMarinaLandmarklocations.map((lmloc) => (
            <img
              key={lmloc.id}
              id={lmloc.id}
              src={lmloc.src}
              className={lmloc.class}
            />
          ))} */}
        <Modal show={show} onHide={handleClose} className="siteModal">
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body closeButton>
          <Row className="text-center">
              <Col lg={12}>
            <img src={popupImage} className="modal-img" />
            </Col>
            <Col lg={12} className="text-start mt-3">
            <strong className="modalStrong">{popupTitle}</strong>
            </Col>
            <Col lg={12} className="text-start my-2">
            <p>{popupDescription}</p>
            </Col>
          </Row>
          </Modal.Body>
        </Modal>
      </div>
    </div>
   
  );
}

export default YasMarinaMap;
