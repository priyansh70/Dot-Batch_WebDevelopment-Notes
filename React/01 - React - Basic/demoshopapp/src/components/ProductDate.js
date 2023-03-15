import React from 'react';

import './ProductDate.css';

const ProductDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='product-date'>
      <div className='product-date__month'>{month}</div>
      <div className='product-date__year'>{year}</div>
      <div className='product-date__day'>{day}</div>
    </div>
  );
};

export default ProductDate;