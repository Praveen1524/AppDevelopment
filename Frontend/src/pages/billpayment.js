import React from 'react';
import '../styles/bill.css'; 
import SideBar from './sidebar';

function BillPayments() {
  return (
    <div className="billwithside">
    <SideBar/>
    
      <div className="bill-payments">
      <br></br>
        <h2>Bill Payments</h2>
        <form>
          <div className="form-group">
            <label htmlFor="billName">Bill Name:</label>
            <input type="text" id="billName" name="billName" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" />
          </div>
          <button className={'billbutton'} type="submit">Pay Bill</button>
        </form>
      </div>
      </div>
    );
  }
  
  export default BillPayments;