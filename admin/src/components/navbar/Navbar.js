import React from 'react'
import './navbar.scss'
//icon
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Navbar=()=> {
  return (
    <div className='navbar'>
        <div className='wrapper'>

         
            <div className='search'>
                <input placeholder='search....'/>
                <SearchOutlinedIcon/>
            </div>
            <div className='items'>   
                <div className='item'>
                    <LanguageIcon className='icon'/>
                    <span>English</span>
                </div>
                <div className='item'>
                    <NotificationsIcon className='icon'/>
                    <div className='counter'>1</div>
                </div>
                <div className='item'>
                    <ChatBubbleIcon className='icon'/>
                    <div className='counter'>2</div>
                </div>
                <div className='item'>
                    <DarkModeIcon className='icon'/>
                </div>
                <div className='item'>
                    <FormatListBulletedIcon className='icon'/>
                </div>
                <div className='item'>
                  <AccountCircleOutlinedIcon className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar