import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addLikeOrComment, updateCurrentStory } from '../store/story.actions.js'
import { updateOtherUser, updateUser } from '../store/user.action.js'
import message from '../assets/icons/message black.svg'
import flag from '../assets/icons/flag black.svg'
import heartBlack from '../assets/icons/heart black.svg'
import heartRed from '../assets/icons/heart red.svg'
import plane from '../assets/icons/plane.svg'
import flagBlack from '../assets/icons/flagBlack.svg'
import { openStoryForwardModal } from '../store/story.actions.js'
import { utilService } from '../assets/services.js/util.service.js'

export function HeartSignContainer({ story }) {
  const user = useSelector((storeState) => storeState.userModule.user)
  const users = useSelector((storeState) => storeState.userModule.users)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  async function onAddLike() {
    let updatedStory
    updatedStory = {
      ...story,
      likedBy: [
        ...story.likedBy,
        { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl },
      ],
    }
    setIsLiked(true)
    await addLikeOrComment(updatedStory)
    updateCurrentStory(updatedStory)
    // add like notification
    //add notification to other user
    let newNotification = {
      _id: utilService.makeId(),
      type: `${user.fullname} liked your story!`,
      by: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
      },
    }
    let otherUser = users.find((u) => u._id === story.by._id)
    let addNotificationToUser = {
      ...otherUser,
      notifications: [...otherUser.notifications, newNotification],
      isNewNotifications: true,
    }
    await updateOtherUser(addNotificationToUser)
  }

  function onRemoveLike() {
    let updatedStory
    let likesAfterRemove = story.likedBy.filter(
      (likedStory) => likedStory._id !== user._id
    )
    updatedStory = { ...story, likedBy: likesAfterRemove }
    setIsLiked(false)
    addLikeOrComment(updatedStory)
    updateCurrentStory(updatedStory)
  }

  function onOpenStoryForwardModal() {
    updateCurrentStory(story)
    openStoryForwardModal()
  }

  function OnFavoriteStories() {
    let addToUserFavorite
    if (isSaved) {
      let savedStoriesExceptThis = user?.savedStoryIds.filter(
        (savedStory) => savedStory._id === story._id
      )
      addToUserFavorite = { ...user, savedStoryIds: savedStoriesExceptThis }
      setIsSaved(false)
    } else {
      addToUserFavorite = {
        ...user,
        savedStoryIds: [...user.savedStoryIds, story._id],
      }
      setIsSaved(true)
    }
    updateUser(addToUserFavorite)
  }

  return (
    <div className='heart-sign-container'>
      <div className='iconsOnLeft'>
        {story.likedBy.length &&
        story?.likedBy?.map((like) => like?._id === user?._id) ? (
          <button
            className='heart-icon'
            onClick={onRemoveLike}
          >
            <img
              src={heartRed}
              alt='heartRedIcon'
            />
          </button>
        ) : (
          <button
            className='heart-icon'
            onClick={onAddLike}
          >
            <img
              src={heartBlack}
              alt='heartBlackIcon'
            />
          </button>
        )}
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
        {user?.savedStoryIds?.includes(story._id) ? (
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
  )
}
