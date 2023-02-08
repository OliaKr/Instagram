import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PostPreview } from './post-preview.jsx'

export function PostList({ stories }) {
  const users = useSelector((storeState) => storeState.userModule.users)
  const user = useSelector((storeState) => storeState.userModule.user)
  const [currentUser, setCurrentUser] = useState(user)

  useEffect(() => {
    setCurrentUser(users.find((u) => u._id === user._id))
  }, [users, user])

  return (
    <div>
      {stories.map((story) =>
        currentUser?.following?.map((followedUser) =>
          followedUser?._id === story?.by?._id ? (
            <PostPreview
              story={story}
              key={story._id}
            />
          ) : null
        )
      )}
    </div>
  )
}
