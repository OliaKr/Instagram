import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import createpic from '../assets/img/createpic.png';
import { ImgUploader } from './img-uploader.jsx';

const style = {
  display: 'flex',
  flexDirection: 'column', 
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 690,
  height: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '1%',
  border: '2px solid red'
};

export function CreatePostModal({ open, handleClose }) {
  const [file, setFile] = useState();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} >
        <div className='modal-header'>
          <span>Create new post </span>
         
        </div>
        <Divider/>
        {/* <div style={{height: '1px', width: '20px', backgroundColor:" black"}}/> */}
        <div className='img-create-container'>
         <img
          src={createpic}
          width="100" height="100"
          alt='newPostImg'
        /> 
          <ImgUploader/>
        </div>
        
        
     
      </Box>
    </Modal>
  );
}
