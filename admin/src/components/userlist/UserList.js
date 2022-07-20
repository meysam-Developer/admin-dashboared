import './user-list.scss'
import React,{ useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';



const UserList = () => 
{

   
      
      const rows = [
       {
        id:1143155,
        product:"Acer Nitro5",
        img:"https://cdn.mashreghnews.ir/d/2022/04/19/4/3456833.jpg",
        customer:"John Smith",
        date:"1March",
        amount:785,
        method:"Cash on Delivery",
        status:"pending",
       },
       {
        id:1143155,
        product:"Acer Nitro5",
        img:"https://cdn.mashreghnews.ir/d/2022/04/19/4/3456833.jpg",
        customer:"John Smith",
        date:"1March",
        amount:785,
        method:"Cash on Delivery",
        status:"Approved",
       },
       {
        id:1118155,
        product:"Acer Nitro5",
        img:"https://cdn.mashreghnews.ir/d/2022/04/19/4/3456833.jpg",
        customer:"John Smith",
        date:"1March",
        amount:785,
        method:"Cash on Delivery",
        status:"pending",
       },
       {
        id:1112155,
        product:"Acer Nitro5",
        img:"https://cdn.mashreghnews.ir/d/2022/04/19/4/3456833.jpg",
        customer:"John Smith",
        date:"1March",
        amount:785,
        method:"Cash on Delivery",
        status:"Approved",
       },
       {
        id:1143153,
        product:"Acer Nitro5",
        img:"https://cdn.mashreghnews.ir/d/2022/04/19/4/3456833.jpg",
        customer:"John Smith",
        date:"1March",
        amount:785,
        method:"Cash on Delivery",
        status:"pending",
       },
       

      ];
      


  return (
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell >{row.id}</TableCell>
           <TableCell > <div className='cellwrapper'>

                 <img src={row.img}  /><span>{row.product}</span>
            </div>
             </TableCell>
              <TableCell >{row.customer}</TableCell>
              <TableCell >{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell >{row.method}</TableCell>
              <TableCell className={`status ${row.status}`}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserList