// AddInterview.js
import React from 'react';
import '../../css/Employee/AddInterview.css'; // Update the CSS import

const AddInterview = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      submissionType: e.target.submissionType.value,
      interviewDateTime: e.target.interviewDateTime.value,
      round: e.target.round.value,
      notes: e.target.notes.value,
    };
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Add Interview</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="submissionType">Submission Type:</label>
            <select id="submissionType" name="submissionType">
              <option value="resume">Resume</option>
              <option value="application">Application</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="interviewDateTime">Interview Date and Time:</label>
            <input type="datetime-local" id="interviewDateTime" name="interviewDateTime" />
          </div>
          <div className="form-group">
            <label htmlFor="round">Round:</label>
            <input type="text" id="round" name="round" />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" name="notes" rows="4" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddInterview;
