import React from 'react'
import Avatar from '@mui/material/Avatar'

export function UserMessage({ u }) {
  const onOpenMessage = () => {}
  console.log('u', u)
  return (
    <div
      className='user-message'
      onClick={() => onOpenMessage()}
    >
      <Avatar
        sx={{
          width: '56px',
          height: '56px',
        }}
        src={u?.imgUrl}
        alt='user'
      />
      <div className='details-user'>
        <div>{u?.fullname}</div>
        <span>{u?.msg}</span>
        <span> • {u?.timestamp}</span>
      </div>
    </div>
  )
}
