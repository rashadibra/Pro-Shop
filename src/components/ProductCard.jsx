import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BasketLogo from "../assets/Basket-Logo.png";
import "../App.css";
function ProductCard() {
  return (
    <Card className="custom-card position-relative">
      <img
        src={BasketLogo}
        style={{ width: "15%", right: "10px", top: "10px" }}
        className="position-absolute cursor-pointer"
        alt=""
      />
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>sss</Card.Title>
        <Card.Text>
          <h5 className="Price">1000 <sup><del>2000</del></sup></h5>
        </Card.Text>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Button className="w-100" variant="none">Nağd</Button>
          <span>|</span>
          <Button className="w-100" variant="none">Kredit</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
