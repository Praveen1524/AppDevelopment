// Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
// import Home from './home';.. 
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Signed up with:', name, email, password);
  // };
  let navigate=useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    const data ={
      username:username,
      email:email,
      password:password
    }
    axios.post("http://127.0.0.1:8080/api/auth/signup",data)
    // console.log(username+" "+email+" "+password);
    // setName('');
    // setEmail('');
    // setPassword('');
    .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
      console.log(error);
  });
  
  navigate("/");
}

  return (
    <div className="container">
    <div>
    <Link to='/'><IconButton className='close'><CloseIcon/></IconButton></Link>
    </div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={username}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit"  className="btn btn-primary">Sign up</button>
        <p5>
        <br></br>
          Already have an account? <Link to="/login " style={{textDecoration: 'none' ,color: 'MediumVioletRed'}}><u>Login</u></Link>
        </p5>
      </form>
    </div>
  );
}

export default Signup;
