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
        <img src="als_logo.png" alt="Company Logo" className="header-logo" />
        <button className="header-menu-button" onClick={handleMenuClick}>
          {/* Menu icon goes here */}
        </button>
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
