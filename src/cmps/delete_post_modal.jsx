import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
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
  width: 690,
  height: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
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

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function onUpdateStory() {
    let updatedStory = { ...currentStory, txt: text, postImg: updatedImgUrl };
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
        <div
          onClick={() => onRemoveStory(currentStory._id)}
          className='modal-header'
          // remove-modal-header
        >
          <span>Delete </span>
        </div>
        <Divider />
        <button
          onClick={onUpdateStory}
          className='modal-header'
          disabled={!updatedImgUrl?.length}
        >
          <span>Edit </span>
        </button>
        <Divider />
        <div
          onClick={closeRemoveModal}
          className='modal-header'
        >
          <span>Cancel </span>
        </div>
        <Divider />
        {!updatedImgUrl?.length && (
          <img
            src={currentStory.postImg[0]}
            alt='postImg'
            className='editedImg'
          />
        )}
        <ImgUploader />
        <TextField
          fullWidth
          label='Edit Text'
          id='fullWidth'
          onChange={(e) => handleChange(e)}
          value={text}
        />
      </Box>
    </Modal>
  );
}
