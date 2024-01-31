// AddAttendance.js
import React, { useState } from 'react';
import '../../css/Employee/AddAttendance.css';

const AddAttendance = ({ isOpen, onClose, onSubmit }) => {
  const [attendanceReason, setAttendanceReason] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMarkAttendance = () => {
    setSelectedOption('Mark My Attendance');
    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setAttendanceStatus(formattedDateTime);
  };

  const handleNotAvailable = () => {
    setSelectedOption('Not Available');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      attendanceStatus,
      attendanceReason
    };
    onSubmit(formData);
    onClose(); // Close the modal after submission
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="attendance-modal">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <h2>Mark Attendance</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="radio"
                id="markAttendance"
                name="attendanceOption"
                value="Mark My Attendance"
                onChange={handleMarkAttendance}
                checked={selectedOption === 'Mark My Attendance'}
              />
              <label htmlFor="markAttendance">Mark My Attendance</label>
            </div>
            <div>
              <input
                type="radio"
                id="notAvailable"
                name="attendanceOption"
                value="Not Available"
                onChange={handleNotAvailable}
                checked={selectedOption === 'Not Available'}
              />
              <label htmlFor="notAvailable">Not Available</label>
            </div>
            {selectedOption === 'Mark My Attendance' && <p>Date and Time: {attendanceStatus}</p>}
            {selectedOption === 'Not Available' && (
              <div className="attendance-reason">
                <label htmlFor="reason">Reason:</label>
                <input
                  type="text"
                  id="reason"
                  value={attendanceReason}
                  onChange={(e) => setAttendanceReason(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};

export default AddAttendance;
