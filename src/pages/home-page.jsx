import React, { Fragment } from 'react';
import { PostIndex } from '../cmps/post-index';
import { Sidebar } from '../cmps/sidebar';
import { Suggestions } from '../cmps/suggestions';

export function HomePage() {
  return (
    <Fragment>
    <div className='flex-container'>
    <Sidebar/>
   
     <div className='post-container'>
      <PostIndex />
      <Suggestions />
      </div>
    </div>
    </Fragment>
  );
}
