// SubmitButton.js
import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Common/SubmitButton.css';

const SubmitButton = ({ title, onSubmit }) => {
  return (
    <button className="submit-button" onClick={onSubmit}>
      {title}
    </button>
  );
};

SubmitButton.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
