import { DisabledByDefault } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

export function Profile() {
    const user = useSelector(
        (storeState) => storeState.userModule.user
      );
let defaultImg ='https://randomuser.me/api/portraits/men/75.jpg'
    
  return (
    <div className='profile-container'>
      <div className='top-section'>
        <Avatar
          alt='Remy Sharp'
          sx={{ width: '150px', height: '150px' }}
          src= {user? user.imgUrl : defaultImg}
        />
        <div className='three-columns-details'>
          <div className='first'>
            <span>{user.username}</span>
            <button>Edit profile</button>
            <SettingsIcon />
          </div>
          <div className='second'>
            <span>135 posts</span>
            <span>633 followers</span>
            <span>404 following</span>
          </div>
          <div className='third'>
            <span>Olia Kralinikov</span>
            <span>Here're only precious moments🙂</span>
          </div>
        </div>
      </div>

      <div className="grid-images">
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
        <img className="singleImg" alt="img" src="https://randomuser.me/api/portraits/men/75.jpg"/>
      </div>
    </div>
  );
}
