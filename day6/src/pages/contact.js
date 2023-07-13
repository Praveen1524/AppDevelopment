import React from 'react';
import '../styles/contact.css';
// import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomerSupportPage = () => {
  return (
      
      <div className='concon'>
      <div className='conbg'>
      <br></br>

    <Link to='/'><IconButton><MeetingRoomIcon/></IconButton></Link>
    <div className="customer-support-page">
      <h2>Customer Support</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>

      </div>
 
      </div>

      <footer className="contact-footer">
      <div className="contact-info">
      <p3><h3>Contact Us:</h3>123 Bank Street, Coimbatore, India</p3>
      <br></br>
      <p3>Phone: 123-456-7890</p3><br></br>
      <p3>Email: info@bankingapp.com</p3>
      </div>
    </footer>

    </div>
  );
};

export default CustomerSupportPage;
