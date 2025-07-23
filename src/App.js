import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainContent from './components/Layout/MainContent';
import FloatingButton from './components/Layout/FloatingButton';
import AuthModal from './components/Auth/AuthModal';
import './App.css';

function App() {
  // State to control the modal's visibility
  const [showModal, setShowModal] = useState(false);

  // Function to show the modal
  const handleShow = () => setShowModal(true);
  
  // Function to hide the modal
  const handleClose = () => setShowModal(false);

  return (
    <div className={showModal ? 'modal-open' : ''}>
      {/* Pass the handleShow function to the Header */}
      <Header handleShowModal={handleShow} /> 
      
      <Hero />
      <MainContent />
      <FloatingButton />

      {/* The AuthModal component itself */}
      <AuthModal show={showModal} handleClose={handleClose} />

      {/* This creates the grey overlay when the modal is open */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default App;