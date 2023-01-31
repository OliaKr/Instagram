import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  addLikeOrComment,
  updateCurrentStory,
} from '../store/story.actions.js';
import { updateUser } from '../store/user.action.js';
import message from '../assets/icons/message black.svg';
import flag from '../assets/icons/flag black.svg';
import heartBlack from '../assets/icons/heart black.svg';
import heartRed from '../assets/icons/heart red.svg';
import plane from '../assets/icons/plane.svg';
import flagBlack from '../assets/icons/flagBlack.svg';
import { openStoryForwardModal } from '../store/story.actions.js';

export function HeartSignContainer({ story }) {
  const user = useSelector((storeState) => storeState.userModule.user);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    isUserLikedStory();
  }, [story, isLiked]);

  function onAddLike() {
    let updatedStory;
    if (isLiked) {
      let likesAfterRemove = story.likedBy.filter(
        (likedStory) => likedStory._id !== user._id
      );
      updatedStory = { ...story, likedBy: likesAfterRemove };
    } else {
      updatedStory = {
        ...story,
        likedBy: [
          ...story.likedBy,
          { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl },
        ],
      };
    }
    addLikeOrComment(updatedStory);
  }

  function isUserLikedStory() {
    story.likedBy.map((likedStory) =>
      user._id === likedStory._id ? setIsLiked(true) : setIsLiked(false)
    );
  }

  function onOpenStoryForwardModal() {
    updateCurrentStory(story);
    openStoryForwardModal();
  }

  function OnFavoriteStories() {
    let addToUserFavorite;
    if (isSaved) {
      let savedStoriesExceptThis = user.savedStoryIds.filter(
        (savedStory) => savedStory._id === story._id
      );
      addToUserFavorite = { ...user, savedStoryIds: savedStoriesExceptThis };
      setIsSaved(false);
    } else {
      addToUserFavorite = {
        ...user,
        savedStoryIds: [...user.savedStoryIds, story._id],
      };
      setIsSaved(true);
    }

    updateUser(addToUserFavorite);
  }

  return (
    <div className='heart-sign-container'>
      <div className='iconsOnLeft'>
        <button
          className='heart-icon'
          onClick={onAddLike}
        >
          {isLiked ? (
            <img
              src={heartRed}
              alt='heartRedIcon'
            />
          ) : (
            <img
              src={heartBlack}
              alt='heartBlackIcon'
            />
          )}
        </button>
        <button
          className='commentIcon'
          onClick={onOpenStoryForwardModal}
        >
          <img
            src={message}
            alt='messageIcon'
          />
        </button>
        <button className='planeIcon'>
          <img
            src={plane}
            alt='planeIcon'
          />
        </button>
      </div>
      <button
        className='flagIcon'
        onClick={OnFavoriteStories}
      >
        {user.savedStoryIds.includes(story._id) ? (
          <img
            src={flagBlack}
            alt='flagIcon'
          />
        ) : (
          <img
            src={flag}
            alt='flagIcon'
          />
        )}
      </button>
    </div>
  );
}
