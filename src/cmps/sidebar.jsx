import React,{ useState} from 'react'
import { Fragment } from 'react';

import {NavLink} from 'react-router-dom'
import routes from '../routes';
import {CreatePostModal} from '../cmps/create-post-modal.jsx'

export function Sidebar() {
  const [open, setOpen] = useState(false);


  function openCreatePostModal(){
    if(open){
      setOpen(false);
    } else{
      setOpen(true);
  }
}

function handleClose(){
  setOpen(false);
} 

  return (
    <Fragment>
     <CreatePostModal open={open} handleClose={handleClose}/>
      <section className="side-bar" onClick={openCreatePostModal}>
          <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' style={{ width: "130px" }} /></a>
          <nav>
              {routes.map(route => <NavLink className='nav-btn' key={route.path} to={route.path}><span className='nav-icon'>{route.icon}</span><span>{route.label}</span></NavLink>)}
          </nav>
          <a className="side-bar-more"><i className="fa-solid fa-bars"></i><span>More</span></a>
      </section>
   
   </Fragment>
  );
}
