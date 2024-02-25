import React from 'react'

const IdentiCardBack = ({ addlData }) => {
   return (
      <div>
         <div className='id-box1'>
            <div className=' header'>
               <div className='image-swa'>
                  <img className='logo' src='/img/swa.png' />
               </div>
               <p className='title'>Software  Academy</p>
            </div>
            <p className='contant'>While containers can be nested, most layouts do not require a nested container.</p>
            <div className='row  mt-2 '>
               <div className='col-6  text'>Blod Type : </div>
               <div className='col-6  type'>{addlData.blodType}</div>
            </div>
            <div className='row  mt-2 '>
               <div className='col-6  text'>Address : </div>
               <div className='col-6  type'>{addlData.address}</div>
            </div>
            <div className='row  mt-2 '>
               <div className='col-6  text'>Contact No : </div>
               <div className='col-6  type'>{addlData.contactNo}</div>
            </div>
            <div className='row  mt-2 '>
               <div className='col-6  text'>Father Name : </div>
               <div className='col-6  type'>{addlData.fatherName}</div>
            </div>
            <div className='row  mt-2 '>
               <div className='col-6  text'>Mother Name : </div>
               <div className='col-6  type'>{addlData.motherName}</div>
            </div>

            <div className='row discripation mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Nullam ullamcorper urna ac dolor hendrerit, at sodales  efficitur. Sed et diam ac risus
            </div>
         </div></div>
   )
}

export default IdentiCardBack