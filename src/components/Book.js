import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export const HOSTNAME = "localhost";

const Book = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const link =
    "https://outlook.office365.com/owa/calendar/Smapp1@smapp.works/bookings/";

  const url = new URL(link);
  console.log(url);

  return (
    <>
      <a
        className="btn btn-custom theme-color"
        role="button"
        onClick={handleShow}
      >
        Book a Demo!
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <iframe src={link} style={{ width: "100%", height: "400px" }} />
        </Modal.Body>
        <Modal.Footer>
          <a
            className="btn btn-custom theme-color"
            role="button"
            onClick={handleClose}
          >
            Close
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Book;
