import { Logo } from './Components/Logo/Logo';
import { Menu } from './Components/Menu/Menu';
function App() {
  return (
    <div className='navbar flex justify-between items-center max-w-7xl mr-auto ml-auto'>
      <Logo />
      <Menu />
    </div>
  );
}

export default App;
