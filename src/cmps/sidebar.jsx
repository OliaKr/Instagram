import {NavLink} from 'react-router-dom'
import routes from '../routes';

export function Sidebar() {
  return (
    <>
      <section className="side-bar">
          <a href='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png' style={{ width: "130px" }} /></a>
          <nav>
              {routes.map(route => <NavLink className='nav-btn' key={route.path} to={route.path}><span className='nav-icon'>{route.icon}</span><span>{route.label}</span></NavLink>)}
          </nav>
          <a className="side-bar-more"><i className="fa-solid fa-bars"></i><span>More</span></a>
      </section>
   
   </>
  );
}
