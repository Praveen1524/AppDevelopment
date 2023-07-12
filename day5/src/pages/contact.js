import React from 'react';
import '../styles/contact.css';


const CustomerSupportPage = () => {
  return (
      
      <div className='concon'>
      <div className='conbg'>
      <br></br>
      <br></br>      

    <div className="customer-support-page">
    
      <h1>Contact Customer Support</h1>
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
      <p><h3>Contact Us:</h3>123 Bank Street, Coimbatore, India</p>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@bankingapp.com</p>
      </div>
    </footer>

    </div>
  );
};

export default CustomerSupportPage;
