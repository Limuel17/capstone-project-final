import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import '../ProductList/CustomerCheckout.css';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';





const CustomerCheckout = () => {


  const [values, setValues] = useState({
    fullname: '',
    email: '',
    contact: '',
    address: '',
    date: '',
    brand: '',
    model: '',
    color: '',
    quantity: '',
    price: ''
    
  })
  
  
  const navigate = useNavigate();


  const submitForm = (e) =>{ 
    e.preventDefault();
     axios.post('http://localhost:3001/customercheckout', values)
     .then(res => {console.log(res); navigate('/products')})
     .catch(err => console.log(err));
     
    
  }



  return (
    <Card className='space' >
        <h1>Customer Details</h1>
        <form className='form-card'  onSubmit={submitForm}>

         <div className='mb-2'>
             <label htmlFor="">Full name</label>
             <input type="text" placeholder=''  className='form-control mb-2'
              onChange={e => setValues({...values, fullname: e.target.value})} />
         </div>

         <div className='mb-2'>
             <label htmlFor="">Email</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, email: e.target.value})}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Contact</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, contact: e.target.value})}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Date</label>
             <input type="date" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, date: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Address</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, address: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Brand</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, brand: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Model</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, model: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Color</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, color: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Quantity</label>
             <input type="text" placeholder=''  className='form-control mb-2'
             onChange={e => setValues({...values, quantity: e.target.value})}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Price</label>
             <input type="number" className='form-control mb-2'
             onChange={e => setValues({...values, price: e.target.value})}/>
         </div>

    
          <div>
         <button className='btn btn-sub btn-primary '>Submit</button>
         </div>
         <div>
         <Link to='/products' className='btn btn-sub btn-primary' style={{textDecoration: "none"}}>Cancel</Link>
         </div>

         
      
        </form>
        </Card>
    
  )
}

export default CustomerCheckout