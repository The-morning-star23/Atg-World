import React from 'react';


const Header = ({ handleShowModal }) => {
  return (
    <header className="p-3 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <img src="/assets/logo.svg" alt="ATG.WORLD Logo" style={{ height: '72px' }} className="me-2" />
            <span className="fs-4 fw-bold">ATG.WORLD</span>
          </a>

          {/* Search Bar */}
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