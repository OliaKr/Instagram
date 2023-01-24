import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from '../assets/img/3_Image.jpg';
import { SuggestedUsers } from '../assets/services.js/user-service.js';
import {SwitchAcoountsModal} from '../cmps/switch-accounts-modal.jsx';
import {openSwitchUsersModal} from '../store/user.action.js';

export function Suggestions() {
  return (
    <div className='suggestion-container'>
      <SwitchAcoountsModal/>
      <div className='main-avatar'>
        <Stack>
          <Avatar
            alt='user'
            src={img}
            sx={{ width: 70, height: 70 }}
          />
        </Stack>
        <h6>yarin herman</h6>
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
