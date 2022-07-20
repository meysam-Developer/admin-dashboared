import './sidebar.scss';
//icon
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
          <Link to='/' style={{ textDecoration:"none" }}>
            <span>ADMIN PANEl</span>
          </Link> 
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <Link to='/'  style={{ textDecoration:"none" }}>
                    <li>
                    <DashboardIcon className='icon'/>
                        <span>dashBored</span>
                    </li>
                </Link>
            <p>list</p>
                <Link to='/users' style={{ textDecoration:"none" }}>
                     <li>
                    <PersonIcon className='icon'/>
                        <span>user</span>
                    </li>
                </Link>
                <li>
                <BuildIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                <li>
                <DashboardIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                <li>
                <DashboardIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                <li>
                <BuildIcon className='icon'/>
                    <span>sitting</span>
                </li>
                <li>
                <PersonIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                <li>
                <DashboardIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                <li>
                <PersonIcon className='icon'/>
                    <span>dashBored</span>
                </li>
                
            </ul>
        </div>

        <div className='bottom'>
           <div className='colorOption'></div>
           <div className='colorOption'></div>  
        </div>

    </div>

  )
}

export default Sidebar