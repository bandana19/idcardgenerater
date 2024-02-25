
import { useState } from 'react';
import './App.css';
import CardButton from './IdCard/CardButton';
import IdentiCard from './IdCard/IdentiCardFront';
import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// import Imagelist from './testImage/Imagelist';
//   import TodoList from './TodoList';


function App() {
  const [openModal, setOpenModal] = useState(false)
  const [show, setShow] = useState(false)
  const [addlData, setAllData] = useState({
    image: "",
    name: "",
    work: "",
    birth: "",
    blodType: "",
    address: "",
    contactNo: "",
    fatherName: "",
    motherName: "",
  })
  return (
    <>
      {/* <TodoList/>  
     <Imagelist/> */}
   <div className='change-bankground'>
      {show && <IdentiCard addlData={addlData} />}
      <CardButton show={show} setShow={setShow} setAllData={setAllData} addlData={addlData} openModal={openModal} setOpenModal={setOpenModal} />
      <p className='setting-icon'>
        <Button variant="contained" endIcon={<SettingsIcon />} onClick={() => setOpenModal(true)}>
          {show ? "Update" : "Open"}
        </Button>
    </p>
    </div> *
    </>
  );
}

export default App;
