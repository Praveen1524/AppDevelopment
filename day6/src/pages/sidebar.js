// SidePanel.js

import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Person4Icon from '@mui/icons-material/Person4';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { IconButton } from '@mui/material';

const SideBar = () => {
  return (
    
    
    
    <div className="side-bar">
      <h2><Link to='/'><IconButton><FlutterDashIcon/></IconButton></Link>DashBoard</h2>
      <ul className="side-bar-menu">
      <Link to={'/profile'} style={{textDecoration: 'none' ,color: 'black'}}><li>Profile<IconButton><Person4Icon/></IconButton></li></Link>
      <Link to={'/register'} style={{textDecoration: 'none' ,color: 'black'}}><li>User Registration<IconButton><HowToRegIcon/></IconButton></li></Link>
      <Link to={'/manage'} style={{textDecoration: 'none' ,color: 'black'}}><li>Account Management<IconButton><ManageAccountsIcon/></IconButton></li></Link>
      <Link to={'/bill'} style={{textDecoration: 'none' ,color: 'black'}}><li>Bill Payments<IconButton><PaymentsIcon/></IconButton></li> </Link>
      <Link to={'/deposit'} style={{textDecoration: 'none' ,color: 'black'}}><li>Mobile Check Deposit<IconButton><DocumentScannerIcon/></IconButton></li></Link>
      <Link to={'/savings'} style={{textDecoration: 'none' ,color: 'black'}}><li>Savings<IconButton><SavingsIcon/></IconButton></li></Link>
      <Link to={'/contact'} style={{textDecoration: 'none' ,color: 'black'}}><li>Customer Support<IconButton><SupportAgentIcon/></IconButton></li></Link>
      </ul>
    </div>
    
  );
};

export default SideBar;
