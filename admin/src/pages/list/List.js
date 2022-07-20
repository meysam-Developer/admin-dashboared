import React from 'react'
import './list.scss'
//components
import Navbar from "../../components/navbar/Navbar"
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/datatable/DataTable'



const List = () => {
  return (
    <div className='list'>
        <Sidebar/>
        <div className='listContainers'>
         <Navbar/>
        <DataTable/>
        </div>
    </div>
  )
}

export default List