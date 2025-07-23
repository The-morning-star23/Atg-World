import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div className="input-group">
        <i className="bi bi-geo-alt-fill input-group-text bg-white border-0 border-bottom rounded-0"></i>
        <input type="text" className="form-control border-0 border-bottom" placeholder="Enter your location" />
        <i className="bi bi-x-lg input-group-text bg-white border-0 border-bottom rounded-0"></i>
      </div>
      <div className="d-flex text-muted mt-4">
        <i className="bi bi-info-circle me-2"></i>
        <small>Your location will help us serve better and extend a personalised experience.</small>
      </div>
    </div>
  );
};

export default Sidebar;