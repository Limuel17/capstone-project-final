import React from 'react'
import '../Styles/Stocks.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';






function Stocks() {



  const [data, setStocks] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/stocks')
    .then(res => {
       setStocks(res.data)
       setRecords(res.data);})
    .catch(err => console.log(err));
  }, [])

  const [records, setRecords] = useState([]);
  const handleFilter = (event) => {
    setRecords(re.filter(row => row.model.toLowerCase().includes(event.target.value)))
  }
  

const [currentPage, setcurrentPage] = useState (1)
const recordsPerPage = 10;
const lastIndex = currentPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;
const recordData = data.slice(firstIndex, lastIndex);
const npage = Math.ceil(data.length / recordsPerPage)
const numbers = [...Array(npage + 1).keys()].slice(1)



const handleDelete = async (carID) => {
  try {
      await axios.delete('http://localhost:3001/stocks/'+carID)
      window.location.reload()
  } catch (err){
    console.log(err);
  }
}

  return (

    
    <Sidebar>
    <div><h1 className='header-title'>Stock Overview</h1>

    <div><Link to="/addstocks" className='btn btn-add btn-primary' style={{textDecoration: "none"}}>Add stock</Link></div>
    <div className=''><input className='search-bar' type="text" placeholder='search..' onChange={handleFilter}/></div>
    <Table striped bordered hover size="sm" className='columns'>
      <thead className='title-stock'>
        <tr>
          <th>CarId</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Color</th>
          <th>Year</th>
          <th>Price</th>
          <th>Stocks</th>
          <th>Branch</th>
          <th className='action'>Action</th>
        </tr>
      </thead>


      <tbody className='title-tbody'>
         
         {
          records.map((data, i) => (
            <tr key={i}>
              <td>{data.carID}</td>
              <td>{data.brand}</td>
              <td>{data.model}</td>
              <td>{data.color}</td>
              <td>{data.year}</td>
              <td>{data.price}</td>
              <td>{data.stocks}</td>
              <td>{data.branch}</td>
              <td>
                <Link to={`/update/${data.carID}`} className='btn butn btn-primary ms-3' style={{textDecoration: "none"}}>Edit</Link>
                
                <Button className='btn butn ms-3' onClick={() => handleDelete(data.carID)}>Delete</Button>
              </td>
            </tr>
          )) 
         }
        
      </tbody>
    </Table>  
      <nav className='nav-page'>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="" className='page-link' onClick={prePage}>Prev</a>
          </li>

          {
            numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? `active` : `` }`} key={i}>
              <a href="" className='page-link' onClick={() => ChangePage(n)}>{n}</a>
            </li>
            
            ))
          }

          <li className='page-item'>
            <a href="" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
     </nav>  

    </div>
    </Sidebar>

  );

  function prePage (){ if (currentPage !== firstIndex){setcurrentPage(currentPage - 1)}}
  function ChangePage (carID){setcurrentPage(carID)}
  function nextPage (){ if (currentPage !== lastIndex){setcurrentPage(currentPage + 1)}}
  

}

export default Stocks;