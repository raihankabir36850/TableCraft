import { Link } from 'react-router-dom';
export const Button = () => {
  return (
    <Link to='/overview' className='bg-viewDemoButtonBackground text-white px-10 py-3 border inline-block rounded-md text-lg tracking-wide hover:bg-viewDemoButtonBackgroundHover'>
      View Demos
    </Link>
  );
};
