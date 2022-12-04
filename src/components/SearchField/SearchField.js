/** @format */

import React, { ChangeEventHandler, useState } from 'react';

import { format, isAfter, isBefore, isValid, parse } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from 'react-day-picker';
import './SearchField.css';

const SearchField = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedRange, setSelectedRange] = useState(new Date());
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleFromChange: ChangeEventHandler = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
  };

  const handleToChange: ChangeEventHandler = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, 'y-MM-dd', new Date());

    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
  };

  const handleRangeSelect: SelectRangeEventHandler = (range: DateRange) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'y-MM-dd'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'y-MM-dd'));
    } else {
      setToValue('');
    }
  };

  return (
    <div className='card p-3'>
      {/* <h2>SearchField</h2> */}
      <div className='row d-flex border-0'>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>Location</span>
          <div class='mb-3'>
            <input
              type='text'
              className='form-control border-0'
              id='exampleFormControlInput1'
              placeholder='London'
            />
          </div>
        </div>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>When</span>
          {/* <select class='form-select' aria-label='Default select example'> */}
          <DayPicker
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
              </form>
            }
          />

          {/* <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option> */}
          {/* </select> */}
        </div>
        <div className='col-lg-3 d-flex flex-column border-end'>
          <span className='category-text-color fw-semibold'>Price</span>
          <select class='form-select' aria-label='Default select example'>
            <option selected>Open this select menu</option>
            <option value='1'>$500-$2000</option>
            <option value='2'>$400-$1500</option>
            <option value='3'>$700-$1200</option>
          </select>
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
