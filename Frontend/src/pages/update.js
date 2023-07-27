import React, { useState } from 'react';

const ProfileUpdateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Handle form submission, e.g., update the user's profile in the backend

    // Clear form fields
    setName('');
    setEmail('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="profile-update-form">
      <h2>Profile Update</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input style={{width:"100%"}}
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileUpdateForm;
