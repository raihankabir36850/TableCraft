import { Link } from 'react-router-dom';

const menuData = [
  { id: 1, name: 'Docs', url: '#' },
  { id: 2, name: 'Demos', url: '/overview' },
  { id: 3, name: 'Github', url: '#' },
  { id: 4, name: 'npm', url: '#' },
];

export const Menu = () => {
  const menuStr = menuData.map((item) => {
    return (
      <li key={item.id}>
        <Link to={item.url} className='font-bold text-textColor'>
          {item.name}
        </Link>
      </li>
    );
  });
  return <ul className='menu-items flex gap-7'>{menuStr}</ul>;
};
