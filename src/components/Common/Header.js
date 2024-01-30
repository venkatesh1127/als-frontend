// Header.js

import React, { useState } from 'react';
import "../../css/Common/Header.css"

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-and-company">
          <img src="als_logo.png" alt="Company Logo" className="header-logo" />
          <div className="company-info">
            <p className="company-name">APPLAB SYSTEMS INC</p>
          </div>
        </div>
      </div>
      <div className="header-right">
        {isLoggedIn && (
          <div className="header-user">
            <img src="user-icon.png" alt="User Icon" className="user-icon" />
            <span className="user-name">Welcome, John Doe</span>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <ul className="menu">
          <li className="menu-item">
            <a href="#">Option-1</a>
          </li>
          <li className="menu-item">
            <a href="#">Option-2</a>
          </li>
          {/* ...other menu items */}
        </ul>
      )}
    </header>
  );
};

export default Header;
