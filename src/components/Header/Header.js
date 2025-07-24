import React from 'react';

// Receive handleShowModal as a prop
const Header = ({ handleShowModal }) => {
  return (
    <header className="p-3 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo */}
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <img src="https://i.ibb.co/W2y9BqC/logo.png" alt="ATG.WORLD Logo" style={{ height: '36px' }} />
          </a>

          {/* Search Bar (same as before) */}
          <div className="col-lg-5">
            <form className="w-100 me-3" role="search">
              <div className="input-group">
                <span className="input-group-text bg-light border-0" id="basic-addon1">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control bg-light border-0"
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>

          {/* Account Creation/Login */}
          <div className="text-end">
            {/* Use a button and the onClick handler */}
            <button className="btn btn-link text-dark text-decoration-none p-0 m-0" onClick={handleShowModal}>
              Create account. <span className="text-primary fw-bold">It’s free! <i className="bi bi-caret-down-fill"></i></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;