// EmployeeProfile.js

import React, { useState } from 'react';
import '../../css/Employee/EmployeeProfile.css';

const EmployeeProfile = () => {
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);

  const openAddPhotoModal = () => {
    setShowAddPhotoModal(true);
  };

  const closeAddPhotoModal = () => {
    setShowAddPhotoModal(false);
  };

  return (
    <div className="employee-container">
      <div className="profile-container" onClick={openAddPhotoModal}>
        <div className="profile-image">
          {/* Use the correct path to your image in the public folder */}
          <img src="/sample_profile_picture.jpg" alt="Profile Image" />
          <div className="add-photo-overlay">Add Photo</div>
        </div>
        <div className="details">
          <h2 className="name">John Doe</h2>
          <p className="designation">Software Engineer</p>
        </div>
      </div>
      {showAddPhotoModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeAddPhotoModal}>&times;</span>
            <p>Add Photo Form</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeProfile;
