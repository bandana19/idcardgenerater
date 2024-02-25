import { Box, Button, Drawer, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

const CardButton = ({ addlData, setAllData,openModal,setOpenModal,setShow,show}) => {
  const [addNumber, setAddNumber] = useState(1)
  const steps = [
    { title: 'Basic Details', indexNo: 1 },
    { title: 'Contact Details', indexNo: 2 },
  ];

  
  return (
    <>

    <Drawer
        anchor={"top"}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={addNumber} alternativeLabel>
            {steps.map((label) => (
              <Step key={label.indexNo}>
                <StepLabel
                  onClick={() => setAddNumber(label.indexNo)}
                >{label.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {addNumber == 1 ? <FirstStep setAllData={setAllData} addlData={addlData} /> : <SecondStep setOpenModal={setOpenModal} setAllData={setAllData} addlData={addlData} setShow={setShow}/>}

      </Drawer>
    
    </>
  )
}

export default CardButton