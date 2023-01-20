import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
export function Storyheader({story}) {
  const [name, setName] = useState(story.by.fullname);
  return (
    <div className='story-header'>
      <Stack
        direction='row'
        spacing={2}
      >
        <Avatar
          src={story.by.userImg}
        />
      </Stack>
      <span className='userName'>{name}</span>
    </div>
  );
}
