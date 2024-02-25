import React, { useState } from 'react'
import '../App.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const SecondStep = ({ setAllData, addlData,setShow ,setOpenModal}) => {
    

    function handleChange(e) {
        setAllData({ ...addlData, blodType: e.target.value })
    }
    return (

        <>
            <div className='cart-modal-box'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Blod Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value='A+'>A+</MenuItem>
                        <MenuItem value='B+'>B+</MenuItem>
                        <MenuItem value='O+'>O+</MenuItem>
                        <MenuItem value='A-'>A-</MenuItem>
                        <MenuItem value='B-'>B-</MenuItem>
                        <MenuItem value='O-'>O-</MenuItem>
                    </Select>
                </FormControl>
                <Box
                >
                    <TextField style={{ marginLeft: '13px' }} label="Address" variant="standard" className='text-box'
                        onChange={(e) => setAllData({ ...addlData, address: e.target.value })} />
                    <TextField style={{ marginLeft: '13px' }} label="Contact No" variant="standard" className='text-box'
                        onChange={(e) => setAllData({ ...addlData, contactNo: e.target.value })} />
                    <TextField style={{ marginLeft: '13px' }} label="Father Name" variant="standard" className='text-box'
                        onChange={(e) => setAllData({ ...addlData, fatherName: e.target.value })} />
                    <TextField style={{ margin: '13px' }} label='Mother Name' variant='standard' className='text-box'
                        onChange={(e) => setAllData({ ...addlData, motherName: e.target.value })} />

                </Box>
            </div>
            <p className='setting-button'>
                <Button variant="contained" endIcon={<SettingsIcon />} 
                onClick={()=>{
                    setOpenModal(false)
                    setShow(true)}}>
                    Final
                </Button>
            </p>
        </>
    )
}

export default SecondStep