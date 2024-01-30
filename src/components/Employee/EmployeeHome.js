// EmployeeHome.js
import React, { useState } from 'react';
import Header from '../Common/Header';
import EmployeeProfile from './EmployeeProfile';
import EmployeeOptions from './EmployeeOptions';
import '../../css/Employee/EmployeeHome.css';  // Import your EmployeeHome.css here
import '../../css/Employee/AddSubmission';

const EmployeeHome = () => {
  const [isAddSubmissionOpen, setAddSubmissionOpen] = useState(false);

  const handleOpenAddSubmission = () => {
    setAddSubmissionOpen(true);
  };

  const handleCloseAddSubmission = () => {
    setAddSubmissionOpen(false);
  };

  const handleAddSubmission = (submissionData) => {
    console.log('Submitted data:', submissionData);
    handleCloseAddSubmission();
  };

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

      {/* "Add Submission" button */}
      <button onClick={handleOpenAddSubmission}>Add Submission</button>

      {/* Render AddSubmission component if it's open */}
      {isAddSubmissionOpen && (
        <AddSubmission onClose={handleCloseAddSubmission} onSubmit={handleAddSubmission} />
      )}
    </div>
  );
};

export default EmployeeHome;
