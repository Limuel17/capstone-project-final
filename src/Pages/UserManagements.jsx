import React from 'react'
import Sidebar from '../components/Sidebar'
import UserAccounts from '../components/UserManagements/UserAccounts'

const UserManagements = () => {
  return (
    <div><Sidebar>

      <div><UserAccounts/></div>
      
      </Sidebar></div>
  )
}

export default UserManagements
