import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BasketCards from './BasketCards';

function Basket() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{position:"fixed",bottom:"20px",right:"20px" }} variant="primary" onClick={handleShow}>
        Səbət <sup>2</sup>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>YOUR BASKET</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
<BasketCards/>
        </Offcanvas.Body>
       <div className='w-100 my-4 d-flex justify-content-center'> 
<Button className='w-75' type='danger'>Sifarişləri təsdiqlə</Button>
       </div>
      </Offcanvas>
    </>
  );
}

export default Basket;