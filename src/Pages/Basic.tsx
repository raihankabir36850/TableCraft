import { Basic } from '../Components/Basic/Basic';
import App from '../App';

export const OverView = () => {
  return (
    <div className='hero-container'>
      <div className='main-content pt-5 pr-5 pb-5 pl-5 bg-backgroundColor'>
        <App />
      </div>
      <Basic />
    </div>
  );
};
