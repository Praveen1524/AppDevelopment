// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
// import Home from './home';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with:', email, password);
  };

  return (
    
    
    <div className="container">
    <div>
    <Link to='/'><IconButton className='close'><CloseIcon/></IconButton></Link>
    </div>

    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
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
    <button type="submit"  className="btn btn-primary">Login</button>
    <p>
    Don't have an account? <Link to="/signup" style={{textDecoration: 'none' ,color: 'red'}}>Sign up</Link>
    </p>
    </form>
    </div>
  );
}

export default Login;
