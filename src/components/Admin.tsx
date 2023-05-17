import React from 'react'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import { Sider } from './SideBar'
import { Title } from './Title'

function Admin() {
  return (
    <div style={{ maxHeight: "100vh" }}>
       <Title/>
       <Navbar/>

      
    </div>
  )
}

export default Admin