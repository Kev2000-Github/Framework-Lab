import './Navbar.css';
import {
  Notification,
  SearchIcon,
  AppsIcon,
} from '../SVG';

export function NavBar() {
  return (
    <header className='headerNavBar'>
      <div className='search-box'>
        <a className='search-btn' href='#'>
          <SearchIcon />
        </a>
        <input className='search-txt' type='text' name='' placeholder='Search for data, users, docs' />
      </div>
      <div className='rightBlock'>
        <nav>
          <p>Team</p>
          <a href='#'>teamraiders</a>
        </nav>
        <div className='icons'>
          <Notification className='notification topIcon' />
          <AppsIcon className='appsIcon topIcon' />
        </div>
      </div>
    </header>

  );
}
