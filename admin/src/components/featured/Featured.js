import './featured.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Featured() {
  return (
    <div className='ft1'>
        <div className='title'>
            <h1>Total revenue</h1>
            <MenuIcon/>
        </div>
        <div className='bottom'>
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} className="ft2"/>
            <p className='title'>Total sales made today</p>
            <p className='amount'>55$</p>
            <p className='desc'>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>

        <div className='bottom-salary'>

          <div className='item'>
            <h3>today</h3>
            <div className='salary positive'>
              
              <span>240$</span><KeyboardArrowUpIcon/>
            </div>
          </div>

          <div className='item'>
            <h3>last week</h3>
            <div className='salary positive'>   
              <span>2540$</span>
              <KeyboardArrowUpIcon/>
            </div>
          </div>

          <div className='item'>
            <h3>last month</h3>
            <div className='salary negative'>
              
              <span>3040$</span><KeyboardArrowDownIcon/>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Featured