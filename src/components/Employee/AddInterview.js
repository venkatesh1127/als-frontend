<<<<<<< HEAD
// AddInterview.js

import React, { useState } from 'react';
import '../../css/Employee/AddInterview.css'; // Adjust the import path accordingly
=======
import React from 'react';
import '../../css/Employee/AddInterview.css'; // Update the CSS import
import SubmitButton from '../Common/SubmitButton'; // Import the SubmitButton component
>>>>>>> f75487cac08f32a3be967257433dfd2071734f08

const AddInterview = ({ isOpen, onClose, onSubmit }) => {
  const [submissionCompany, setSubmissionCompany] = useState('');
  const [interviewDate, setInterviewDate] = useState('');
  const [interviewTime, setInterviewTime] = useState('');
  const [round, setRound] = useState('');
  const [notes, setNotes] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      submissionCompany,
      interviewDate,
      interviewTime,
      round,
      notes,
    });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Interview</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Submission Company:
            <select value={submissionCompany} onChange={(e) => setSubmissionCompany(e.target.value)}>
              <option value="">Select Submission Company</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              {/* Add more companies as needed */}
            </select>
<<<<<<< HEAD
          </label>

          <label>
            Interview Date:
            <input
              type="date"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </label>

          <label>
            Interview Time:
            <input
              type="time"
              value={interviewTime}
              onChange={(e) => setInterviewTime(e.target.value)}
            />
          </label>

          <label>
            Round:
            <select value={round} onChange={(e) => setRound(e.target.value)}>
              <option value="">Select Round</option>
              <option value="First Round">First Round</option>
              <option value="Second Round">Second Round</option>
              {/* Add more rounds as needed */}
            </select>
          </label>

          <label>
            Notes:
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
=======
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
            {/* Updated textarea with rows and cols attributes */}
            <textarea id="notes" name="notes" rows="4" cols="50" />
          </div>
          {/* Use the SubmitButton component */}
          <SubmitButton label="Submit" />
>>>>>>> f75487cac08f32a3be967257433dfd2071734f08
        </form>
      </div>
    </div>
  );
};

export default AddInterview;
