import React from 'react'
import Avatar from '@mui/material/Avatar'

export function UserMessage({ u, setUserToMsg }) {
  return (
    <div
      className='user-message'
      onClick={() => setUserToMsg(u)}
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
