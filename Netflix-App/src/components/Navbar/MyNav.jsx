import { Navbar, Nav } from 'react-bootstrap';
import '../Navbar/MyNav.css';
import logo from '../assets/netflix_logo.png';
import magnify from '../assets/magnify.png';
import bell from '../assets/bell.png';
import avatar from '../assets/avatar.png';

const MyNav = () => (
  <>
    <Navbar className="bg" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <img
            src={logo}
            alt="logo"
            style={{ width: '120px', height: '60px' }}
          />
        </Nav.Link>
        <Nav.Link className="mt-3" href="#features">
          Home
        </Nav.Link>
        <Nav.Link className="mt-3" href="#features">
          TV Shows
        </Nav.Link>
        <Nav.Link className="mt-3" href="#features">
          Movies
        </Nav.Link>
        <Nav.Link className="mt-3" href="#features">
          Recently added
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="#home">
          <img
            src={magnify}
            alt="magnify"
            style={{ width: '20px', height: '20px' }}
          />
        </Nav.Link>
        <Nav.Link className="mb-2 ml-3" href="#features">
          KIDS
        </Nav.Link>
        <Nav.Link href="#home">
          <img
            className="ml-3"
            src={bell}
            alt="bell"
            style={{ width: '20px', height: '20px' }}
          />
        </Nav.Link>
        <Nav.Link href="#home">
          <img
            className="ml-3"
            src={avatar}
            alt="avatar"
            style={{ width: '30px', height: '30px' }}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default MyNav;
