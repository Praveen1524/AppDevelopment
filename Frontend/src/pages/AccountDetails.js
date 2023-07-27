import React, { useState } from 'react';
import AccountForm from './AccountForm';

const AccountDetails = () => {
  const [userAccount, setUserAccount] = useState(null);

  const handleSubmit = (accountDetails) => {
    setUserAccount(accountDetails);
  };

  return (
    <div>
      <h2>User Account Details</h2>
      {userAccount ? (
        <div>
          <p>First Name: {userAccount.firstName}</p>
          <p>Last Name: {userAccount.lastName}</p>
          <p>Email: {userAccount.email}</p>
          {/* Display more account details as needed */}
        </div>
      ) : (
        <AccountForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default AccountDetails;
