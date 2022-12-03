/** @format */

import React from 'react';

const SearchField = () => {
  return (
    <div className='card p-3'>
      {/* <h2>SearchField</h2> */}
      <div className='row d-flex border-0'>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>Location</span>
          <strong>New Your,USA</strong>
        </div>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>When</span>
          <strong>New Your,USA</strong>
        </div>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>Price</span>
          <strong>New Your,USA</strong>
        </div>
        <div className='col-lg-3 d-flex  align-items-center'>
          <div className='column-text d-flex flex-column'>
            <span className='category-text-color fw-semibold'>
              Property Type
            </span>
            <strong>Houses</strong>
          </div>
          <div className='straight border'></div>
          <div className='ms-5'>
            <button className='btn btn-primary'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
