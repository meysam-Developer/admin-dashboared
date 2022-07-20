import React, { useState } from 'react'
//styles
import './new.scss'
//components
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'


const New = ({inputs,title}) => {
    const[file,setFile]=useState('');

  return (
    <div className="new">
        <Sidebar/>
        <div className='newContainer'>
            <Navbar/>
            <div className='top'><h1>{title}</h1></div>

            <div className='bottom'>
              <div className='left'> 
                <img 
                 src={file ? URL.createObjectURL(file)
                :
                'https://th.bing.com/th/id/R.d3ba07ba31f74d2a96f8662ab7ff9369?rik=hxbbj21ciLob5g&pid=ImgRaw&r=0'
            }
                />
              </div>
             
              <div className='right'>
                <form className='form'>
                <div className='formInput'>
                        <label>image</label>
                        <input type='file' onChange={event=>setFile(event.target.files[0])}/>
                    </div>
                    {inputs.map((input)=>(
                         <div className='formInput' key={input.id}>
                         <label>{input.label}</label>
                         <input type={input.type} placeholder={input.placeholder}/>
                     </div>
                    ))}
                    <button>
                        ADD USER
                    </button>
                  
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default New