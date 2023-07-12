import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { IconButton } from '@mui/material';

function Home() {
  return (
      <div className="body">  
    <div className="App">
      <nav className="navbar">
        <div className="logo" style={{color: "silver", marginLeft: "50px",marginTop: "6px"}}>Banking Application
        <IconButton className='account' style={{color: 'skyblue'}}><AccountBalanceIcon/></IconButton></div>
        <ul className="nav-links">
           <Link to="/" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Home</li></Link>
          <Link to="/sidepanel" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">DashBoard</li></Link>
          <li className="nav-item">Accounts</li>
          <li className="nav-item">Transactions</li>
          <Link to="/contact" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Contact</li></Link>

          <Link to="/login" style={{textDecoration: 'none' ,color: 'skyblue'}}  ><li className="nav-item" ><IconButton style={{color: 'silver'}}><AccountBoxIcon/></IconButton>Login</li></Link>
        </ul>
      </nav>
        <div className="content">
            <h1>Welcome to Banking App</h1>
            <p>Manage your finances with ease.</p>
        </div>

        <div className="App">
    
      </div>

      </div>
    </div>
  );
}

export default Home;
