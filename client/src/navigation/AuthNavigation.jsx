import React from 'react';
import { Link } from 'react-router-dom';
import { colorsByAlias, Nav, Navbar, Text } from '@olist/united';
import { Container, makeStyles } from '@material-ui/core';

import { Button } from '../components/Button';
import logo from '../assets/images/logo.png';
import { useAuth } from '../contexts/auth';


const useStyles = makeStyles(() => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function AuthNavigation() {
  const classes = useStyles();
  const { user, logout } = useAuth();

  return (
    <header>
      <Container>
        <div className={classes.navbar}>
          <Navbar>
            <Navbar.Brand><Link to='/painel'><img src={logo} width='86' alt='Logo do Olist Guia' /></Link></Navbar.Brand>
            <Nav>
              <Nav.Link href='/painel' colorHover={colorsByAlias.link}>guia</Nav.Link>
              <Nav.Link href='/premios' colorHover={colorsByAlias.link}>prêmios</Nav.Link>
            </Nav>
          </Navbar>
          <span className={classes.actions}>
            <Text style={{ marginRight: '1em' }} fontWeight='bold'>{user}</Text>
            <Button onClick={logout}>sair</Button>
          </span>
        </div>
      </Container>
    </header>
  );
}