import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PostList } from './post-list.jsx';
import { StoryForwardModal } from './story-forward-modal.jsx';
import {
  loadStories,
  removeStory,
  addStory,
  updateStory,
} from '../store/story.actions.js';
import {
  showSuccessMsg,
  showErrorMsg,
} from '../assets/services.js/event-bus.service.js';
import { DeletePostModal } from './delete_post_modal';

export async function onRemoveStory(storyId) {
  try {
    await removeStory(storyId);
    showSuccessMsg('Story removed');
  } catch (err) {
    showErrorMsg('Cannot remove story');
  }
}

export function PostIndex() {
  const stories = useSelector((storeState) => storeState.storyModule.stories);

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <div className='post-index-container'>
      <DeletePostModal />
      <StoryForwardModal />
      <PostList stories={stories} />
    </div>
  );
}
