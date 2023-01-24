import React,{ useState} from 'react'
import { Fragment } from 'react';
import {NavLink} from 'react-router-dom'
import routes from '../routes';
import {CreatePostModal} from '../cmps/create-post-modal.jsx'
import { openCreateModal } from '../store/story.actions';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';

export function Sidebar() {
  const user = useSelector(
    (storeState) => storeState.userModule.user
  );

  function conditionPath(route){
    switch (route.path){
     case '/create':
      openCreateModal()
      break;
     default:
    }
  }

  return (
    <Fragment>
     <CreatePostModal />
      <section className="side-bar" >
          <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' style={{ width: "100px", marginLeft: "12px" }} /></a>
          <nav>
              {routes.map(route => 
                 <NavLink 
                   onClick={()=>conditionPath(route)} 
                   className='nav-btn' key={route.path} 
                   to={route.path}><span className='nav-icon'>{
                   user && route.label === 'Profile' ? <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24}} src={user.imgUrl } />
                   : route.icon
                   }</span><span>{route.label}</span>
                 </NavLink>)}
          </nav>
          <a className="side-bar-more"><i className="fa-solid fa-bars"></i><span>More</span></a>
      </section>
   </Fragment>
  );
}
