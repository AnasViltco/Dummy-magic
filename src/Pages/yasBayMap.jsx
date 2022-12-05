import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import location1 from "../assets/yasBayAssets/locationImages/WelcomeArch.png";
import location2 from "../assets/yasBayAssets/locationImages/GiftBox.png";
import location3 from "../assets/yasBayAssets/locationImages/ChristmasTree.png";
import location4 from "../assets/yasBayAssets/locationImages/YBW.png";
import location5 from "../assets/yasBayAssets/locationImages/Santa_sMailbox.png";
import location6 from "../assets/yasBayAssets/locationImages/MarketPlace.png";
import popup1 from "../assets/yasBayAssets/popupImages/WelcomeArch.png";
import popup2 from "../assets/yasBayAssets/popupImages/GiftBox.png";
import popup3 from "../assets/yasBayAssets/popupImages/ChristmasTree.png";
import popup4 from "../assets/yasBayAssets/popupImages/YBW.png";
import popup5 from "../assets/yasBayAssets/popupImages/Santa_sMailbox.png";
import popup6 from "../assets/yasBayAssets/popupImages/MarketPlace.png";
import qrLocation from "../assets/yasBayAssets/You-Are-here.png";
import yasBay from "../assets/areaMapImages/YasBayMap.jpg"
import "../assets/css/yasBayMap.css";

import Modal from "react-bootstrap/Modal";
import Menu from "../Components/NavMenu";

