import React from 'react';
import PostCard from './PostCard';

// Sample data to simulate fetching posts from an API
const postData = [
  {
    id: 1,
    type: 'Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    author: {
      name: 'Sarthak Kamra',
      avatar: 'https://i.pravatar.cc/48?u=1'
    },
    views: '1.4k'
  },
  {
    id: 2,
    type: 'Education',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    author: {
      name: 'Sarah West',
      avatar: 'https://i.pravatar.cc/48?u=2'
    },
    views: '4.8k'
  },
  {
    id: 3,
    type: 'Meetup',
    title: 'Finance & Investment Elite Social Mixer @Lujiazui',
    date: 'Fri, 12 Oct, 2018',
    location: 'Ahmedabad, India',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    author: {
      name: 'Ronal Jones',
      avatar: 'https://i.pravatar.cc/48?u=3'
    },
    views: '800'
  },
  {
    id: 4,
    type: 'Job',
    title: 'Software Developer',
    company: 'Innovaccer Analytics Private Ltd.',
    location: 'Noida, India',
    author: {
      name: 'Joseph Gray',
      avatar: 'https://i.pravatar.cc/48?u=4'
    },
    views: '1.7k'
  }
];


const PostFeed = () => {
  return (
    <div>
      {/* --- Keep the Desktop and Mobile Navigation code here --- */}
      {/* Desktop Post Navigation */}
      <div className="d-none d-lg-flex justify-content-between align-items-center border-bottom pb-2">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link active text-dark" aria-current="page" href="#!">All Posts(32)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">Article</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">Event</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#!">Job</a>
          </li>
        </ul>
        <div>
          <button className="btn btn-light me-2 fw-medium">Write a Post <i className="bi bi-caret-down-fill"></i></button>
          <button className="btn btn-primary"><i className="bi bi-people-fill me-2"></i>Join Group</button>
        </div>
      </div>

      {/* Mobile Post Navigation */}
      <div className="d-flex d-lg-none justify-content-between align-items-center px-3 mt-3">
        <h6 className="fw-bold mb-0">Posts(368)</h6>
        <button className="btn btn-light">Filter: All <i className="bi bi-caret-down-fill"></i></button>
      </div>
      
      {/* Map over the postData and render a PostCard for each post */}
      <div className="mt-3">
        {postData.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostFeed;