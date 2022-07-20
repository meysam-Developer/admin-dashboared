import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart'
import UserList from '../../components/userlist/UserList';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>

        <div className='top'>
          <div className='left'>
            <h1>Information</h1>
            <div className='main'>
                <img src='https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp' alt='avatar'/>
                <div className='details'>
                  <h4>Details</h4>
                  <div className='detailsItem'>
                    <div className='itemKey'>Name:</div>
                    <div className='itemValue'>Jozef</div>
                  </div>
                  <div className='detailsItem'>
                    <div className='itemKey'>Email:</div>
                    <div className='itemValue'>h@gmai;.com</div>
                  </div>
                  <div className='detailsItem'>
                    <div className='itemKey'>City:</div>
                    <div className='itemValue'>New York</div>
                  </div>
                  <div className='detailsItem'>
                    <div className='itemKey'>Country:</div>
                    <div className='itemValue'>USA</div>
                  </div>

                </div>

            </div>
     
          </div>
          
          <Chart/>
          
        </div>

        <div className='bottom'>
        <UserList/>
        </div>

      </div>
    </div>
  )
}

export default Single