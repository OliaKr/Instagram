import React, { useState} from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Divider from '@mui/material/Divider'
import createpic from '../assets/img/createpic.png'
import { ImgUploader } from './img-uploader.jsx'
import {closeCreateModal, addStory, updateImgUrl} from '../store/story.actions.js'
import {newStory} from '../assets/services.js/story-service.js'

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
  // border: '2px solid red'
};

export function CreatePostModal() {
    const isCreateModalOpen = useSelector(storeState => storeState.storyModule.isCreateModalOpen)
    const updatedImgUrl = useSelector(
      (storeState) => storeState.storyModule.updatedImgUrl
    );
     
    function onCreateNewPost() {
      if(updatedImgUrl){
        let story = {...newStory, postImg: updatedImgUrl}
        addStory(story);
        updateImgUrl(null);
      }
    }

  return (
    <Modal
      open={isCreateModalOpen}
      onClose={closeCreateModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} >
        <div className='modal-header'>
          <span>Create new post </span>
        </div>
        <div onClick={onCreateNewPost} className='modal-header'>
          <span>Create</span>
        </div>

        <Divider/>
        <div onClick={closeCreateModal} className='modal-header'>
          <span>Cancel </span>
        </div>
        <Divider/>
        <Divider/>
        <div className='img-create-container'>
         <img
          src={createpic}
          width='100' height='100'
          alt='newPostImg'
        /> 
          
          <ImgUploader />
        </div>
        
        
     
      </Box>
    </Modal>
  );
}
