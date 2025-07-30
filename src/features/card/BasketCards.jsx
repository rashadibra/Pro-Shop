import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DeleteBtn from "../../assets/DltBtn.png"
function BasketCards() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Img</th>
          <th>Name</th>
          <th>NUM</th>
          <th>DLT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="https://picsum.photos/200" style={{width:"60px",margin:'0',borderRadius:"5px"}} alt="" /></td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className='d-flex justify-content-center align-items-center m-0 w-100'><img style={{width:"20px"}} src={DeleteBtn}/></Button></td>
        </tr>
    <tr>
          <td><img src="https://picsum.photos/200" style={{width:"60px",margin:'0',borderRadius:"5px"}} alt="" /></td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className='d-flex justify-content-center align-items-center m-0 w-100'><img style={{width:"20px"}} src={DeleteBtn}/></Button></td>
        </tr>
    <tr>
          <td><img src="https://picsum.photos/200" style={{width:"60px",margin:'0',borderRadius:"5px"}} alt="" /></td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button className='d-flex justify-content-center align-items-center m-0 w-100'><img style={{width:"20px"}} src={DeleteBtn}/></Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasketCards;