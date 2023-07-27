import React from 'react';
import { useState } from 'react';
import '../styles/contact.css';
// import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Alert } from '@mui/material';

import axios from 'axios';

const CustomerSupportPage = () => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = React.useState(false);

  
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handleUserChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  
  const handleSubmit =(e) =>{
    e.preventDefault();
    setShowAlert(true);
    const data = {
      id:id,
      name:name,
      email:email,
      message:message
    }

    e.preventDefault();
    console.log(id+" "+name+" "+email);
    axios.post("http://127.0.0.1:8081/addsupport",data);
};

  return (
      
      <div className='concon'>
      <div className='conbg'>
      <br></br>
      <br></br>
      <br></br>

    <Link to='/'><IconButton><MeetingRoomIcon/></IconButton></Link>
    <div className="customer-support-page">
      <h2>Customer Support</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id" >Id:</label>
          <input type="number" id="id" style={{width:"43%"}}     onChange={handleIdChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" style={{width:"43%"}}     onChange={handleUserChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"     onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" onChange={handleMessageChange}/>
        </div>
        <button type="submit">Post</button>
        <br></br>
        {showAlert && (
          <Alert color="info" severity="info"  onClose={() => setShowAlert(false)}>
          Message posted successfully..😉
          </Alert>
        )}
      </form>

      </div>
 
      </div>

      <footer className="contact-footer">
      <div className="contact-info">
      <p3><h2>Contact Us:<IconButton ><CallIcon fontSize='large'/></IconButton></h2>123 Bank Street, Coimbatore, India</p3>
      
      <br></br>
      <p3>Phone: 123-456-7890</p3><br></br>
      <p3>Email: info@bankingapp.com</p3>
      </div>
      <div>
      <br></br>
      <IconButton><FacebookIcon/></IconButton>
      <IconButton><InstagramIcon/></IconButton>
      <IconButton><YouTubeIcon/></IconButton>
      <IconButton><TwitterIcon/></IconButton>
      <IconButton><LinkedInIcon/></IconButton>
      </div>
      <div>
      <h2>Banking App</h2>
      <p3>Copyright © 2023 bankingapp, Inc. </p3>
      <br></br>
      <p6>Terms and conditions </p6>
      <p6>Manage Cookies</p6>
      <p6>Privacy Policy </p6>
      </div>

    </footer>

    </div>
  );
};

export default CustomerSupportPage;
