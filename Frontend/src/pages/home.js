import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import '../styles/home.css';
import { Link } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';

// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import Person4Icon from '@mui/icons-material/Person4';// import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from './actions';
function Home() {
  const user = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const handleLogout =(e)=>{
    e.preventDefault();
    dispatch(logout());
  }
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
          <Link to="/his" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Transactions</li></Link>
          <Link to="/contact" style={{textDecoration: 'none' ,color: 'skyblue'}}><li className="nav-item">Contact</li></Link>

          { user ?(<>
          <IconButton className='homeicon' onClick={handleLogout} style={{color: 'silver'}}><AccountBoxIcon fontSize='medium'/><h8>{user}</h8></IconButton>
          </>) :
          <Link to="/login" style={{textDecoration: 'none' ,color: 'skyblue'}}  ><li className="nav-item" >Login</li></Link>}
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
