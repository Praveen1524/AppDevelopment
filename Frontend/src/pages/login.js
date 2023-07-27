// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from './actions';
import { Alert } from '@mui/material';

import axios from 'axios';
// import Home from './home';
const LoginPage = (props)=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  const [showSsAlert, setShowSsAlert] = React.useState(false);

  const dispatch = useDispatch();
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit =(e) =>{
    const data = {
      username:username,
      password:password
    }

    e.preventDefault();
    console.log(username+" "+password);
    dispatch(login(username));
    axios.post("http://127.0.0.1:8080/api/auth/signin",data)
      
    .then(response =>{
      setShowSsAlert(true);
      setShowAlert(false);
     
     })  
    .catch(error =>{
      setShowAlert(true);
      setShowSsAlert(false);

      // alert("Invalid login. Please try again!" )
    }
    );
};

  return (
    
    
    <div className="container">
    <div>
    <Link to='/'><IconButton className='close'><CloseIcon/></IconButton></Link>
    </div>

    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label>Username:</label>
    <input
    type="text"
    className="form-control"
    placeholder="Enter username"
    value={username}
    onChange={handleUserChange}
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
    <p5>
    <br></br>
    Don't have an account? <Link to="/signup" style={{textDecoration: 'none' ,color: 'MediumVioletRed '}}><u>Sign up</u></Link>
    </p5>
    <br></br>
    {showAlert && (
      <Alert severity="error" variant="filled"  onClose={() => setShowAlert(false)}>
        Invalid login. Please try again!
      </Alert>
    )}
    {showSsAlert && (
      <Alert severity="success" variant="filled"  onClose={() => setShowSsAlert(false)}>
        Login successful!
      </Alert>
    )}
    
    </form>
    </div>
  );
}

export default LoginPage  ;
