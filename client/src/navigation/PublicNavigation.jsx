import React from 'react';
import { Link } from 'react-router-dom';
import { colorsByAlias, Nav, Navbar, NavDropdown } from '@olist/united';
import { Container, makeStyles } from '@material-ui/core';

import { Button } from '../components/Button';
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
            <Navbar.Brand><Link to='/'><img src={logo} width='86' alt='Logo do Olist Guia' /></Link></Navbar.Brand>
            <Nav>
              <Nav.Link href='/planos' colorHover={colorsByAlias.link}>planos</Nav.Link>
              <Nav.Link href='/conteudo_gratuito' colorHover={colorsByAlias.link}>conteúdo gratuito</Nav.Link>
            </Nav>
          </Navbar>
          <Button component={Link} to="/login" style={{ marginRight: '1em' }}>área do logista</Button>
        </div>
      </Container>
    </header>
  );
}