import React from 'react'
import './widget.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
function Widget({type}) {

    let data;
    switch(type){
        case "user":
            data={
                title:"User",
                isMoney:2244,
                link:"see all users",
                icon:<PersonOutlineOutlinedIcon className='icon' style={{ color:"red",background:"#e88e84",borderRadius:"3px" }}/>
            }
            break;
            case "order":
                data={
                    title:"Order",
                    isMoney:1254,
                    link:"see all orders",
                    icon:<BorderColorOutlinedIcon className='icon'  style={{ color:"#6c0c99",background:"#c584e8",borderRadius:"3px" }}/>
                }
            break;
            case "earning":
                data={
                     title:"Earning",
                     isMoney:5415,
                      link:"see all earning",
                      icon:<DateRangeOutlinedIcon className='icon'  style={{ color:"#07385e",background:"#84d4e8",borderRadius:"3px" }}/>
                }
                break;
                case "balance":
                    data={
                         title:"Balance",
                         isMoney:2514,
                          link:"see all balance",
                          icon:<AccountBalanceWalletIcon className='icon'  style={{ color:"075e14",background:"#84e893",borderRadius:"3px" }}/>
                    } 
                 default:
                    break;       

        }
  
  return (
    <div className='containerW'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <span className='persontage'>
                <KeyboardArrowUpIcon/>20%</span>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget