/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand'>Estatery</Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='navbar-nav d-flex justify-content-between'>
              <div className='first-items d-lg-flex '>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#'>
                    Rent
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Buy
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled'>Sell</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled'>Manage Property</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled'>Manage Resources</a>
                </li>
              </div>
              <div className='second-items d-flex '>
                <li className=''>
                  <button className='btn btn-outline-danger'>Login</button>
                </li>
                <li className=''>
                  <button className='btn btn-primary'>Sign Up</button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
