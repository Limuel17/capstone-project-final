import React from 'react'
import CustomerSales from '../components/CustomerSales/CustomerSales';
import Sidebar from '../components/Sidebar';



const Sales = () => {
  return (
    <Sidebar>
    <div>
    <CustomerSales/>
    </div>
    </Sidebar>
  )
}

export default Sales;