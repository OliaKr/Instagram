import { HomePage } from './pages/home-page';
import { Profile } from './cmps/profie';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

let defaultImg = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"



const user = useSelector(
    (storeState) => storeState.userModule.user
  );

const routes = [
    {
        path: '/',
        component: <HomePage/>,
        label: 'Home',
        icon: <i className="fa-solid fa-house"></i>
    },
    {
        path: '/create',
        component: <HomePage/>,
        label: 'Create',
        icon: <i className="fa-regular fa-square-plus"></i>
    },
    {
        path: '/profile',
        component: <Profile/>,
        label: 'Profile',
        icon: <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24}} src={user ? user.imgUrl : defaultImg  } />
    },
   
]

export default routes