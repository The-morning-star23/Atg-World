import React from 'react';
import './posts.css';

const PostCard = ({ post }) => {
  return (
    <div className="card mb-3">
      {/* Conditionally render image if it exists */}
      {post.image && <img src={post.image} className="card-img-top" alt={post.title} />}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          {post.type === 'Article' && '✍️ Article'}
          {post.type === 'Education' && '🔬️ Education'}
          {post.type === 'Meetup' && '🗓️ Meetup'}
          {post.type === 'Job' && '💼️ Job'}
        </h6>
        <div className="d-flex justify-content-between">
          <h5 className="card-title post-title">{post.title}</h5>
          <div className="dropdown">
            <button className="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#!">Edit</a></li>
              <li><a className="dropdown-item" href="#!">Report</a></li>
              <li><a className="dropdown-item" href="#!">Option 3</a></li>
            </ul>
          </div>
        </div>
        
        {/* Render description or details based on type */}
        {post.description && <p className="card-text">{post.description}</p>}
        
        {post.type === 'Meetup' && (
          <div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-calendar-event me-2"></i><span>{post.date}</span>
              <i className="bi bi-geo-alt ms-5 me-2"></i><span>{post.location}</span>
            </div>
            <button className="btn btn-outline-danger w-100">Visit Website</button>
          </div>
        )}

        {post.type === 'Job' && (
          <div>
            <div className="d-flex align-items-center mb-2">
                <i className="bi bi-bag me-2"></i><span>{post.company}</span>
                <i className="bi bi-geo-alt ms-5 me-2"></i><span>{post.location}</span>
            </div>
            <button className="btn btn-outline-success w-100">Apply on Timesjobs</button>
          </div>
        )}

        {/* Author Info */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <img src={post.author.avatar} alt={post.author.name} className="rounded-circle author-avatar me-2" />
            <span className="fw-bold">{post.author.name}</span>
          </div>
          <div className="d-flex align-items-center text-secondary">
            <i className="bi bi-eye"></i>
            <span className="ms-2 me-4">{post.views} views</span>
            <button className="btn btn-light">
              <i className="bi bi-share-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;