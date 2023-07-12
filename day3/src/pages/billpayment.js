import React from 'react';
import '../styles/bill.css'; 

function BillPayments() {
    return (
      <div className="bill-payments">
        <h1>Bill Payments</h1>
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
          <button type="submit">Pay Bill</button>
        </form>
      </div>
    );
  }
  
  export default BillPayments;