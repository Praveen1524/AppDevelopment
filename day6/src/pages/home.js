import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import '../styles/home.css';
import { Link } from 'react-router-dom';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IconButton } from '@mui/material';

function Home() {
  return (
      <div className="body">  
    <div className="App">
      <nav className="navbar">
        <div className="logo" style={{color: "silver", marginLeft: "50px",marginTop: "6px"}}>Banking Application
        </div>
        <ul className="nav-links">
           <Link to="/" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Home</li></Link>
          <Link to="/profile" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">DashBoard</li></Link>
          <Link to="/acc" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Account</li></Link>
          <Link to="/transaction" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Transactions</li></Link>
          <Link to="/contact" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Contact</li></Link>

          <Link to="/login" style={{textDecoration: 'none' ,color: 'skyblue'}}  ><li className="nav-item" ><IconButton style={{color: 'silver'}}><AccountBoxIcon/></IconButton>Login</li></Link>
        </ul>
      </nav>
        <div className="content">
            <h1>Welcome to Banking App</h1>
            <p4>Manage your finances with ease.</p4>
        </div>

        <div className="App">
    
      </div>

      </div>
    </div>
  );
}

export default Home;
