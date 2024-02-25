import React, { useRef, useState } from 'react'
import '../App.css'
import { Box, TextField } from '@mui/material'

const FirstStep = ({ setAllData, addlData }) => {
    function handleImage(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAllData({ image: reader.result })
            };
            reader.readAsDataURL(file);
        }
        


    }
    const selectImg = useRef()
    return (
        <div className='cart-modal-box'>
            <input ref={selectImg} type='file' style={{ display: "none" }} onChange={handleImage} />
            <div className='sqare'
                style={{ backgroundImage: `url(${addlData.image})` }}

                onClick={() => selectImg.current.click()}
            >images</div>

            <Box
            >
                <TextField style={{ marginLeft: '13px' }} label="Your Name" variant="standard" className='text-box'
                    onChange={(e) => setAllData({ ...addlData, name: e.target.value })} />
                <TextField style={{ marginLeft: '13px' }} label="Your Work" variant="standard" className='text-box'
                    onChange={(e) => setAllData({ ...addlData, work: e.target.value })} />
                <TextField style={{ marginLeft: '13px' }} label="Your Birth" variant="standard" className='text-box'
                    onChange={(e) => setAllData({ ...addlData, birth: e.target.value })} />
            </Box>
        </div>
    )
}

export default FirstStep