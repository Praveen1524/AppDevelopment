import React, { useEffect, useState } from "react";

const Accounts = () => {

  const [user,setuser] = useState([])

  useEffect(()=>{
    fetch('https://backend-bankapp.onrender.com/accounts')
    .then(responsec => responsec.json())
    .then(data => setuser(data))
  },[])



  return (
    <div>
      
    <div className="transaction-history">
    <div >
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Account Number</th>
          <th>Amount</th>
        </tr>
        {user.map((item,id)=>{
          return(<>
            <tr key={id}>
          <td>{item.username}</td>
          <td>{item.email}</td>
          <td>{item.account_number}</td>
          <td>{item.amount}</td>
        </tr>
          </>)
        })}
        
      </table>
        </div>
    </div>
    </div>
  );
};

export default Accounts;