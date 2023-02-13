import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PostList } from './post-list.jsx'
import { StoryForwardModal } from './story-details-modal.jsx'
import { loadStories } from '../store/story.actions.js'

export function PostIndex() {
  const stories = useSelector((storeState) => storeState.storyModule.stories)

  useEffect(() => {
    loadStories()
  }, [])

  return (
    <div className='post-index-container'>
      <StoryForwardModal />
      <PostList stories={stories} />
    </div>
  )
}
