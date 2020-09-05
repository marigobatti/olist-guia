import React from 'react';
import { colorsByAlias, Nav, Navbar, NavDropdown } from '@olist/united';
import Container from '@material-ui/core/Container';

import logo from '../assets/images/logo.png';


export default function PublicNavigation() {
  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand><img src={logo} width='86' alt='Logo do Olist Guia' /></Navbar.Brand>
          <Nav>
            <Nav.Link href='#' colorHover={colorsByAlias.link}>planos</Nav.Link>
            <NavDropdown>
              <NavDropdown.Toggle colorHover={colorsByAlias.link}>conteúdo gratuito</NavDropdown.Toggle>
              <NavDropdown.Menu>
                <NavDropdown.Item>new product</NavDropdown.Item>
                <NavDropdown.Item>import products</NavDropdown.Item>
              </NavDropdown.Menu>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}