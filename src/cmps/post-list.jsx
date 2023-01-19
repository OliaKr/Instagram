
import { Storyheader } from './story-header';
import { HeartSignContainer } from './heart-sign-container';
export function Postlist() {
  return (
    <div className='story-container'>
      <Storyheader />
      <div className='img-container'>
        <img src='https://images.ctfassets.net/ub3bwfd53mwy/6atCoddzStFzz0RcaztYCh/1c3e8a37eebe3c6a435038f8d9eef7f3/3_Image.jpg?w=750' />
      </div>
     
       <HeartSignContainer/>
        <div className='comments'>
          <h4>20 likes</h4>
          <h4>1bike1world: Lovely wee visit to see Marie-Anne yesterday who runs a cat shelter 😺❤️</h4>
          <h6>view comments...</h6>
        </div>
        <div className='input-area'>
          <input type={'text'} size={'55'}/>
          <button>
          <div className='emoji'></div>
         
          </button>
        </div>
    </div>
  );
}
