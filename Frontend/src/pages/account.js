import React from 'react';
import '../styles/account.css';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link } from 'react-router-dom';


const AccountDetailsPage = () => {

  return (
    <div className='accbg'>
    <div>
    <br></br>
    <h2 style={{color:"black"}}><Link to = '/'><IconButton style={{color:"black"}}><ArrowLeftIcon/></IconButton></Link>
    Hello Praveen..!</h2>
    <div className='accdiv'>
    <div>
    
    

      <h2 style={{color:"brown"}}>Account Details</h2>
      <div className='probg'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
      <div style={{backgroundColor:"#FFFAFA", border: "2px double black"}}>
      <p><p1>First Name:</p1>Praveen</p>
      <p><p1>Last Name:</p1>K</p>
      <p><p1>Email:</p1>praveen123@gmail.com</p>
      <p><p1>DOB:</p1>01-05-2004</p>
      <p><p1>Phone:</p1>9829283732 </p>
      <p><p1>Aadhar Number:</p1>1234567899 </p>
      <p><p1>Address:</p1>4/74,Eswara Nagar,Vadamadurai,<br></br>Coimbatore. </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      
    
    </div>
    </div>

    <div className='avadiv'>
    <h2 style={{color:"brown"}}>Available Accounts:</h2>
    <div style={{backgroundColor:"#F5F5F5", border: "2px double black"}}>
    <p><p1>Account Number:</p1> 65321678383</p>
    <p><p1>Bank Name:</p1> Canara Bank</p>
    <p><p1>Balance:</p1> 35000</p>
    </div>
    <br></br>
    <div style={{backgroundColor:"#F5F5F5", border: "2px double black"}}>

    <p><p1>Account Number:</p1> 98251621383</p>
    <p><p1>Bank Name:</p1> Axis Bank</p>
    <p><p1>Balance:</p1> 50000</p>
</div>
    <br></br>
    <div style={{backgroundColor:"#F5F5F5", border: "2px double black"}}>

    <p><p1>Account Number:</p1> 92028254122</p>
    <p><p1>Bank Name:</p1> SBI Bank</p>
    <p><p1>Balance:</p1> 155000</p>
</div>
    </div>
    </div>
    </div>
  );
};

export default AccountDetailsPage;
