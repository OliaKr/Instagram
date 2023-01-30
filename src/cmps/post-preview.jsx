import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Storyheader } from './story-header';
import { HeartSignContainer } from './heart-sign-container';
import { addLikeOrComment } from '../store/story.actions.js';
import { utilService } from '../assets/services.js/util.service.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function PostPreview({ story }) {
  const [text, setText] = useState('');
  const user = useSelector((storeState) => storeState.userModule.user);

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function addNewComment() {
    let updatedStory;

    updatedStory = {
      ...story,
      comments: [
        ...story.comments,
        {
          id: utilService.makeId(),
          by: {
            _id: user._id,
            fullname: user.fullname,
            imgUrl: user.imgUrl,
          },
          txt: text,
          likedBy: [],
        },
      ],
    };
    addLikeOrComment(updatedStory);
    setText('');
  }
  const lastTwoComments = story.comments.slice(
    Math.max(story.comments.length - 2, 0)
  );
  return (
    <div>
      <div className='story-container'>
        <Storyheader story={story} />
        <div className='img-container'>
          {story.postImg.length > 1 ? (
            <Slider
              dots={true}
              infinite={false}
            >
              {story.postImg.map((img) => (
                <img
                  key={img}
                  className='story-img'
                  src={img}
                  alt='storyImg'
                />
              ))}
            </Slider>
          ) : (
            <img src={story.postImg[0]} />
          )}
        </div>

        <HeartSignContainer story={story} />
        <div className='preview-details'>
          <div className='likesContainer'>
            <h4>{story.likedBy.length} likes</h4>
          </div>
          <div className='storytitle'>
            <strong>{story.by.fullname}</strong> {story.txt}
          </div>
          <h6 className='viewComments'>view comments...</h6>
          <div className='comments'>
            {lastTwoComments.map((comment) => (
              <span
                className='comment'
                key={comment.id}
              >
                <strong>{comment.by.fullname}</strong> {comment.txt}
              </span>
            ))}
          </div>
          <div className='input-area'>
            <input
              className='input-field'
              placeholder='Add a comment...'
              type={'text'}
              size={'55'}
              onChange={(e) => handleChange(e)}
              value={text}
            />
            {text.length ? <button onClick={addNewComment}>Post</button> : null}
            <button>
              <div className='emoji'></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
