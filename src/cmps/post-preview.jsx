import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Storyheader } from './story-header';
import { HeartSignContainer } from './heart-sign-container';
import {addLikeOrComment} from '../store/story.actions.js'
import { utilService } from '../assets/services.js/util.service.js';







export function PostPreview({ story }) {
  
  const [text, setText] = useState('')
  const user = useSelector((storeState) => storeState.userModule.user);

  function handleChange(e) {
    setText(e.target.value)
    console.log(text)
  }

  function addNewComment() {
    let updatedStory
    
    updatedStory = { ...story, 
      comments: [...story. comments, {
        id: utilService.makeId(),
        by: {
          _id: user._id,
          fullname: user.fullname,
          imgUrl: user.imgUrl,
        },
        txt: text,
        likedBy: [],
      } ]}
      addLikeOrComment(updatedStory);
      setText('');
  }
const lastTwoComments = story.comments.slice(Math.max(story.comments.length - 2, 0))
  return (
    <div>
      <div className='story-container'>
        <Storyheader story={story} />
        <div className='img-container'>
          <img src={story.postImg} />
        </div>

        <HeartSignContainer story={story} />
        <div className='comments'>
          <h4>{story.likedBy.length} likes</h4>

          <h4>
            {story.by.fullname} {story.txt}
          </h4>
          <h6>view comments...</h6>
          {lastTwoComments.map((comment) => (
            <span key={comment.id}>{comment.by.fullname} {comment.txt}</span>
          ))}
        </div>
        <div className='input-area'>
          <input
            placeholder='Add a comment...'
            type={'text'}
            size={'55'}
            onChange={(e) => handleChange(e)}
            value={text}
          />
          {text.length ? (
            <button onClick={addNewComment}>Post</button>
          ): null }
          <button>
            <div className='emoji'></div>
          </button>
        </div>
      </div>
    </div>
  );
}
