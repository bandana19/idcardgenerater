import { Box, Container } from '@mui/material'
import React from 'react'
import './card.css'
import IdentiCardBack from './IdentiCardBack'
import Barcode from './Barcode'
const IdentiCardFront = ({ addlData }) => {
  return (
    <div className='box-color'>
      <div className='id-box'>
        <div className='image-box' style={{ backgroundImage: `url(${addlData.image})` }}>
        </div>
        <h2 className='name '>{addlData.name}</h2>
        <p className='work '>{addlData.work}</p>
        <p className='dob '>DOB :{addlData.birth}</p>
       
       <Barcode value={"Bandan"} />

        <div className=' footer'>
          <div className='saw-image'>
            <img className='swa' src='/img/swa.png' />
          </div>
          <span className='sa'>Software  Academy</span>
        </div>
      </div>
      <IdentiCardBack addlData={addlData} />
    </div>
  )
}

export default IdentiCardFront