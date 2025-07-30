import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useContext, useEffect } from "react";
import DataContext from "../../Context/Context";
import GoogleLogo from "../../assets/GIcon.png";
function Example({show,handleClose,setShowLogin,setShowRegister, title,fields,buttonText,googleText,switchText,onSwitch}) {
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  // useEffect(() => {
  //   if (showLogin) {
  //     setShowLogin(true);
  //   }
  // }, [showLogin]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {fields.map((item, index) => (
            <div key={index}>
              <Form.Control type={item.type} placeholder={item.placeholder} />
            </div>
          ))}
          <Button className="w-100">{buttonText}</Button>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="light"
            className="d-flex w-100 justify-content-center"
          >
            <img src={GoogleLogo} alt="" width={"25px"} className="me-2" />
            <span>{googleText}</span>
          </Button>
          <p>{switchText.text}</p>
          <Button variant="link" onClick={onSwitch}>
            {switchText.linkText}
          </Button>
        </Modal.Footer>
      </Modal>
  
    </>
  );
}

export default Example;
