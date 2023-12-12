import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="https://th.bing.com/th/id/OIP.x5ZikJh5v0OcZULUqFwpvwHaHF?pid=ImgDet&rs=1"
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
            <span className="ms-2">Movie - App</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  <i className="fas fa-plus-circle"></i> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-eye"></i> View
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  <i className="fas fa-search"></i> Search
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  <i className="fas fa-trash-alt"></i> Delete
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
