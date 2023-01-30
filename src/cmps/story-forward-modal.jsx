import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import createpic from '../assets/img/createpic.png';
import { ImgUploader } from './img-uploader.jsx';
import { closeStoryForwardModal } from '../store/story.actions.js';
import { newStory } from '../assets/services.js/story-service.js';
import Avatar from '@mui/material/Avatar';
import Smiley from '../assets/icons/smiley.svg';
import mapIcon from '../assets/icons/map icon.svg';
import arrowDown from '../assets/icons/arrow down.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const style = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 690,
  height: 728,
  maxWidth: 690,
  maxheight: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '1%',
  padding: '0px !important',
};

export function StoryForwardModal() {
  const isStoryForwardModalOpen = useSelector(
    (storeState) => storeState.storyModule.isStoryForwardModalOpen
  );
  const user = useSelector((storeState) => storeState.userModule.user);
  const [text, setText] = useState('');

  const currentStory = useSelector(
    (storeState) => storeState.storyModule.currentStory
  );

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function onCreateNewPost() {
    // if (updatedImgUrl) {
    //   let story = {
    //     ...newStory,
    //     postImg: [updatedImgUrl],
    //     txt: text,
    //     by: {
    //       _id: user._id,
    //       fullname: user.fullname,
    //       userImg: user.imgUrl,
    //     },
    //   };
    //   addStory(story);
    //   closeCreateModal();
    //   updateImgUrl(null);
    // }
    // setText('');
  }

  return (
    <Modal
      open={isStoryForwardModalOpen}
      onClose={closeStoryForwardModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='modalContent'>
          <div className='imageContainer'>
            {currentStory.postImg.length > 1 ? (
              <Slider
                dots={true}
                infinite={false}
              >
                {currentStory.postImg.map((img) => (
                  <img
                    key={img}
                    className='story-img'
                    src={img}
                    alt='storyImg'
                  />
                ))}
              </Slider>
            ) : (
              <img
                style={{
                  maxHeight: '700px',
                  maxWidth: '414px',
                  minHeight: '700px',
                }}
                src={currentStory.postImg[0]}
              />
            )}
          </div>
          <div className='detailsContainer'>
            <div className='modal-header'>
              <div className='avatar-row'>
                <Avatar
                  sx={{ width: '28px', height: '28px', marginRight: '12px' }}
                  src={user.imgUrl}
                />
                {user.fullname}
                <span className='threeDots'>
                  <i
                    className='fa fa-ellipsis-h'
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
            </div>
            <Divider />
            <div className='avatar-row'>
              <Avatar
                sx={{ width: '28px', height: '28px', marginRight: '12px' }}
                src={user.imgUrl}
              />
              {user.fullname}
            </div>
            <div className='smiley-row'>
              <img
                src={Smiley}
                alt='smiley'
              />
            </div>
            <input
              className='caption area'
              placeholder='Write a caption...'
              onChange={(e) => handleChange(e)}
              value={text}
            />
            <Divider />
          </div>
        </div>
      </Box>
    </Modal>
  );
}
