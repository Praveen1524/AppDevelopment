import React, { useState } from 'react';
import '../styles/register.css';
import SideBar from './sidebar';
import { Alert } from '@mui/material';


const ManageForm = () => {
  const [firstName, setFirstName] = useState('PRAVEEN');
  const [lastName, setLastName] = useState('K');
  const [email, setEmail] = useState('praveen123@gmail.com');
  const [dob, setDob] = useState('01/05/2004');
  const [aadhar, setAadhar] = useState('123456789012');

  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className='regwithside'>
    <SideBar/>
    <div className='regbg'>
    <form className='regform' onSubmit={handleSubmit}>
    <br></br>
      <h2>Update Profile</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
     
      <div>
      <label htmlFor="email">Email</label>
      <input style={{width:"96%"}}
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
      <div>
      <label htmlFor="dob">DOB</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
    </div>
    <div>
    <label htmlFor="aadhar">Aadhar Number</label>
    <input
      type="number"
      id="aadhar"
      value={aadhar}
      onChange={(e) => setAadhar(e.target.value)}
      required
    />
  </div>
      <div>
      <label htmlFor="address">Address</label>
          <textarea id="address" value={"4/74,Eswara Nagar,Vadamadurai,Coimbatore."}  rows="4" />
          
      
      </div>
     
      <button type="submit">Register</button>
      <br></br>
      {showAlert && (
        <Alert severity="success"  onClose={() => setShowAlert(false)}>
          Details updated successfully!
        </Alert>
      )}

    </form>
    </div>
    </div>
  );
};

export default ManageForm;
