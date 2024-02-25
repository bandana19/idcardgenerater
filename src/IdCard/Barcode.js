import React from 'react';
import Barcode from 'react-barcode';
import './card.css'

const BarCode = ({ value }) => {
  return (
    <div className='barcode'>
      <Barcode value={value} className='bar-code'/>
    </div>
  );
};

export default BarCode;
