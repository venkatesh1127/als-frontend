// ... (other imports and code)
import React, { useState } from 'react';
import '../../css/Employee/EmployeeOptions.css';
import AddInterview from './AddInterview';
import AddSubmission from './AddSubmission';

// Rest of your code...

const EmployeeOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  const options = ['Option 1', 'Add Submission', 'Add Interview', 'Option 4', 'Option 5', 'Option 6'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    if (option === 'Add Interview') {
      setIsInterviewModalOpen(true);
      setIsSubmissionModalOpen(false); // Close submission modal if open
    } else if (option === 'Add Submission') {
      setIsSubmissionModalOpen(true);
      setIsInterviewModalOpen(false); // Close interview modal if open
    } else {
      setIsInterviewModalOpen(false);
      setIsSubmissionModalOpen(false);
    }
  };

  const handleCloseInterviewModal = () => {
    setIsInterviewModalOpen(false);
  };

  const handleCloseSubmissionModal = () => {
    setIsSubmissionModalOpen(false);
  };

  const handleSubmitInterviewForm = (formData) => {
    console.log('Interview data:', formData);
    setIsInterviewModalOpen(false);
  };

  const handleSubmitSubmissionForm = (formData) => {
    console.log('Submission data:', formData);
    setIsSubmissionModalOpen(false);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className="option" onClick={() => handleOptionClick(option)}>
          {option}
        </div>
      ))}
      {/* Modal for interview form */}
      <AddInterview isOpen={isInterviewModalOpen} onClose={handleCloseInterviewModal} onSubmit={handleSubmitInterviewForm}>
        {/* Interview form content */}
      </AddInterview>
     
      {/* Modal for submission form */}
      {isSubmissionModalOpen && (
        <AddSubmission onClose={handleCloseSubmissionModal} onSubmit={handleSubmitSubmissionForm}>
          {/* Submission form content */}
        </AddSubmission>
      )}
    </div>
  );
};

export default EmployeeOptions;
