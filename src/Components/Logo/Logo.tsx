import { Link } from 'react-router-dom';
import { SiReacttable } from 'react-icons/si';

export const Logo = () => {
  return (
    <div className='logo-container'>
      <Link to='/' className='font-bold flex justify-center items-center gap-1 text-textColor'>
        <SiReacttable className='w-8 h-8 animate-spin duration-3000 ease-linear' />
        <h3>Table Craft</h3>
      </Link>
    </div>
  );
};
