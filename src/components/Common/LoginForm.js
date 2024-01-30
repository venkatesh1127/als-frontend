import React, { useState } from 'react';
import '../../css/Common/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Send login data (username and password) to the backend

    // After successful login, redirect to the user dashboard or home page
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login to Employee Portal</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="form-input"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
        <button className="form-submit" type="submit">Login</button>
        <p className="register-link">
          Don't have an account? <span onClick={handleRegisterClick}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
