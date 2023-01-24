import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export function HeartSignContainer() {
  return (
    <div className='heart-sign-container'>
      <div>
        <button className='heart-icon'>
        <FavoriteBorderIcon sx={{ width: 30, height: 30}}/>
        </button>
        <button className='comment' sx={{ width: 30, height: 30}}>
          <ChatBubbleOutlineIcon />
        </button>
      </div>

        <button className='flag' sx={{ width: 30, height: 30}}>
          <BookmarkBorderIcon/>
        </button>
    </div>
  );
}
