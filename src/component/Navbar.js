import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Crozal from './Crozal';

function Navcomponent() {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark fixed-top px-4 ">
        <Container>
          <Navbar.Brand href="#crozal" className=' fs-1'>Port<span className='text-info'>folio</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navitem fs-4 text-center">
              <Nav.Link className="nav-link-custom text-info" href="#crozal">Home</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#about">About</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#skills">Skills</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#project">Projects</Nav.Link>
              <Nav.Link className="nav-link-custom" href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Crozal/>
    </>
  );
}

export default Navcomponent;
