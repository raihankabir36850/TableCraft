import App from '../App';
import { Menus } from '../Components/SideMenu/Menus';
import { sideMenuData } from '../Data/SideMenuData';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

export const OverView = () => {
  const navigation = useNavigation();
  return (
    <div className='hero-container'>
      <div className='main-content pt-5 pr-5 pb-5 pl-5 bg-backgroundColor'>
        <App />
      </div>
      <div className='tableContainer'>
        <div className='sideMenuConatainer'>
          <div className='sidenav'>
            {sideMenuData.map((menu, index) => {
              return <div key={index}>{menu.children ? <Menus name={menu.name} children={menu.children} /> : <NavLink to={menu.url}>{menu.name}</NavLink>}</div>;
            })}
          </div>
        </div>
        <div className={`${navigation.state === 'loading' ? 'loading' : ''} resultContainer`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
