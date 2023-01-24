import { Storyheader } from './story-header';
import { HeartSignContainer } from './heart-sign-container';


export function PostPreview({ story }) {
  return (
    <div>
      <div className='story-container'>
        <Storyheader story={story} />
        <div className='img-container'>
          <img src={story.postImg} />
        </div>

        <HeartSignContainer />
        <div className='comments'>
          <h4>{story.likedBy.length} likes</h4>
          <h4>{story.txt}</h4>
          <h6>view comments...</h6>
        </div>
        <div className='input-area'>
          <input
            type={'text'}
            size={'55'}
          />
          <button>
            <div className='emoji'></div>
          </button>
        </div>
      </div>
    </div>
  );
}
