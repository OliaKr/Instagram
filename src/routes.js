import { HomePage } from './pages/home-page';
import { Profile } from './cmps/profie';

const routes = [
    {
        path: '/',
        component: <HomePage/>,
        label: 'Home',
        icon: <i className="fa-solid fa-house"></i>
    },
    {
        path: 'create',
        component: <HomePage/>,
        label: 'Create',
        icon: <i className="fa-regular fa-square-plus"></i>
    },
    {
        path: 'profile',
        component: <Profile/>,
        label: 'Profile',
        icon: <i className="fa-solid fa-user"></i>
    },
   
]

export default routes