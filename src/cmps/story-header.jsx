import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { openRemoveModal, updateCurrentStory } from '../store/story.actions.js';

export function Storyheader({ story }) {
  const [name, setName] = useState(story.by.fullname);

  function editPost() {
    updateCurrentStory(story);

    openRemoveModal();
  }

  return (
    <div className='story-header'>
      <div className='avatar-section'>
        <Stack
          direction='row'
          spacing={2}
        >
          <Avatar src={story.by.userImg} />
        </Stack>
        <span className='userName'>{name.toLowerCase()}</span>
      </div>
      <span className='threeDots'>
        <i
          onClick={editPost}
          className='fa fa-ellipsis-h'
          aria-hidden='true'
        ></i>
      </span>
    </div>
  );
}
