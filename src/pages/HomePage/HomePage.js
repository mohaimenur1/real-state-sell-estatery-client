/** @format */

import React from 'react';

const HomePage = () => {
  return (
    <div className='container mt-5'>
      <div className='row d-flex justify-content-between'>
        <div className='col-lg-6'>
          <div className='heading-section'>
            <h2>Search property to rent</h2>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='input-group mb-3'>
            <div className='input-group mb-3 border rounded-2'>
              <input
                type='text'
                className='form-control border-0'
                placeholder='Search with Search Bar'
                aria-label='Username'
                aria-describedby='basic-addon1'
              />
              <span
                className='input-group-text rounded-circle m-2'
                id='basic-addon1'
              >
                <i className='fa fa-angle-down i'></i>
              </span>
            </div>
            {/* <div className='input-group-prepend position-absolute'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
