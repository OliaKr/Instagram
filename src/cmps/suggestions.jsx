import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from '../assets/img/3_Image.jpg';
import { SuggestedUsers } from '../assets/services.js/user-service.js';

export function Suggestions() {
  return (
    <div className='suggestion-container'>
      <div className='main-avatar'>
        <Stack>
          <Avatar
            alt='user'
            src={img}
            sx={{ width: 70, height: 70 }}
          />
        </Stack>
        <h2>yarin herman</h2>
      </div>
      <div className='suggestions-users'>
        <ul>
          {SuggestedUsers.map((user) => {
            return (
              <li>
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
