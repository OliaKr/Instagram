import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {
  closeRemoveModal,
  updateStory,
  updateImgUrl,
} from '../store/story.actions.js';
import { onRemoveStory } from './post-index.jsx';
import { useSelector } from 'react-redux';
import { ImgUploader } from '../cmps/img-uploader.jsx';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  borderRadius: '1%',
};

export function DeletePostModal() {
  const isRemoveModalOpen = useSelector(
    (storeState) => storeState.storyModule.isRemoveModalOpen
  );
  const currentStory = useSelector(
    (storeState) => storeState.storyModule.currentStory
  );
  const updatedImgUrl = useSelector(
    (storeState) => storeState.storyModule.updatedImgUrl
  );
  const [text, setText] = useState(currentStory.txt);

  useEffect(() => {}, [updateImgUrl]);

  function handleChange(e) {
    setText(e.target.value);
    console.log(updatedImgUrl);
  }
  function onUpdateStory() {
    let updatedStory = { ...currentStory, txt: text, postImg: [updatedImgUrl] };
    updateStory(updatedStory);
    closeRemoveModal();
    updateImgUrl(null);
  }

  return (
    <Modal
      open={isRemoveModalOpen}
      onClose={closeRemoveModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='deleteStoryModal'>
          {currentStory.postImg[0] && (
            <div className='blackBG'>
              <img
                src={updatedImgUrl ? updatedImgUrl : currentStory.postImg[0]}
                alt='postImg'
                className='editedImg'
              />
            </div>
          )}
          <div className='right-section'>
            <button
              onClick={() => onRemoveStory(currentStory._id)}
              className='edit-delete-option'
            >
              Remove
            </button>
            <button
              onClick={onUpdateStory}
              className='edit-delete-option'
              disabled={!updatedImgUrl?.length}
            >
              Edit
            </button>
            <button
              onClick={closeRemoveModal}
              className='edit-delete-option'
            >
              Cancel
            </button>
            <ImgUploader changeImage />
            <div className='text-field-container'>
              <TextField
                fullWidth
                label='Edit Text'
                id='fullWidth'
                onChange={(e) => handleChange(e)}
                value={text}
              />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
