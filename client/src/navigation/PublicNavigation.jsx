import React from 'react';
import { colorsByAlias, Nav, Navbar, NavDropdown } from '@olist/united';
import { Container, makeStyles } from '@material-ui/core';

import { Button, PrimaryButton } from '../components/Button';
import logo from '../assets/images/logo.png';


const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

export default function PublicNavigation() {
  const classes = useStyles();

  return (
    <header>
      <Container>
        <div className={classes.navbar}>
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
          <Button style={{ marginRight: '1em' }}>área do logista</Button>
        </div>
      </Container>
    </header>
  );
}