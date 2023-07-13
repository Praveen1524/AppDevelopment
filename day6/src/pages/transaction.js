import React from 'react';
import '../styles/transaction.css';

const TransactionHistory = () => {
  return (
    <div className='tbg'>
    <br></br>
    <div className="transaction-history">
      <h2>Transaction History</h2>
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
    </div>
    </div>
  );
};

export default TransactionHistory;
