import './NavContainer.css'
import { useShare } from './Sharecontext';

const NavContainer = () => {
const count = useShare();
  return (
    <nav>
      <ul className='listContainer'>
        <li>Cart: {count}</li>
        <li>Link 2</li>
      </ul>
    </nav>
  );
};

export default NavContainer;
