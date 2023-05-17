import React from 'react'
import { useSelector } from 'react-redux'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import pen from '../assets/icons/pen.svg'
import { UserMessage } from '../cmps/user-message'

function Messages() {
  const user = useSelector((storeState) => storeState.userModule.user)

  const u = {
    fullname: 'Dov Roz',
    imgUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
    timestamp: '3d',
    msg: 'hiush!!!!!!!',
  }
  const onMessagesSearchModal = () => {}
  return (
    <div className='messages-container'>
      <div className='messages-content'>
        <div className='messages-list'>
          <div className='messages-header'>
            <div className='messages-header-left'>
              <span>{user?.username}</span>
              <span onClick={onMessagesSearchModal}>
                <KeyboardArrowDownIcon fontSize='large' />
              </span>
            </div>
            <div className='messages-header-right'>
              <img
                src={pen}
                alt='penIcon'
              />
            </div>
          </div>
          <div className='messages-title'>
            <span>Messages</span>
            <span>2 requests</span>
          </div>
          <div className='messages'>
            <UserMessage u={u} />
          </div>
        </div>

        <div className='messages-room'>Message-room</div>
      </div>
    </div>
  )
}

export default Messages
