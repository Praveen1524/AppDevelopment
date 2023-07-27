import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link } from 'react-router-dom';

function PayHistory()  {
  const [transactions,setTransactions]=useState([]);
  useEffect( () => {
  axios.get("http://127.0.0.1:8080/api/auth/getPayment")
  .then(response =>{
   setTransactions(response.data);
  })  
  .catch(error =>{
    alert(error)
   console.log(error);
  });
 },[]);
  return (
    <div className="tbg">
    <div className="history_container">
    <div className="transaction-history">
    <br></br>
    <h2><Link to = '/'><IconButton><ArrowLeftIcon/></IconButton></Link>Transaction History</h2>
    <div className='tdivbg'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    <br></br>
      <table>
        <thead>
          <tr>
            <th>Account_num</th>
            <th>Receiver_num</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr>
            <td>{transaction.accno}</td>
            <td>{transaction.revno}</td>
              <td>{transaction.amt}</td>
              <td>{transaction.dateofpay}</td>
              <td>{transaction.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default PayHistory;