import React, { useState, useEffect } from 'react';
import { Modal } from 'bootstrap'; // Import Bootstrap's Modal JS
import './authModal.css';

const AuthModal = ({ show, handleClose, initialView = 'createAccount' }) => {
  const [isSignIn, setIsSignIn] = useState(initialView === 'signIn');
  
  useEffect(() => {
    // This effect handles showing and hiding the modal via Bootstrap's JS
    const modalElement = document.getElementById('authModal');
    if (modalElement) {
      const bsModal = Modal.getOrCreateInstance(modalElement);
      show ? bsModal.show() : bsModal.hide();
    }
  }, [show]);

  const toggleView = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="modal fade" id="authModal" tabIndex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-none">
            {/* Hidden header, close button is inside */}
          </div>

          <div className="modal-body p-0">
            <button type="button" className="btn-close modal-close-btn" onClick={handleClose} aria-label="Close"></button>
            <div className="text-center text-success p-3" style={{backgroundColor: '#EFFFF4'}}>
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </div>

            <div className="row g-0 p-4">
              {/* Form Column */}
              <div className="col-lg-6">
                <h4 className="fw-bold mb-4">{isSignIn ? "Sign In" : "Create Account"}</h4>
                
                {/* FORM */}
                <form>
                  {!isSignIn && (
                    <div className="row g-1">
                      <div className="col">
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
      
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>
                    </div>
                  )}

                  <input type="email" className="form-control mt-2" placeholder="Email" />
                  <div className="input-group mt-2">
                    <input type="password" className="form-control" placeholder="Password" />
                    <span className="input-group-text bg-white"><i className="bi bi-eye-slash"></i></span>
                  </div>
                  
                  {!isSignIn && <input type="password" className="form-control mt-2" placeholder="Confirm Password" />}

                  <button type="submit" className="btn btn-primary rounded-pill w-100 mt-4">
                    {isSignIn ? "Sign In" : "Create Account"}
                  </button>
                </form>

                <button className="btn btn-outline-secondary w-100 mt-3">
                  <i className="bi bi-facebook me-2"></i>Sign {isSignIn ? "in" : "up"} with Facebook
                </button>
                <button className="btn btn-outline-secondary w-100 mt-2">
                  <i className="bi bi-google me-2"></i>Sign {isSignIn ? "in" : "up"} with Google
                </button>
                
                {isSignIn && <p className="text-center fw-bold mt-4">Forgot Password?</p>}
              </div>

              {/* Image and Toggle Column */}
              <div className="col-lg-6 d-none d-lg-flex flex-column align-items-end">
                <p>
                  {isSignIn ? "Don't have an account yet? " : "Already have an account? "}
                  <a href="#!" className="text-primary fw-bold" onClick={toggleView}>
                    {isSignIn ? "Create new for free!" : "Sign In"}
                  </a>
                </p>
                <img src="../../assets/sign-in.jpeg" alt="Authentication Illustration" className="img-fluid" />
                 {!isSignIn && <small className="mt-auto">By signing up, you agree to our Terms & conditions, Privacy policy</small>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;