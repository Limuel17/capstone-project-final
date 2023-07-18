import React from 'react'
import "../Styles/Products.css"
import ProductList from '../components/ProductList/ProductList'
import Sidebar from '../components/Sidebar'


const Products = () => {
  return (
    <Sidebar>
    <ProductList/>
    </Sidebar>
  )
}

export default Products