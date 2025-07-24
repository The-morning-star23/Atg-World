import React, { useState } from 'react';

const Sidebar = () => {
  // Create state to hold the input's value
  const [location, setLocation] = useState('');

  // Create a function to clear the location
  const clearLocation = () => {
    setLocation('');
  };

  return (
    <div>
      <div className="input-group">
        <i className="bi bi-geo-alt-fill input-group-text bg-white border-0 border-bottom rounded-0"></i>
        <input 
          type="text" 
          className="form-control border-0 border-bottom" 
          placeholder="Enter your location"
          value={location} // Bind the input's value to our state
          onChange={(e) => setLocation(e.target.value)} // 5. Update state when user types
        />
        <i 
          className="bi bi-x-lg input-group-text bg-white border-0 border-bottom rounded-0"
          onClick={clearLocation} // Call the clear function on click
          style={{ cursor: 'pointer' }} // Add a pointer to show it's clickable
        ></i>
      </div>
      <div className="d-flex text-muted mt-4">
        <i className="bi bi-info-circle me-2"></i>
        <small>Your location will help us serve better and extend a personalised experience.</small>
      </div>
    </div>
  );
};

export default Sidebar;