function YasBayMap() {
  const [show, setShow] = useState(false);
  const [popupImage, setPopupImage] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupDescription, setPopupDescription] = useState("");
  const qrLocList = ["1b", "2b", "3b", "4b", "5b", "6b"];
  let url = window.location.href.split("/")[4];

  useEffect(() => {
    const locationUrl = window.location.href.split("/");
    const locationPointer = locationUrl[locationUrl.length - 1];
    if (qrLocList.includes(locationPointer)) {
      var element = document.getElementById(locationPointer);
      element.classList.remove("show-icon");
      element.scrollIntoView();
    }
  }, [url]);

  const handleClose = () => setShow(false);
  const handleShow = (location, title) => {
    setShow(true);
    setPopupImage(location);
    if(title === "marketplace"){
    setPopupTitle("Market Place");
    setPopupDescription("Shop away at the specially curated Merry Market Place for you and your loved ones.");
    }
    if(title === "tree"){
    setPopupTitle("Self Standing Letters");
    setPopupDescription("Become one with the festivities at Yas Bay Waterfront. The larger than life standing letters house the Magic of Winter within for you to post your snaps on social media.");
    }
    if(title === "ybw"){
      setPopupTitle("Gift Box Activation");
      setPopupDescription("The Magic of Winter spills into the pathways of Yas Bay Waterfront at the Gift Box activation. Capture your moments here to share the festive spirit!");
    }
    if(title === "santa"){
      setPopupTitle("Santa’s Mailbox");
      setPopupDescription("Come one, come all. Pass along your secret wishes for Santa at Santa’s Mailbox.");
    }
  };

  // const yasBaylocations = [
  //   {
  //     id: "loc1b",
  //     src: location1,
  //     title: "Welcome Arch",
  //     description:
  //       "A festive welcome! Enter the festive magic through the picturesque arch at the Taxi Bay.",
  //     class: "locImage location1",
  //     modalImg: popup1,
  //   },
  //   {
  //     id: "loc2b",
  //     src: location2,
  //     title: "Gift Box Activation",
  //     description:
  //       "The Magic of Winter spills into the pathways of Yas Bay Waterfront at the Gift Box activation. Capture your moments here to share the festive spirit!",
  //     class: "locImage location2",
  //     modalImg: popup2,
  //   },
  //   {
  //     id: "loc4b",
  //     src: location4,
  //     title: "Self Standing Letters",
  //     description:
  //       "Become one with the festivities at Yas Bay Waterfront. The larger than life standing letters house the Magic of Winter within for you to post your snaps on social media.",
  //     class: "locImage location4",
  //     modalImg: popup4,
  //   },
  //   {
  //     id: "loc5b",
  //     src: location5,
  //     title: "Santa’s Mailbox",
  //     description:
  //       "Come one, come all. Pass along your secret wishes for Santa at Santa’s Mailbox.",
  //     class: "locImage location5",
  //     modalImg: popup5,
  //   },
  //   {
  //     id: "loc6b",
  //     src: location6,
  //     title: "Market Place",
  //     description:
  //       "Shop away at the specially curated Merry Market Place for you and your loved ones.",
  //     class: "locImage location6",
  //     modalImg: popup6,
  //   },
  // ];

  // const yasBayQRlocations = [
  //   {
  //     id: "1b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation1",
  //   },
  //   {
  //     id: "2b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation2",
  //   },
  //   {
  //     id: "3b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation3",
  //   },
  //   {
  //     id: "4b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation4",
  //   },
  //   {
  //     id: "5b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation5",
  //   },
  //   {
  //     id: "6b",
  //     src: qrLocation,
  //     class: "d-none qrImage qrlocation6",
  //   },
  // ];

  // const yasBayLandmarklocations = [
  //   {
  //     id: "landmark1b",
  //     src: landmark1,
  //     class: "lmImage lmlocation1",
  //   },
  //   {
  //     id: "landmark2b",
  //     src: landmark2,
  //     class: "lmImage lmlocation2",
  //   },
  //   {
  //     id: "landmark3b",
  //     src: landmark3,
  //     class: "lmImage lmlocation3",
  //   },
  //   {
  //     id: "landmark4b",
  //     src: landmark4,
  //     class: "lmImage lmlocation4",
  //   },
  //   {
  //     id: "landmark5b",
  //     src: landmark5,
  //     class: "lmImage lmlocation5",
  //   },
  //   {
  //     id: "landmark6b",
  //     src: landmark6,
  //     class: "lmImage lmlocation6",
  //   },
  //   {
  //     id: "landmark7b",
  //     src: landmark7,
  //     class: "lmImage lmlocation7",
  //   },
  // ];

  return (
    <div className="col-sm-12 overflow_water ">
      <Menu vendorlink="yasBayVendors" />
      <div className="col-sm-12 text-center">
        <img src={yasBay} className="img-fluids imd_widths" />
      </div>
      <div className="col-sm-12 negative_mars">
      <img src={qrLocation} className="img-fluid img_widd show-icon" id="1b"/>
      <div className="col-sm-12 marginsets">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="2b"/>
        </div>
        <div className="col-sm-12 marginsets1">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="3b"/>
        </div>
        <div className="col-sm-12 marginsets2">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="4b"/>
        </div>
        <div className="col-sm-12 marginsets3">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="5b"/>
        </div>
        <div className="col-sm-12 marginsets4">
        <img src={qrLocation} className="img-fluid img_widd show-icon" id="6b"/>
        </div>
        <div className="col-sm-12 marginsets5">
        <img src={location6} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup6, "marketplace")}/>
        </div>
        <div className="col-sm-12 marginsets6">
        <img src={location5} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup5, "santa")}/>
        </div>
        <div className="col-sm-12 marginsets7">
        <img src={location4} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup4, "ybw")}/>
        </div>
        <div className="col-sm-12 marginsets8">
        <img src={location3} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup3, "tree")}/>
        </div>
       <div className="col-sm-12 marginsets9">
        <img src={location1} className="img-fluid img_widd set6Img" onClick={() => handleShow(popup1, "arch")}/>
        </div>
      </div>
      {/* <div> */}
        {/* {yasBaylocations &&
          yasBaylocations.map((loc) => (
            <img
              key={loc.id}
              id={loc.id}
              src={loc.src}
              className={loc.class}
              onClick={() => handleShow(loc)}
            />
          ))}
        {yasBayQRlocations &&
          yasBayQRlocations.map((qrloc) => (
            <img
              key={qrloc.id}
              id={qrloc.id}
              src={qrloc.src}
              className={qrloc.class}
            />
          ))} */}
        {/* {yasBayLandmarklocations &&
          yasBayLandmarklocations.map((lmloc) => (
            <img
              key={lmloc.id}
              id={lmloc.id}
              src={lmloc.src}
              className={lmloc.class}
            />
          ))} */}
      {/* </div> */}
        <Modal show={show} onHide={handleClose} className="siteModal">
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body closeButton>
            <Row className="text-center">
              <Col lg={12}>
            <img src={popupImage} className="modalImg" />
              </Col>
              <Col lg={12} className="py-2 text-start">
            <strong>{popupTitle}</strong>
              </Col>
              <Col lg={12} className="py-2 text-start">
            <p>{popupDescription}</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
    </div>
  );
}

export default YasBayMap;
