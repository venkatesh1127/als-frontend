// EmployeeHome.js

import React from 'react';
import Header from '../Common/Header';
import EmployeeProfile from './EmployeeProfile';
import EmployeeOptions from './EmployeeOptions';
import '../../css/Employee/EmployeeHome.css';
import '../../css/Employee/EmployeeOptions.css';

const EmployeeHome = () => {
  return (
    <div className="employee-home-container">
      <Header />
      <div className="main-content-container">
        <div className="employee-profile-container">
          <EmployeeProfile />
        </div>
        <div className="employee-options-container">
          <EmployeeOptions />
        </div>
      </div>
    </div>
  );
};

export default EmployeeHome;
