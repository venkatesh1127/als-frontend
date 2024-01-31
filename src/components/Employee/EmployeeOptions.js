// EmployeeOptions.js
import React, { useState } from 'react';
import '../../css/Employee/EmployeeOptions.css';
import AddInterview from './AddInterview'; // Import the renamed modal component
import AddAttendance from './AddAttendance'; // Import the AddAttendance modal component

const EmployeeOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
  const [isModalOpen, setIsModalOpen] = useState(false); // Track the visibility of the modal
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false); // Track the visibility of the attendance modal

  const options = ['Option 1', 'Option 2', 'Add Interview', 'Add Attendance', 'Option 5', 'Option 6'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === 'Add Interview') {
      setIsModalOpen(true); // Open the modal when "Add Interview" option is clicked
    } else if (option === 'Add Attendance') {
      setIsAttendanceModalOpen(true); // Open the attendance modal when "Add Attendance" option is clicked
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleCloseAttendanceModal = () => {
    setIsAttendanceModalOpen(false); // Close the attendance modal
  };

  const handleSubmitForm = (formData) => {
    // Handle the form submission data here
    console.log('Submitted data:', formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  const handleSubmitAttendanceForm = (attendanceReason) => {
    // Handle the attendance form submission data here
    console.log('Attendance Reason:', attendanceReason);
    setIsAttendanceModalOpen(false); // Close the attendance modal after submission
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className="option" onClick={() => handleOptionClick(option)}>
          {option}
        </div>
      ))}
      {/* Modal for submission form */}
      <AddInterview isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitForm}>
        <h2>Submit Data for {selectedOption}</h2>
        {/* Include your submission form fields here */}
        <form onSubmit={(e) => handleSubmitForm(e.target.elements)}>
          {/* Example input field */}
          <input type="text" placeholder="Enter data" />
          <button type="submit">Submit</button>
        </form>
      </AddInterview>
      {/* Modal for attendance form */}
      <AddAttendance isOpen={isAttendanceModalOpen} onClose={handleCloseAttendanceModal} onSubmit={handleSubmitAttendanceForm} />
    </div>
  );
};

export default EmployeeOptions;
