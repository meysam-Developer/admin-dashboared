import React from 'react'
import './datatable.scss'
import {userColumn,userRow} from '../../DataTableResource'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'



const DataTable = () => {

    const actionColumn=[
        {field:"action", headerName:"Action",width:230,renderCell:()=>{
            return(
                <div className='cellAction'>
                   <Link to="/users/:id" style={{ textDecoration:"none" }}> 
                   <div className='viewButton'>view</div>
                  </Link>
                    <div className='deleteButton'>delete</div>
                </div>
            )
        }}
    ]

  return (
    <div className='datatable'>
      <div className='dataTitle'>
        <h2>ADD NEW USER</h2>
        <Link to='/users/new' className='linkbtn'>Add new users</Link>
      </div>
    <DataGrid
    className='dataGrid'
      rows={userRow}
      columns={userColumn.concat(actionColumn)}
      pageSize={7}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>

  );
}

export default DataTable;