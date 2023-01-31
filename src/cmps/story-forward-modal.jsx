import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { closeStoryForwardModal } from '../store/story.actions.js';
import Avatar from '@mui/material/Avatar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heartBlack from '../assets/icons/heart black.svg';
import heartRed from '../assets/icons/heart red.svg';
import smileyBlack from '../assets/icons/smileyBlack.svg';
import { HeartSignContainer } from './heart-sign-container';

const style = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '75%',
  height: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '1%',
};

export function StoryForwardModal({ clickedFromStoryPreview }) {
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
        <div className='story-forward-modal'>
          <div className='blackBG'>
            {currentStory.postImg.length > 1 ? (
              <Slider
                dots={true}
                infinite={false}
              >
                {currentStory.postImg.map((img) => (
                  <img
                    key={img}
                    className='image-slider'
                    src={img}
                    alt='storyImg'
                  />
                ))}
              </Slider>
            ) : (
              <img
                className='image'
                src={currentStory.postImg[0]}
              />
            )}
          </div>
          <div className='right-section'>
            <div className='full-scroll'>
              <div className='header'>
                <div className='avatar-row'>
                  <Avatar
                    sx={{ width: '28px', height: '28px', marginRight: '12px' }}
                    src={
                      clickedFromStoryPreview
                        ? currentStory.by.userImg
                        : user.imgUrl
                    }
                    alt='img'
                  />
                  {clickedFromStoryPreview
                    ? currentStory.by.fullname
                    : user.fullname}
                </div>
                <span className='threeDots'>
                  <i
                    className='fa fa-ellipsis-h'
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
              <Divider />
              <div className='comments-scroll'>
                <div className='second-row'>
                  <Avatar
                    sx={{ width: '28px', height: '28px', marginRight: '18px' }}
                    src={user.imgUrl}
                  />
                  {user.fullname}
                  <span className='description-text'> {currentStory.txt}</span>
                </div>
                <div className='story-comments'>
                  {currentStory.comments.length
                    ? currentStory.comments.map((comment) =>
                        comment?.likedBy?.map((like) => (
                          <div className='comment-row'>
                            <div className='left-comment-section'>
                              <Avatar
                                src={comment.by.imgUrl}
                                alt='img'
                                sx={{
                                  marginRight: '18px',
                                  width: '28px',
                                  height: '28px',
                                }}
                              />
                              <span>{comment.by.fullname}</span>
                              <span className='comment-text'>
                                {comment.txt}
                              </span>
                            </div>
                            <div className='heart-container'>
                              {like._id === user._id ? (
                                <img
                                  src={heartRed}
                                  alt='imgHeartFilled'
                                />
                              ) : (
                                <img
                                  src={heartBlack}
                                  alt='imgHeart'
                                />
                              )}
                            </div>
                          </div>
                        ))
                      )
                    : null}
                </div>
              </div>
            </div>
            <div className='footer'>
              <Divider />
              <div className='crudle-row'>
                <HeartSignContainer story={currentStory} />
              </div>

              <Divider />
              <div className='smiley-row'>
                <div className='left-section-input'>
                  <img
                    src={smileyBlack}
                    alt='smiley'
                  />
                  <input
                    className='add-comment-input'
                    placeholder='Add a comment...'
                    onChange={(e) => handleChange(e)}
                    value={text}
                  />
                </div>
                <button
                  className='post-btn'
                  onClick={onCreateNewPost}
                  disabled={!text.length}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
