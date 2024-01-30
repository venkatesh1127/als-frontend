// SubmitButton.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Common/SubmitButton.css';

const SubmitButton = ({ onSubmit, label }) => {
  return (
    <button type="button" onClick={onSubmit}>
      {label}
    </button>
  );
};

SubmitButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
