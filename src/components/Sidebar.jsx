import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaBox,
    FaRegCalendarCheck,
}from "react-icons/fa";

import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css'
import Header from './Header'



const Sidebar = ({children}) => {
    const[isClose ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isClose);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/userManagements",
            name:"UserManagements",
            icon:<FaUserAlt/>
        },
        {
            path:"/products",
            name:"Products",
            icon:<FaShoppingBag/>
        },
        {
            path:"/stocks",
            name:"Stocks",
            icon:<FaBox/>
        },
        {
            path:"/sales",
            name:"Sales",
            icon:<FaRegChartBar/>
        },

        {
            path:"/reports",
            name:"Reports",
            icon:<FaRegCalendarCheck/>
        },

        {
            path:"/email",
            name:"Email",
            icon:<FaCommentAlt/>
        },
       
    ]



    
    return (

       <div> <Header/>  
        <div className="container">
           
        <div style={{width: isClose ? "250px" : "50px"}} className="sidebar" >
            <div className="top_section">
                <h1 style={{display: isClose ? "block" : "none"}} className="logo">Welcome Admin</h1>
                
                
                <div style={{marginLeft: isClose ? "217px" : "-4px"}} className="bars">
                    <BsFillArrowRightCircleFill onClick={toggle}/>
                    
                </div>
            </div>
            
            {
                menuItem.map((item, index)=>(
                    <Link to={item.path} key={index} className="link" activeclassName="active" style={{textDecoration: "none" }} >
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isClose ? "block" : "none"}} className="link_text">{item.name}</div>
                    </Link>
                ))
            }
             
        </div>
        
        <main>{children}
        </main>

        
       
     </div>
    
     
     </div>

     
     
    
 );
};

export default Sidebar;