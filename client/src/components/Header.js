import React from 'react';
import logo from './../assets/images/logo.png'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanUpdateContext } from './LanguageProvider';
const Header = () => {
  const toggleLan = useLanUpdateContext();
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className='main-nav' variant="dark">
      <Container>
      <Navbar.Brand href="#home" className='logo-box'>
        <img 
        src={logo}
        className="d-inline-block align-top" width="60px" height="60px" alt='apple'/>   
      </Navbar.Brand>
      <p className="me-auto nav-jahan">
      Jahan Indo Nepal Restaurant
      </p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/menu">
            Menu
          </Link>
          <a className='nav-link' href='tel:0489155644'>Call</a>
          <NavDropdown title="Lan" className="text-center" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={ ()=> toggleLan(true) } >English</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={ ()=> toggleLan(false) }>日本語</NavDropdown.Item>
          </NavDropdown>

          {/* <Link className='nav-link' to="/blogs">Blogs</Link> */}
          {/* <Link className='nav-link' to="/reservation">Reservation</Link> */}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;