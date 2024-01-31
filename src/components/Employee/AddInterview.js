import React from 'react';
import '../../css/Employee/AddInterview.css'; // Update the CSS import
import SubmitButton from '../Common/SubmitButton'; // Import the SubmitButton component

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
          <div class="form-group">
  <label for="round">Round:</label>
  <select className="form-group"  id="round" name="round">
    <option value="1">Round 1</option>
    <option value="2">Round 2</option>
    <option value="3">Round 3</option>
    {/* Add more options as needed */}
  </select>
</div>

          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            {/* Updated textarea with rows and cols attributes */}
            <textarea id="notes" name="notes" rows="4" cols="50" />
          </div>
          {/* Use the SubmitButton component */}
          <SubmitButton title="Submit"  className="submit-button"/>
        </form>
      </div>
    </div>
  );
};

export default AddInterview;
