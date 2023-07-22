import React from 'react'
import { useState } from 'react'
import { TbCurrencyPeso } from 'react-icons/tb';
import { BsFillCarFrontFill , BsPeopleFill} from 'react-icons/bs';
import { AiOutlineDropbox } from "react-icons/ai";


import '../Styles/Cards.css'




const Cards = () => {
    const [Cards] = useState([
        {
            title: 'Sales',
            icon: <TbCurrencyPeso/>,
            value: '1,000'
        
        },
        {
            title: 'Stock',
            icon: <BsFillCarFrontFill/>,
            value: '90'
        
        },

        {
            title: 'Customers',
            icon: <BsPeopleFill/>,
            value: '90'
        
        },

        {
            title: 'Orders',
            icon: <AiOutlineDropbox/>,
            value: '90'
        
        },
     
    ])
  return (
    <div className='Cards'>
        {
            Cards.map((cards, i)=> (
            <div key={i} className='Card'>
                <h3 className='Card-title'>{cards.title}</h3>
                 <i className='icon-card'>{cards.icon}</i>
                <h2 className='value amount-value'>{cards.value}</h2>
                
                
                
            </div>

            

            ))
        }
        

    </div>
  )
}

export default Cards