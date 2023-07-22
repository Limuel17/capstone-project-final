import React from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import Graph from '../components/Graph/Graph'

const DashBoards = () => {
  return (

    <Sidebar>
    <div className='Dashboards'>
      <h1>Dashboards</h1>
         <div className='Cards-main'>
        <Cards/>
        </div>

        <div>
          <Graph/>
        </div>
         
    </div>
    </Sidebar>
  )
}

export default DashBoards