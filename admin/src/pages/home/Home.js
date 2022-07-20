import React from 'react'
import "./home.scss"
//components
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import UserList from '../../components/userlist/UserList'
const Home=()=> {
  return (
    <div className='parents'>
      <Sidebar/>
      <div className='container'>
            <Navbar/>


            <div className='widget'>
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
            </div>


            <div className='featured'>
              <Featured/>
              <Chart/>
            </div>

            <div className='user-item'>
              <div className='user-title'><h1>Online a few minute ago</h1></div>
              <UserList/>
            </div>

      </div>
    </div>
  )
}

export default Home