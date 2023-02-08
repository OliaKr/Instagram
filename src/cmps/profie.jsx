import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import { withStyles } from '@mui/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {
  updateCurrentStory,
  openStoryForwardModal,
} from '../store/story.actions.js'
import { StoryForwardModal } from '../cmps/story-details-modal'
import { useSelector } from 'react-redux'

import heartWhite from '../assets/icons/heartWhite.svg'
import messageWhite from '../assets/icons/messageWhite.svg'
import cubeBlack from '../assets/icons/cube black.svg'
import settings from '../assets/icons/settings.svg'
import userGray from '../assets/icons/user gray.svg'
import flagGray from '../assets/icons/flag gray.svg'
import { useLocation } from 'react-router-dom'
import { updateOtherUser, updateUser } from '../store/user.action.js'
import { utilService } from '../assets/services.js/util.service.js'

const tabStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '58px',
  marginRight: '60px !important',
  color: 'black !important',
  alignItems: 'center',
  '@media (max-width: 500px)': {
    marginRight: '8px !important',
  },
}

const StyledTabs = withStyles({
  indicator: {
    top: 0,
    backgroundColor: 'gray !important',
    height: '1px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont,Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: '14px',
  },
})((props) => (
  <Tabs
    {...props}
    inkbarstyle={{ background: 'black' }}
    TabIndicatorProps={{ children: <span /> }}
  />
))

export function Profile() {
  const [value, setValue] = useState(0)

  const user = useSelector((storeState) => storeState.userModule.user)
  const stories = useSelector((storeState) => storeState.storyModule.stories)
  const otherUser = useLocation()?.state?.otherUser
  const [mode, setMode] = useState('STORIES')
  const [userProfile, setProfile] = useState(otherUser ? otherUser : user)
  const [numOfStories, setNumOfStories] = useState(0)

  let defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg'

  useEffect(() => {
    let num = 0
    stories.map((story) => {
      if (story.by._id === userProfile._id) {
        num++
      }
    })
    setNumOfStories(num)
  }, [])

  useEffect(() => {
    setProfile(userProfile)
  }, [userProfile])

  function openMyStory(story) {
    updateCurrentStory(story)
    openStoryForwardModal()
  }

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  async function addFollow() {
    let updatedUser = {
      ...user,
      following: [
        ...user.following,
        {
          _id: userProfile._id,
          fullname: userProfile.fullname,
          imgUrl: userProfile.imgUrl,
        },
      ],
    }
    await updateUser(updatedUser)

    let addFollowerToOtherUser = {
      ...userProfile,
      followers: [
        ...userProfile.followers,
        {
          _id: user._id,
          fullname: user.fullname,
          imgUrl: user.imgUrl,
        },
      ],
    }
    await updateOtherUser(addFollowerToOtherUser)
    //add notification to other user -
    let newNotification = {
      _id: utilService.makeId(),
      type: `${user.fullname} started follow you!`,
      by: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
      },
    }
    let addNotificationToUser = {
      ...otherUser,
      notifications: [...otherUser.notifications, newNotification],
      isNewNotifications: true,
    }
    await updateOtherUser(addNotificationToUser)
  }

  async function unFollow() {
    let updatedUser
    let updatedFollowing = user.following.filter(
      (u) => u._id !== userProfile._id
    )
    updatedUser = { ...user, following: updatedFollowing }
    await updateUser(updatedUser)
    // remove from other user a follower
    let removeFollowerFromUser = userProfile.followers.filter(
      (u) => u._id !== user._id
    )
    updatedUser = { ...userProfile, followers: removeFollowerFromUser }
    await updateOtherUser(updatedUser)
    //remove follower to other user notification
    let newNotification = {
      _id: utilService.makeId(),
      type: `${user.fullname} stop follow you!`,
      by: {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
      },
    }
    let addNotificationToUser = {
      ...otherUser,
      notifications: [...otherUser.notifications, newNotification],
      isNewNotifications: true,
    }
    await updateOtherUser(addNotificationToUser)
  }

  function renderRelevantBtn() {
    if (!otherUser) {
      return <button className='edit-btn'>Edit profile</button>
    } else {
      if (user.following.some((u) => u._id === userProfile._id)) {
        return (
          <button
            className='edit-btn'
            onClick={unFollow}
          >
            Following
          </button>
        )
      } else {
        return (
          <button
            className='follow-user-btn'
            onClick={addFollow}
          >
            Follow
          </button>
        )
      }
    }
  }

  return (
    <div className='profile-container'>
      <StoryForwardModal />

      <div className='top-section'>
        <div className='avatar-container'>
          <Avatar
            alt='Remy Sharp'
            sx={{ width: '150px', height: '150px', alignSelf: 'center' }}
            src={userProfile ? userProfile.imgUrl : defaultImg}
          />
        </div>
        <div className='three-columns-details'>
          <div className='first'>
            <span>{userProfile?.username}</span>
            {renderRelevantBtn()}
            <button className='settings-btn'>
              <img
                src={settings}
                alt='settingsIcon'
              />
            </button>
          </div>
          <div className='second'>
            <span>{numOfStories} posts</span>
            <span>{userProfile?.followers?.length} followers</span>
            <span>{userProfile?.following?.length} following</span>
          </div>
          <div className='third'>
            <div style={{ fontWeight: 700 }}>{userProfile?.fullname}</div>
            <div>{userProfile?.bio}</div>
          </div>
        </div>
      </div>
      <div className='profile-display-options'>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label='styled tabs example'
        >
          <Tab
            onClick={() => setMode('STORIES')}
            sx={tabStyle}
            icon={
              <img
                src={cubeBlack}
                alt='cubeIcon'
                className='iconImg'
              />
            }
            label={<span className='selectedTabLabel'>POSTS</span>}
          />
          <Tab
            onClick={() => setMode('SAVED')}
            sx={tabStyle}
            icon={
              <img
                src={flagGray}
                alt='flagIcon'
                className='iconImg'
              />
            }
            label={<span className='unselectedTabLabel'>SAVED</span>}
          />
          <Tab
            sx={tabStyle}
            icon={
              <img
                src={userGray}
                alt='flagIcon'
                className='iconImg'
              />
            }
            label={<span className='unselectedTabLabel'>TAGGED</span>}
          />
        </StyledTabs>
      </div>
      <div className='grid-images'>
        {mode === 'STORIES'
          ? stories.map(
              (story) =>
                userProfile?._id === story.by._id && (
                  <div
                    key={story._id}
                    className='hover-div'
                    onClick={() => openMyStory(story)}
                  >
                    <div className='backdrop'>
                      <div className='row'>
                        <img
                          src={heartWhite}
                          alt=''
                        />
                        <h2 className='count-txt'>{story.likedBy.length}</h2>
                      </div>
                      <div className='row'>
                        <img
                          src={messageWhite}
                          alt=''
                        />
                        <h2 className='count-txt'>{story.comments.length}</h2>
                      </div>
                    </div>
                    <img
                      key={story._id}
                      className='singleImg'
                      alt='img'
                      src={story.postImg[0]}
                    />
                  </div>
                )
            )
          : userProfile.savedStoryIds.map((savedStory) =>
              stories.map(
                (story) =>
                  savedStory === story._id && (
                    <img
                      key={story._id}
                      className='singleImg'
                      alt='img'
                      src={story.postImg[0]}
                    />
                  )
              )
            )}
      </div>
    </div>
  )
}
