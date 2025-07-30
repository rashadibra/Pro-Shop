import React from 'react'
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DataContext from "../../Context/Context";

function RegisterModal() {
    const [show, setShow] = useState(false);
  const { setshowLogin, showRegister } = useContext(DataContext);
  const handleClose = () => {
    setShow(false);
    setshowLogin(false);
  };

  return (
    <div>
        <Modal show={showRegister} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Email" />
          <br />
          <Form.Control type="password" placeholder="Password" />
          <br />
          <a href="" onClick={()=>setshowLogin(true)}>Login</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RegisterModal