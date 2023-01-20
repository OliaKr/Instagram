import React from 'react'
import {PostPreview} from '../cmps/post-preview.jsx'

export function PostList({stories}){
  return (
    <div>
        {stories.map((story) => (
            <PostPreview story={story} key={story._id} />
        ))}
    </div>
  )
}
