import React from 'react';

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1050, // To make sure it's above other content
};

const FloatingButton = () => {
  return (
    // The `d-lg-none` class ensures this button ONLY appears on mobile/tablet
    <div className="d-lg-none">
      <button
        className="btn btn-danger rounded-circle p-0"
        style={{...floatingButtonStyle, width: '56px', height: '56px'}}
      >
        <i className="bi bi-pencil-fill fs-5"></i>
      </button>
    </div>
  );
};

export default FloatingButton;