import React, { useEffect, useState } from 'react';
import '../styles/account.css';
const AccountDetailsPage = () => {
  const [account, setAccount] = useState({});

  useEffect(() => {
    // Fetch account details from an API or database
    fetchAccountDetails()
      .then((data) => setAccount(data))
      .catch((error) => console.log(error));
  }, []);

  const fetchAccountDetails = () => {
    // Simulating API call or database query
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const accountData = {
          id: 1,
          name: 'PRAVEEN K',
          email: 'praveen123@gmail.com',
          phone: '9876543210',
          balance: 100000,
        };
        resolve(accountData);
      }, 1000);
    });
  };

  return (
    <div className='accbg'>
    <br></br>
    <div className='accdiv'>
    <div>
      <h2>Account Details</h2>
      <p><p1>ID:</p1> {account.id}</p>
      <p><p1>Name:</p1> {account.name}</p>
      <p><p1>Email:</p1> {account.email}</p>
      <p><p1>Phone:</p1> {account.phone}</p>
      <p><p1>Balance:</p1> {account.balance}</p>
    </div>
    </div></div>
  );
};

export default AccountDetailsPage;
