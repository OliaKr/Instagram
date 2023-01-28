import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { SuggestedUsers } from '../assets/services.js/user-service.js'
import {SwitchAcoountsModal} from '../cmps/switch-accounts-modal.jsx'
import {openSwitchUsersModal} from '../store/user.action.js'
import { useSelector } from 'react-redux'



export function Suggestions() {

  const user = useSelector(
    (storeState) => storeState.userModule.user
  );


  let defaultImg = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"


  return (
    <div className='suggestion-container'>
      <SwitchAcoountsModal/>
      <div className='main-avatar'>
        <Stack>
          <Avatar
            alt='user'
            src={user ? user.imgUrl : defaultImg}
            sx={{ width: 70, height: 70 }}
          />
        </Stack>
        <h6>{user? user.fullname : ''}</h6>
        <button onClick={openSwitchUsersModal}>Swtich</button>
      </div>
      <div className='suggestions-users'>
        <ul>
          {SuggestedUsers.map((user) => {
            return (
              <li className='user-suggestion' key= {user._id}>
                <Stack>
                  <Avatar
                    alt={user.username}
                    src={user.userUrl}
                  />
                </Stack>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
