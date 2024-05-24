import './navigation.css';
import { Container, Nav } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <header className='main_nav'>

      <Nav className='first_nav d-flex align-items-center px-4'>
        <Nav.Item>
          <Nav.Link href="#" className="logo">
            <svg className='logo' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="45px" height="21px" viewBox="0 0 45 21" enable-background="new 0 0 45 21" xml:space="preserve">
              <g>
                <rect width="3" height="21" />
                <rect x="6" width="3" height="21" />
                <rect x="12" width="3" height="21" />
                <rect x="18" width="3" height="21" />
                <g>
                  <rect x="24" y="18" width="21" height="3" />
                  <rect x="24" y="12" width="21" height="3" />
                  <rect x="24" y="6" width="21" height="3" />
                  <rect x="24" width="21" height="3" />
                </g>
              </g>
            </svg>
          </Nav.Link>
        </Nav.Item>

        <div className="d-flex justify-content-between align-items-center flex-grow-1">
          <div className='d-flex'>
            <Nav.Link className='nav_item' href="#">Live</Nav.Link>
            <Nav.Link className='nav_item' href="#">Push</Nav.Link>
            <Nav.Link className='nav_item' href="#">Note</Nav.Link>
            <Nav.Link className='nav_item' href="#">Link</Nav.Link>
            <Nav.Link className='nav_item' href="#">Shop</Nav.Link>
            <Nav.Link className='nav_item' href="#">Packs</Nav.Link>
            <Nav.Link className='nav_item' href="#">Help</Nav.Link>
            <Nav.Link className='nav_item item_orange' href="#">More +</Nav.Link>
          </div>

          <div className='d-flex'>
            <Nav.Link className='item_blue' href="#">Try Live 12 for Free</Nav.Link>
            <Nav.Link href="#">Log in or register</Nav.Link>
          </div>
        </div>
      </Nav>

      <Nav className='second_nav px-4'>
        <Nav.Item className='d-flex align-items-center'>
          <Nav.Link className='second_nav_item item_orange' href="#">About</Nav.Link>
          <Nav.Link className='second_nav_item' href="#">Jobs</Nav.Link>
          <Nav.Link className='second_nav_item' href="#">Apprenticeships</Nav.Link>
        </Nav.Item>
      </Nav>

    </header>
  );
}

export default Navigationbar;
