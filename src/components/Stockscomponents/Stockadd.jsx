import React, { useState } from 'react'
import "../Stockscomponents/Stockadd.css"
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormData from "form-data";





const Stockadd = () => {
       const [brand, setBrand] = useState([]);
       const [model, setModel] = useState([]);
       const [color, setColor] = useState([]);
       const [year, setYear] = useState([]);
       const [stocks, setStocks] = useState([]);
       const [price, setPrice] = useState([]);
       const [branch, setBranch] = useState([]);
       

        const navigate = useNavigate();
       const [file, setFile] = useState();
   const handleFile = (e) => {
    setFile(e.target.files[0])
   }

       const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('brand', brand);
        formData.append('model', model);
        formData.append('color', color);
        formData.append('year',  year);
        formData.append('stocks', stocks);
        formData.append('price', price);
        formData.append('branch', branch);
        formData.append('image', file);
        axios.post('http://localhost:3001/addstocks', formData)
        .then(res => {
          navigate('/stocks')
        })
        .catch(err => console.log(err));
      }


  return (
    
    <Card className='space' >
        <h1 className='add-stocks'>ADD STOCKS</h1>
        <form className='form-card'  onSubmit={handleSubmit}>

         <div className='mb-2'>
             <label htmlFor="">Brand</label>
             <input type="text" className='form-control mb-2'
              onChange={e => setBrand(e.target.value)} />
         </div>

         <div className='mb-2'>
             <label htmlFor="">Model</label>
             <input type="text" className='form-control mb-2'
             onChange={e => setModel(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Color</label>
             <input type="text" className='form-control mb-2'
              onChange={e => setColor(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Year</label>
             <input type="date" className='form-control mb-2'
              onChange={e => setYear(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Stocks</label>
             <input type="number" className='form-control mb-2'
              onChange={e => setStocks(e.target.value)}/>
         </div>

         <div className='mb-2'>
             <label htmlFor="">Price</label>
             <input type="text" className='form-control mb-2'
              onChange={e => setPrice(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Branch</label>
             <input type="text" className='form-control mb-2'
              onChange={e => setBranch(e.target.value)}/>
         </div>
         <div className='mb-2'>
             <label htmlFor="">Upload Picture</label>
             <input type="file" className='form-control mb-2'
               onChange={handleFile}/>
         </div>

          <div>
         <button className='btn btn-sub-3 btn-primary '>Submit</button>
         </div>
         <div>
         
         </div>
        
        </form>
        <Link to="/stocks" className='btn btn-sub-2 btn-primary'>cancel</Link>

        

        </Card>
 
        
     
   
  )
}

export default Stockadd