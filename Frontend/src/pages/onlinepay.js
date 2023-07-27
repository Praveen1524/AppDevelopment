import React, { useState } from 'react';
import '../styles/bill.css'; 
import SideBar from './sidebar';
import axios from 'axios';
import { Alert } from '@mui/material';

function OnlinePayments() {

  const [accno, setAccno] = useState('');
  const [revno, setRevno] = useState('');
  const [msg, setMsg] = useState('');
  const [amt, setAmt] = useState('');
  const [dop, setDop] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  const handleAccChange = (e) => {
    setAccno(e.target.value);
  };

  const handleRevChange = (e) => {
    setRevno(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleAmtChange = (e) => {
    setAmt(e.target.value);
  };

  const handleDopChange = (e) => {
    setDop(e.target.value);
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    setShowAlert(true);

    const data = {
      accno:accno,
      revno:revno,
      message:msg,
      amt:amt,
      dateofpay:dop
    }


    
    e.preventDefault();
    // console.log(username+" "+password);
    axios.post("http://127.0.0.1:8080/api/auth/paymentpost",data);
    
  }
    

  return (
    <div className="billwithside">
    <SideBar/>
    
      <div className="bill-payments">
      <br></br>
        <h2>Online Payments</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="sid">Your Account_id:</label>
            <input type="number" onChange={handleAccChange} id="sid" name="sid" />
          </div>
        <div className="form-group">
          <label htmlFor="rid">Receiver Account_id:</label>
          <input type="number" onChange={handleRevChange} id="rid" name="rid" />
        </div>
          <div className="form-group">
            <label htmlFor="desc">Description:</label>
            <input type="text" onChange={handleMsgChange} id="desc" name="desc" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" onChange={handleAmtChange} id="amount" name="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Date:</label>
            <input type="date" onChange={handleDopChange} id="dueDate" name="dueDate" />
          </div>
          <button  type="submit" >Pay</button>
          <br></br>
      {showAlert && (
        <Alert severity="success"  onClose={() => setShowAlert(false)}>
           Payment successful..!🤝
        </Alert>
      )}
        </form>
      </div>
      </div>
    );
  }
  
  export default OnlinePayments;