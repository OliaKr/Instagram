import React from 'react';
import { Postlist } from '../cmps/post-list';
import { Sidebar } from '../cmps/sidebar';
import { Suggestions } from '../cmps/suggestions';

export function HomePage() {
  return (
    <div className='flex-container'>
      <Sidebar />
      <Postlist />
      <Suggestions   />
   
    </div>
  );
}
