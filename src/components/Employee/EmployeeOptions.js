// EmployeeOptions.js

import React from 'react';
import '../css/EmployeeOptions.css';

const EmployeeOptions = () => {
  // Sample options (you can replace these with your actual options)
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className="option">
          {option}
        </div>
      ))}
    </div>
  );
};

export default EmployeeOptions;
