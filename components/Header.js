import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => (
  <Navbar  expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">ГЛАВНАЯ</Nav.Link>
        <Nav.Link href="/prices">УСЛУГИ И ЦЕНЫ</Nav.Link>
        <Nav.Link href="/work">ПРИМЕРЫ РАБОТ</Nav.Link>
        <Nav.Link href="/company">О КОМПАНИИ</Nav.Link>
        <Nav.Link href="/contact">КОНТАКТЫ</Nav.Link>
        <NavDropdown  id="basic-nav-dropdown" title={'trtrt'}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
