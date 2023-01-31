import React from 'react';
import { useSelector } from 'react-redux';
import { PostPreview } from './post-preview.jsx';

export function PostList({ stories }) {
  const user = useSelector((storeState) => storeState.userModule.user);

  return (
    <div>
      {stories.map((story) =>
        user.following.map(
          (followedUser) =>
            followedUser._id === story.by._id && (
              <PostPreview
                story={story}
                key={story._id}
              />
            )
        )
      )}
    </div>
  );
}
