import React from 'react';
import { NavLink } from 'react-router-dom'; // For navigation links
import "../../css/Common/Menu.css"

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink to="/employees" className="menu-link">
            Employees
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/submissions" className="menu-link">
            Submissions
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/expenses" className="menu-link">
            Expenses
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/attendance" className="menu-link">
            Attendance
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/notes" className="menu-link">
            Notes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
