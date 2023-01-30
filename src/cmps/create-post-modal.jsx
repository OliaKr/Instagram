import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import createpic from '../assets/img/createpic.png';
import { ImgUploader } from './img-uploader.jsx';
import {
  closeCreateModal,
  addStory,
  updateImgUrl,
} from '../store/story.actions.js';
import { newStory } from '../assets/services.js/story-service.js';
import Avatar from '@mui/material/Avatar';
import Smiley from '../assets/icons/smiley.svg';
import mapIcon from '../assets/icons/map icon.svg';
import arrowDown from '../assets/icons/arrow down.svg';

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
  borderRadius: '1%',
  padding: '0px !important',
};

export function CreatePostModal() {
  const isCreateModalOpen = useSelector(
    (storeState) => storeState.storyModule.isCreateModalOpen
  );
  const updatedImgUrl = useSelector(
    (storeState) => storeState.storyModule.updatedImgUrl
  );
  const user = useSelector((storeState) => storeState.userModule.user);
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function onCreateNewPost() {
    if (updatedImgUrl) {
      let story = {
        ...newStory,
        postImg: [updatedImgUrl],
        txt: text,
        by: {
          _id: user._id,
          fullname: user.fullname,
          userImg: user.imgUrl,
        },
      };
      addStory(story);
      closeCreateModal();
      updateImgUrl(null);
    }
    setText('');
  }

  return (
    <Modal
      open={isCreateModalOpen}
      onClose={closeCreateModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='modal-header'>
          <div className='create-modal-title'>Create new post </div>
          {updatedImgUrl?.length ? (
            <div onClick={onCreateNewPost}>
              <div className='share-btn'>Share</div>
            </div>
          ) : null}
        </div>
        <Divider />
        {updatedImgUrl?.length ? (
          <div className='modalContent'>
            <div className='imageContainer'>
              <img
                src={updatedImgUrl}
                alt='newImg'
                className='newImg'
              />
            </div>
            <div className='detailsContainer'>
              <div className='avatar-row'>
                <Avatar
                  sx={{ width: '28px', height: '28px', marginRight: '12px' }}
                  src={user.imgUrl}
                />
                {user.fullname}
              </div>
              <input
                className='caption area'
                placeholder='Write a caption...'
                onChange={(e) => handleChange(e)}
                value={text}
              />
              <div className='smiley-row'>
                <img
                  src={Smiley}
                  alt='smiley'
                />
                <span>{text.length}/2200</span>
              </div>
              <Divider />
              <div className='row-space-between'>
                <span>Add location</span>
                <img
                  src={mapIcon}
                  alt='arrowIcon'
                />
              </div>
              <Divider />
              <div className='row-space-between'>
                <span>Accessibility</span>
                <img
                  src={arrowDown}
                  alt='lost'
                  className='arrowDownImg'
                />
              </div>
              <Divider />
              <div className='row-space-between'>
                <span>Advanced settings</span>
                <img
                  src={arrowDown}
                  alt='arrowIcon'
                  className='arrowDownImg'
                />
              </div>
              <Divider />
            </div>
          </div>
        ) : (
          <div className='img-create-container'>
            <img
              src={createpic}
              width='100'
              height='100'
              alt='newPostImg'
            />
            <ImgUploader />
          </div>
        )}
      </Box>
    </Modal>
  );
}
