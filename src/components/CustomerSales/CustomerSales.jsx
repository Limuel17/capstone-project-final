
import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CustomerSales/CustomerSales.css'
import { useEffect, useState } from 'react'
import axios from 'axios'





const CustomerSales = () => {


  var totalCartPrice = 0;
  const [customer, setSales] = useState([])
 
  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
       setSales(res.data)})
    .catch(err => console.log(err));
  }, [])
    

  return (
    <div><h1 className='header-title'>Sales Details</h1>


<Table striped bordered hover size="sm" className='columns-1'>
      <thead className='title-stock'>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Contact Number</th>
          <th>Address</th>
          <th>Date</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Color</th>
          <th>Quantity</th>
          <th>Price</th>
          

        </tr>
      </thead>
      <tbody>

        { customer.map((data, i) => {
             
             totalCartPrice += data.price * data.quantity; 
             console.log(totalCartPrice); 
             return (
        <tr key={i}>
          <td>{data.fullname}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
          <td>{data.address}</td>
          <td>{data.date}</td>
          <td>{data.brand}</td>
          <td>{data.model}</td>
          <td>{data.color}</td>
          <td>{data.quantity}</td>
          <td>{data.price}</td>
        </tr>
             )
     })}
      </tbody>
    </Table>
         
    <Card className='total-card'>
      <Card.Header className='total-title'>Total Sales</Card.Header>
      <Card.Body>
        <Card.Text>{totalCartPrice}</Card.Text>
        
      </Card.Body>
    </Card>

    </div>
  )
}

export default CustomerSales