import React, { useState } from 'react';

const AccountForm = ({ onSubmit }) => {
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(accountDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={accountDetails.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={accountDetails.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={accountDetails.email}
          onChange={handleChange}
        />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AccountForm;
