import React, { useState } from 'react';
import '../styles/register.css';
import SideBar from './sidebar';
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [aadhar, setAadhar] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='regwithside'>
    <SideBar/>
    <div className='regbg'>
    <form className='regform' onSubmit={handleSubmit}>
    <br></br>
      <h2>Create Account</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='FirstName*'
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
          placeholder='LastName*'

          required
        />
      </div>
     
      <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email*'

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
      placeholder='Aadhar Number*'

      required
    />
  </div>
      <div>
      <label htmlFor="address">Address</label>
          <textarea id="address" rows="4" />
        
      
      </div>
     
      <button type="submit">Register</button>
    </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
