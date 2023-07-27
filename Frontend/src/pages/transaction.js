import React from 'react';
import '../styles/transaction.css';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link } from 'react-router-dom';

const TransactionHistory = () => {
  return (
    <div className='tbg'>
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
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            <tr >
              <td>{"01/02/2023"}</td>
              <td>{"Grocery"}</td>
              <td>{"1000"}</td>
            </tr>
            <tr >
              <td>{"05/02/2023"}</td>
              <td>{"Saloon"}</td>
              <td>{"200"}</td>
            </tr>
            <tr >
              <td>{"08/02/2023"}</td>
              <td>{"Petrol"}</td>
              <td>{"2000"}</td>
            </tr>
            <tr >
              <td>{"19/03/2023"}</td>
              <td>{"Furniture"}</td>
              <td>{"10000"}</td>
            </tr>
            <tr >
              <td>{"01/02/2023"}</td>
              <td>{"Food"}</td>
              <td>{"1500"}</td>
            </tr>
            <tr >
              <td>{"01/02/2023"}</td>
              <td>{"Cab"}</td>
              <td>{"300"}</td>
            </tr>
          
        </tbody>
      </table>
      
      <h4>Total Expenses = 15k</h4>
    </div>
    </div>
  );
};

export default TransactionHistory;
