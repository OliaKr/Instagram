import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { UserMessage } from '../cmps/user-message'
import pen from '../assets/icons/pen.svg'
import roomIcon from '../assets/icons/roomIcon.svg'
import phone from '../assets/icons/phone.svg'
import video from '../assets/icons/video.svg'
import info from '../assets/icons/info.svg'
import { Avatar } from '@mui/material'
import { ChatRoomFooter } from '../cmps/chat-room-footer'
import io from 'socket.io-client'
import { Chat } from '../cmps/chat'

function Messages() {
  const socket = io.connect('http://localhost:4000')
  const user = useSelector((storeState) => storeState.userModule.user)
  const [userToMsg, setUserToMsg] = useState(null)

  const [room, setRoom] = useState('')

  const u = {
    fullname: 'Dov Roz',
    imgUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
    timestamp: '3d',
    msg: 'hiush!!!!!!!',
  }
  const joinRoom = () => {
    if (user !== '' && room !== '') {
      socket.emit('join_room', room)
    }
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
            <UserMessage
              u={u}
              setUserToMsg={setUserToMsg}
              joinRoom={joinRoom}
            />
          </div>
        </div>

        <div className='messages-room'>
          {userToMsg ? (
            <div className='chat-open'>
              <div className='chat-open-header'>
                <div className='chat-open-header-content'>
                  <div className='chat-open-header-l'>
                    <Avatar
                      sx={{
                        width: '24px',
                        height: '24px',
                      }}
                      src={userToMsg?.imgUrl}
                      alt='user'
                    />

                    {userToMsg.fullname}
                  </div>
                  <div className='chat-open-header-r'>
                    <img
                      src={phone}
                      alt='phoneIcon'
                    />
                    <img
                      src={video}
                      alt='videoIcon'
                    />
                    <img
                      src={info}
                      alt='infoIcon'
                    />
                  </div>
                </div>
              </div>
              <div className='chat-body'>
                <Chat
                  socket={socket}
                  room={room}
                />
              </div>
              <div className='chat-footer'>
                <ChatRoomFooter />
              </div>
            </div>
          ) : (
            <div className='chat-closed'>
              <img
                src={roomIcon}
                alt='messagesIcon'
              />

              <span>Your Messages</span>
              <span>
                Send private photos and messages to a friend or group.
              </span>
              <button>Send message</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messages
