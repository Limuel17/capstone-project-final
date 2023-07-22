import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../ProductList/ProductList.css'
import { useState, useEffect } from 'react';
import axios from 'axios';









const ProductList = () => {


 


  const [data, setStocks] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/stocks')
    .then(res => {
       setStocks(res.data)})
    .catch(err => console.log(err));
  }, [])
  
  return (

    <div> <h1>Car Overview</h1>
      <div className='product-card'>
    { data.map((data, i) => (
    <Card  key={i} className='card-1'>
      
      <Card.Img variant="top" src={`http://localhost:3001/image/`+data.image}  className='pic' />
       <Card.Body className='card-body'>
        <Card.Title>{data.brand} {data.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price:{data.price}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">stocks:{data.stocks}</Card.Subtitle>
           <Link to='/customercheckout' className='btn btn-primary' style={{textDecoration: "none"}}>Checkout</Link>
      </Card.Body>
    </Card>
     ))     
    }



    
    </div>
    </div>
    

    
  )
}

export default ProductList