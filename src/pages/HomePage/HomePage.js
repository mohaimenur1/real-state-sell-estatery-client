/** @format */

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import SearchField from '../../components/SearchField/SearchField';

const HomePage = () => {
  // const proerties = useLoaderData();
  const [properties, setProperties] = useState();
  const [isAsc, setIsAsc] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/property?order=${isAsc ? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, [isAsc]);
  return (
    <div className='container mt-5'>
      <div className='row d-flex justify-content-between'>
        <div className='col-lg-6'>
          <div className='heading-section'>
            <h2 className='fw-bolder'>Search property to rent</h2>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='input-group mb-3 border'>
            <div className='input-group mb-3 border rounded-2 bg-white'>
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
      <SearchField isAsc={isAsc} setIsAsc={setIsAsc} />
      <div className='row g-5 mt-2 mb-3'>
        {properties &&
          properties.map((property) => {
            return <PropertyCard key={property._id} property={property} />;
          })}
      </div>
    </div>
  );
};

export default HomePage;
