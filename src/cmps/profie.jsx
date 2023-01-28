import React, { useState } from 'react'
import { DisabledByDefault } from '@mui/icons-material'
import SettingsIcon from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'
import { withStyles } from '@mui/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AppsIcon from '@mui/icons-material/Apps'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { useSelector } from 'react-redux'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

const tabStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '58px',
  marginRight: '60px !important',
  color: 'black !important',
  
  
 
  
};

const StyledTabs = withStyles({
  indicator: {
    top: 0,
    backgroundColor: 'gray !important',
    height: '1px',
    fontFamily: '-apple-system, BlinkMacSystemFont,Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize:'14px'
   
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

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const user = useSelector((storeState) => storeState.userModule.user)
  const stories = useSelector((storeState) => storeState.storyModule.stories);
  let defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg'

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
            <button className='settings-btn'><SettingsIcon /></button>
          </div>
          <div className='second'>
            <span>135 posts</span>
            <span>633 followers</span>
            <span>404 following</span>
          </div>
          <div className='third'>
            <span>Olia Kralinikov</span>
            <span>Here're only precious moments🙂</span>
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
            sx={tabStyle}
            icon={<AppsIcon />}
            label='POSTS'
          />
          <Tab
            sx={tabStyle}
            icon={<BookmarkBorderIcon />}
            label='SAVED'
          />
          <Tab
            sx={tabStyle}
            icon={<AccountBoxIcon />}
            label='TAGGED'
          />
        </StyledTabs>
      </div>

      <div className='grid-images'>
        {stories.map((story) => (
          user._id === story.by._id && (
            <img
              key={story._id}
              className='singleImg'
              alt='img'
              src={story.postImg}
            />
        )))}
      </div>
    </div>
  );
}
