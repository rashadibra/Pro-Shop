import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
function ProductCard() {
  return (
    <Card className="custom-card position-relative">
      <Card.Img variant="top" src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>sss</Card.Title>
        <Card.Text>
          1000 <sup><del>2000</del></sup>
        </Card.Text>
        <Card.Footer className="d-flex justify-content-between align-items-center">
          <Button className="w-100" variant="none">Səbət</Button>
          <span>|</span>
          <Button className="w-100" variant="none">Info</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
