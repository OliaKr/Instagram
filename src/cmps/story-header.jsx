import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useState } from 'react';
export function Storyheader() {
  const [name, setName] = useState('michael cat');
  return (
    <div className='story-header'>
      <Stack
        direction='row'
        spacing={2}
      >
        <Avatar
          src='...\assets\img\June.jpg'
          srcSet='...\assets\img\June.jpg'
        />
      </Stack>
      {name}
    </div>
  );
}
