import React, { useState } from 'react';
import './todolist.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Chip, Container } from '@mui/material';
import EditLocationAltSharpIcon from '@mui/icons-material/EditLocationAltSharp';
import { deleteButtonStyle } from './css/utlities';

const TodoList = () => {
    const [arr, setArr] = useState([]);
    const [addElement, setAddElement] = useState('');
    const [index, setIndex] = useState(-1)


    const addData = () => {
        if(addElement){
            const addName = arr.some(item => item.toUpperCase() === addElement.toUpperCase());
            if (addName) {
                alert("Please add a different content.");
            } else {
                let newArr = [...arr, addElement];
                setArr(newArr);
                setAddElement('');
                setIndex(index);
            }
        }else{
            alert("Plz Add Contant")
        }
    
    };

    function editElement(ind) {
        let newName = [...arr]
        setAddElement(newName[index])
        setIndex(ind)
    }

    function upDataElement() {
        let newArr = [...arr]
        newArr[index] = addElement
        setArr(newArr)
    }

    function changeBackground() {

        let body = document.getElementsByTagName("body")
        body[0].style.backgroundColor = "red"
    }
    function changeColor() {
        let body = document.getElementsByTagName("body")
        body[0].style.backgroundColor = "white"
    }

    return (

        <div >
            <Button variant='contained' style={deleteButtonStyle}>ff</Button>
            <Container maxWidth="sm" className='todolist'>
                <input
                    className='text-box'
                    type="text"
                    value={addElement}
                    onChange={(e) => { setAddElement(e.target.value) }}
                    onFocus={changeBackground}
                    onBlur={changeColor}
                    onKeyDown={(e) => {
                        if (e.key == "Enter") {
                            addData()
                        }
                    }
                    }
                />
                <br />
                <Button className='Uploadbutton'
                    onClick={addData}
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon className='UploadIcon'/>}
                >
                    Add Element
                </Button><br />
                <Button className='Uploadbutton'
                    onClick={upDataElement}
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon  className='UploadIcon'/>}
                >
                    UpData Name
                </Button>
                <div className='todo-box'>
                    {arr.map((item, index) => (
                        <Chip
                            key={index}
                            label={item}
                            onDelete={() => editElement(index)}
                            deleteIcon={<EditLocationAltSharpIcon  style={deleteButtonStyle}/>
                            }
                        />
                    ))}
                </div>
            </Container>
            
        </div>
    )
}

export default TodoList