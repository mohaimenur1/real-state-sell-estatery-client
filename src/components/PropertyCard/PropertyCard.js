/** @format */

import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className='col-lg-4'>
      <div className='card'>
        <img src={property.img} className='card-img-top img-fluid' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{property.location}</h5>
          <p className='card-text'>$ {property.price}</p>
          <p className='card-text'>Date: {property.date}</p>
          <p className='card-text'>Type: {property.type}</p>
          <a href='#' className='btn btn-primary'>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
