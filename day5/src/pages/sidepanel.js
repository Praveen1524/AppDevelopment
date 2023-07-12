// SidePanel.js

import React from 'react';
import '../styles/sidepanel.css';
import { Link } from 'react-router-dom';
import SavingsIcon from '@mui/icons-material/Savings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Person4Icon from '@mui/icons-material/Person4';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { IconButton } from '@mui/material';

const SidePanel = () => {
  return (
    <div className='bg'>
    
    
    <div className="side-panel">
      <h2><Link to='/'><IconButton><FlutterDashIcon/></IconButton></Link>DashBoard</h2>
      <ul className="side-panel-menu">
        <li>Profile<IconButton><Person4Icon/></IconButton></li>
        <li>Account Management<IconButton><ManageAccountsIcon/></IconButton></li>
        <Link to={'/bill'} style={{textDecoration: 'none' ,color: 'black'}}><li>Bill Payments<IconButton><PaymentsIcon/></IconButton></li> </Link>
        <Link to={'/deposit'} style={{textDecoration: 'none' ,color: 'black'}}><li>Mobile Check Deposit<IconButton><DocumentScannerIcon/></IconButton></li></Link>
        <li>Savings<IconButton><SavingsIcon/></IconButton></li>
        <Link to={'/contact'} style={{textDecoration: 'none' ,color: 'black'}}><li>Customer Support<IconButton><SupportAgentIcon/></IconButton></li></Link>
      </ul>
    </div>
    </div>
  );
};

export default SidePanel;
