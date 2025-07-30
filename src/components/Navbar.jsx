import { useContext } from "react";
import { useLocation } from "react-router-dom";
import DataContext from "../Context/Context";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserIcon from "../assets/UserIcon.png";
function TopNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { setShowLogin } = useContext(DataContext);
  ///şərti olaraq 
  const auth=false;


  return (
    <Navbar
      expand="lg"
      style={{ zIndex: "100" }}
      className="bg-body-tertiary position-fixed w-100 border-bottom"
    >
      <Container fluid>
        <Navbar.Brand href="#">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="/" disabled={currentPath === "/"}>
              Home
            </Nav.Link>
            <Nav.Link href="/CardInfo" disabled={currentPath === "/CardInfo"}>
              CardInfo
            </Nav.Link>
            <section className="Auth-Section">
              {!auth ? (
                <Button onClick={()=>setShowLogin(true)} className="d-flex justify-content-center align-items-center">
                  <span>Daxil ol</span>
                </Button>
              ) : (
                <Button className="d-flex justify-content-center align-items-center">
                  <span className="me-2">ss</span>
                  <img style={{ width: "20px" }} src={UserIcon} />
                </Button>
              )}
            </section>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
