import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Divider from '@mui/material/Divider'
import vi from '../assets/img/vi.png'
import Avatar from '@mui/material/Avatar'
import { gUsers } from '../assets/services.js/user-service.js'
import {switchUser , closeSwitchUsersModal} from '../store/user.action.js'
import close from '../assets/img/close.png'

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 690,
  height: 728,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '1%',
  // border: '2px solid red'
};

export function SwitchAcoountsModal() {
  const isSwitchModalOpen = useSelector(
    (storeState) => storeState.userModule.isSwitchModalOpen
    );
    const user = useSelector(
      (storeState) => storeState.userModule.user
    );

  function onLogin(userLine) {
    console.log(`The user ${userLine.fullname} is logged in`)
    switchUser(userLine)

    
  }

  return (
    <Modal
      open={isSwitchModalOpen}
      onClose={closeSwitchUsersModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <div className='modal-header'>
          <span>Switch accounts </span>
          <img src={close} alt="close" onClick={closeSwitchUsersModal}/>
        </div>
        <Divider />
        {gUsers.map((userLine) => (
          <div className='registered-user' key={userLine._id} onClick={() => onLogin(userLine)}>
            <div className='left-section'>
              <Avatar
                alt={userLine.fullname}
                sx={{ width: 24, height: 24 }}
                src={userLine.imgUrl}
              />
              <span>{userLine.fullname}</span>
            </div>
            {user && user._id === userLine._id ? (
               <img
              src={vi}
              width='30'
              height='30'
              alt='newPostImg'
            ></img>) : null }
          </div>
        ))}
      </Box>
    </Modal>
  );
}
