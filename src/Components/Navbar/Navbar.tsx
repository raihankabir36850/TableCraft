import { Link } from 'react-router-dom';
import { SiReacttable } from 'react-icons/si';

export const Navbar = () => {
  return (
    <div>
      <SiReacttable />
      <Link to='/'>Table craft</Link>
    </div>
  );
};
