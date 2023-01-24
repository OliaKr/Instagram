import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import vi from '../assets/img/vi.png';
import Avatar from '@mui/material/Avatar';
import { gUsers } from '../assets/services.js/user-service.js';
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

  function onLogin(user) {
    console.log(`The user ${user.fullname} is logged in`);
    switchUser(user)

    
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
        {gUsers.map((user) => (
          <div className='registered-user' key={user._id} onClick={() => onLogin(user)}>
            <div className='left-section'>
              <Avatar
                alt={user.fullname}
                sx={{ width: 24, height: 24 }}
                src={user.imgUrl}
              />
              <span>{user.fullname}</span>
            </div>
            <img
              src={vi}
              width='30'
              height='30'
              alt='newPostImg'
            ></img>
          </div>
        ))}
      </Box>
    </Modal>
  );
}
