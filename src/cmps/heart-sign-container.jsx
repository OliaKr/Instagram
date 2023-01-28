import React, {useEffect,useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useSelector } from 'react-redux';
import { addLikeOrComment } from '../store/story.actions.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { utilService } from '../assets/services.js/util.service.js';

export function HeartSignContainer({ story }) {
  const user = useSelector((storeState) => storeState.userModule.user);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    isUserLikedStory()
  },[story, isLiked])



  function onAddLike() {
    let updatedStory 
    if(isLiked){
      let likesAfterRemove = 
      story.likedBy.filter((likedStory) => likedStory._id !== user._id)
      updatedStory = {...story, likedBy: likesAfterRemove}
    } else {
      updatedStory = { ...story, 
    likedBy: [...story.likedBy, {_id: user._id,fullname: user.fullname, imgUrl: user.imgUrl} ]}
  }
  addLikeOrComment(updatedStory);
   }

  function isUserLikedStory(){
    story.likedBy.map((likedStory) =>
      user._id === likedStory._id ? setIsLiked(true) : setIsLiked(false)
     )}
  

  return (
    <div className='heart-sign-container'>
      <div>
        <button
          className='heart-icon'
          onClick={onAddLike}>
          {isLiked ? (<FavoriteIcon sx={{ width: 30, height: 30, color: 'red' }}/>
      ) : (
                     <FavoriteBorderIcon sx={{ width: 30, height: 30 }}/>
          )}
        </button>
        <button
          className='comment'
          sx={{ width: 30, height: 30 }}
        >
          <ChatBubbleOutlineIcon />
        </button>
      </div>

      <button
        className='flag'
        sx={{ width: 30, height: 30 }}
      >
        <BookmarkBorderIcon />
      </button>
    </div>
  );
}
