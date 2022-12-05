/** @format */

import React, { ChangeEventHandler, useState } from 'react';

import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from 'react-day-picker';
import './SearchField.css';

const SearchField = ({ isAsc, setIsAsc }) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const [selectedRange, setSelectedRange] = useState(new Date());
  // const [fromValue, setFromValue] = useState('');
  // const [toValue, setToValue] = useState('');

  // const handleFromChange: ChangeEventHandler = (e) => {
  //   setFromValue(e.target.value);
  //   const date = parse(e.target.value, 'y-MM-dd', new Date());
  //   if (!isValid(date)) {
  //     return setSelectedRange({ from: undefined, to: undefined });
  //   }
  //   if (selectedRange?.to && isAfter(date, selectedRange.to)) {
  //     setSelectedRange({ from: selectedRange.to, to: date });
  //   } else {
  //     setSelectedRange({ from: date, to: selectedRange?.to });
  //   }
  // };

  // const handleToChange: ChangeEventHandler = (e) => {
  //   setToValue(e.target.value);
  //   const date = parse(e.target.value, 'y-MM-dd', new Date());

  //   if (!isValid(date)) {
  //     return setSelectedRange({ from: selectedRange?.from, to: undefined });
  //   }
  //   if (selectedRange?.from && isBefore(date, selectedRange.from)) {
  //     setSelectedRange({ from: date, to: selectedRange.from });
  //   } else {
  //     setSelectedRange({ from: selectedRange?.from, to: date });
  //   }
  // };

  // const handleRangeSelect: SelectRangeEventHandler = (range: DateRange) => {
  //   setSelectedRange(range);
  //   if (range?.from) {
  //     setFromValue(format(range.from, 'y-MM-dd'));
  //   } else {
  //     setFromValue('');
  //   }
  //   if (range?.to) {
  //     setToValue(format(range.to, 'y-MM-dd'));
  //   } else {
  //     setToValue('');
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const location = form.location.value;
    const date = form.date.value;
    const price = form.price.value;
    const type = form.type.value;

    console.log(location, date, price, type);
  };

  return (
    <div className='card p-3'>
      {/* <h2>SearchField</h2> */}
      <form onSubmit={handleSubmit}>
        <div className='row d-flex border-0'>
          <div className='col-lg-3 d-flex flex-column border-end'>
            <span className='category-text-color fw-semibold'>Location</span>
            <div className='mb-3'>
              <input
                type='text'
                name='location'
                className='form-control border-0'
                id='exampleFormControlInput1'
                placeholder='London'
              />
            </div>
          </div>
          <div className='col-lg-3 d-flex flex-column border-end'>
            <span className='category-text-color fw-semibold'>When</span>
            <div className='mb-3'>
              <input
                type='text'
                name='date'
                className='form-control border-0'
                id='exampleFormControlInput1'
                placeholder='put your date here'
              />
            </div>
            {/* <select className='form-select' aria-label='Default select example'> */}
            {/* <DayPicker
            mode='range'
            style={{ width: '80px', height: '80px' }}
            selected={selectedRange}
            onSelect={handleRangeSelect}
            footer={
              <form className='ma2'>
                <input
                  size={10}
                  placeholder='From Date'
                  value={fromValue}
                  onChange={handleFromChange}
                  className='input-reset pa2 ma bg-white black ba'
                />
                {' – '}
                <input
                  size={10}
                  placeholder='To Date'
                  value={toValue}
                  onChange={handleToChange}
                  className='input-reset pa2 bg-white black ba'
                />
              </form> */}
            {/* } /> */}
            {/* <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option> */}
            {/* </select> */}
          </div>
          {/* <div className='col-lg-3 d-flex flex-column border-end'>
            <span className='category-text-color fw-semibold'>Price</span>
            <select
              name='price'
              className='form-select'
              aria-label='Default select example'
            >
              <option selected>Open this select menu</option>
              <option value='2000'>$2000</option>
              <option value='700'>$700</option>
              <option value='1200'>$1200</option>
            </select>
          </div> */}
          <div className='dropdown col-lg-3 d-flex flex-column'>
            <span className='category-text-color fw-semibold'>Price Order</span>
            <button
              className='btn btn-secondary dropdown-toggle'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Price
            </button>
            <ul className='dropdown-menu'>
              <li onClick={() => setIsAsc(true)}>
                <a className='dropdown-item'>Low to High</a>
              </li>
              <li onClick={() => setIsAsc(false)}>
                <a className='dropdown-item'>High to Low</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 d-flex  align-items-center'>
            <div className='column-text d-flex flex-column'>
              <span className='category-text-color fw-semibold'>
                Property Type
              </span>
              <select
                name='type'
                className='form-select'
                aria-label='Default select example'
              >
                <option selected>select the type</option>
                <option value='house'>House</option>
                <option value='singleroom'>Single Room</option>
                <option value='doubleroom'>Double Room</option>
              </select>
            </div>
            <div className='straight border'></div>
            <div className='ms-5'>
              <button type='submit' className='btn btn-primary'>
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
