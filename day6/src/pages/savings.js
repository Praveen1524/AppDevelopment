import React from 'react';
import SideBar from './sidebar';
import '../styles/savings.css'
const SavingsPage = () => {
  const savingsData = [
    {
      id: 1,
      accountNumber: '1234567890',
      balance: 5000,
      interestRate: 0.05,
    },
    {
      id: 2,
      accountNumber: '0987654321',
      balance: 10000,
      interestRate: 0.03,
    },
  ];

  return (
    <div className='savside'>
    <SideBar/>
    <div className='sav'>
    
      <h2>Savings Accounts</h2>
      
        <div >
          <h3>Account Number: {savingsData.id}</h3>
          <p3>Balance: </p3>
          <br></br>
          <p3>Interest Rate: </p3>
        </div>
        </div>
    </div>
  );
};

export default SavingsPage;
