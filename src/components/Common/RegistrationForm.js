// RegistrationForm.js

import React, { useState } from 'react';
import '../../css/Common/RegistrationForm.css'; // Import the CSS file for styling
import SubmitButton from '../Common/SubmitButton';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');

  const validateEmail = () => {
    // Basic email validation with a regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = () => {
    // Basic phone number validation with a regex pattern
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!validateEmail()) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhone()) {
      alert('Please enter a valid phone number (10 digits only).');
      return;
    }

    // TODO: Perform registration logic with the captured data
  };

  return (
    <div className="registration-container">
      <h2 className="registration-header">Create your account</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="1234567890"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">Choose your username</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="john_doe123"
            required
          />
        </div>
        <SubmitButton title="Submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
