import App from '../App';
import { Button } from '../Components/Button/Button';

export const Home = () => {
  return (
    <div className='main-content pt-5 pr-5 pb-5 pl-5 bg-backgroundColor h-screen'>
      <App />
      <div className='banner-content max-w-7xl mr-auto ml-auto mt-36'>
        <h2 className='text-5xl tracking-wide text-textColor font-black'>React Table</h2>
        <p className='text-paragraphColor text-lg max-w-1/2 my-4'>Controllable MIT React Table component with Sorting, Filtering, Grouping, Virtualization, Editing and many more</p>
        <Button />
      </div>
    </div>
  );
};
