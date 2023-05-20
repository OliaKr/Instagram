import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import chatroomPic from '../assets/icons/chatroomPic.svg'
import heartBlack from '../assets/icons/heart black.svg'

export function ChatRoomFooter() {
  const [text, setText] = useState('')
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  function handleChange(e) {
    setText(e.target.value)
  }

  function openEmojiPicker() {
    setShowEmojiPicker(!showEmojiPicker)
  }

  function onEmojiClick(event, emojiObject) {
    setChosenEmoji(emojiObject)
    setShowEmojiPicker(false)
    setText((prev) => prev + event.emoji)
  }

  function onSendLike() {}

  return (
    <div className='footer-input'>
      <div className='footer-input-area'>
        <div className='footer-input-area-section'>
          <button>
            <div
              className='footer-emoji'
              onClick={openEmojiPicker}
            ></div>
          </button>
          <input
            className='input-field'
            placeholder='Message...'
            type={'text'}
            size={'55'}
            onChange={(e) => handleChange(e)}
            value={text}
          />
        </div>
        <div className='footer-input-area-section'>
          <img
            src={chatroomPic}
            alt='chatroomPic'
          />
          <button
            className='heart-icon'
            onClick={onSendLike}
          >
            <img
              src={heartBlack}
              alt='heartBlackIcon'
            />
          </button>
        </div>
      </div>
      {showEmojiPicker ? (
        <div
          style={{ position: 'absolute', bottom: '40px', marginLeft: '80px' }}
        >
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            native
          />
        </div>
      ) : null}
    </div>
  )
}
