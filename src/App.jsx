import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import UserManagements from './Pages/UserManagements'
import Products from './Pages/Products'
import Stocks from './Pages/Stocks'
import Sales from './Pages/Sales'
import Reports from './Pages/Reports'
import DashBoards from './Views/Dashboards'
import Email from './Pages/Email'
import Stockadd from './components/Stockscomponents/Stockadd'
import UpdateStocks from '../src/components/Stockscomponents/UpdateStocks'
import CustomerCheckout from '../src/components/ProductList/CustomerCheckout'
import Login from '../src/Views/Login'
import UserAdd from './components/UserManagements/UserAdd'
import UserEdit from './components/UserManagements/UserEdit'




const App = () => {
  return (
    
    
   <Routes>
    
     
    <Route path='/' element={<DashBoards/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/userManagements' element={<UserManagements/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/stocks' element={<Stocks/>}/> 
    <Route path='/sales' element={<Sales/>}/> 
    <Route path='/reports' element={<Reports/>}/> 
    <Route path='/email' element={<Email/>}/>
    <Route path='/addstocks' element={<Stockadd/>}/>
    <Route path='/update/:carID' element={<UpdateStocks/>}/>
    <Route path='/customercheckout' element={<CustomerCheckout/>}/>
    <Route path='/useradd' element={<UserAdd/>}/>
    <Route path='/useredit/:userid' element={<UserEdit/>}/>
    
   </Routes>
  
  
   
  
  
  
   
   
   
   
   
   
   
  )
}

export default App
