import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useContext, useEffect } from "react";
import DataContext from "../../Context/Context";
import GoogleLogo from "../../assets/GIcon.png";
function Example() {
  const [showRegister, setShowRegister] = useState(false);
  const { showLogin, setShowLogin } = useContext(DataContext);
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };
  useEffect(() => {
    if (showLogin) {
      setShowLogin(true);
    }
  }, [showLogin]);

  return (
    <>
      {!showRegister ? (
        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control type="text" placeholder="Email" />
            <br />
            <Form.Control type="password" placeholder="Password" />
            <br />
            <Button className="w-100">Login </Button>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="light"
              className="d-flex w-100 justify-content-center"
            >
              <img src={GoogleLogo} alt="" width={"25px"} className="me-2" />
              <span>Sign with Google</span>
            </Button>
            <p>Hesabiniz yoxdur?</p>
            <Button
              variant="link"
              onClick={() => {
                setShowLogin(false);
                setShowRegister(true);
              }}
            >
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Modal show={showRegister} onHide={handleCloseRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control type="text" placeholder="Name" />
            <br />
            <Form.Control type="text" placeholder="Email" />
            <br />
            <Form.Control type="password" placeholder="Password" />
            <br />
            <Form.Control type="password" placeholder="Password" />
            <br />
            <Button className="w-100">register </Button>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="light"
              className="d-flex w-100 justify-content-center"
            >
              <img src={GoogleLogo} alt="" width={"25px"} className="me-2" />
              <span>Register with Google</span>
            </Button>
            <p>Hesabiniz var?</p>
            <Button
              variant="link"
              onClick={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            >
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default Example;
