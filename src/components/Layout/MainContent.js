import React from 'react';
import PostFeed from '../Posts/PostFeed';
import Sidebar from './Sidebar';

const MainContent = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Post Feed Column */}
        <div className="col-lg-8">
          <PostFeed />
        </div>
        {/* Sidebar Column */}
        <div className="col-lg-4 d-none d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainContent;