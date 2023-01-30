import React, { useState, useEffect } from 'react';
import { DisabledByDefault } from '@mui/icons-material';
// import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar';
import { withStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useSelector } from 'react-redux';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import cubeBlack from '../assets/icons/cube black.svg';
import settings from '../assets/icons/settings.svg';
import userGray from '../assets/icons/user gray.svg';
import flagGray from '../assets/icons/flag gray.svg';

const tabStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '58px',
  marginRight: '60px !important',
  color: 'black !important',
  alignItems: 'center',
};

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
));

export function Profile() {
  const [value, setValue] = useState(0);

  const user = useSelector((storeState) => storeState.userModule.user);
  const stories = useSelector((storeState) => storeState.storyModule.stories);

  const [mode, setMode] = useState('STORIES');

  const [numOfStories, setNumOfStories] = useState(0);

  let defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg';

  useEffect(() => {
    let num = 0;
    stories.map((story) => {
      if (story.by._id === user._id) {
        num++;
      }
    });
    setNumOfStories(num);
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className='profile-container'>
      <div className='top-section'>
        <div className='avatar-container'>
          <Avatar
            alt='Remy Sharp'
            sx={{ width: '150px', height: '150px' }}
            src={user ? user.imgUrl : defaultImg}
          />
        </div>
        <div className='three-columns-details'>
          <div className='first'>
            <span>{user ? user.username : 'username'}</span>
            <button className='edit-btn'>Edit profile</button>
            <button className='settings-btn'>
              <img
                src={settings}
                alt='settingsIcon'
              />
            </button>
          </div>
          <div className='second'>
            <span>{numOfStories} posts</span>
            <span>{user.followers.length} followers</span>
            <span>{user.following.length} following</span>
          </div>
          <div className='third'>
            <div style={{ fontWeight: 700 }}>{user.fullname}</div>
            <div>{user.bio}</div>
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
                user._id === story.by._id && (
                  <img
                    key={story._id}
                    className='singleImg'
                    alt='img'
                    src={story.postImg[0]}
                  />
                )
            )
          : user.savedStoryIds.map((savedStory) =>
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
  );
}
