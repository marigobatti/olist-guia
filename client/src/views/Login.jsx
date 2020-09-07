import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme, Text, Card, Input, Flex } from '@olist/united';

import { useAuth } from '../contexts/auth'
import { PrimaryButton } from '../components/Button';
import logo from '../assets/images/logo.png';


const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh', 
    background: theme.colors.foundation.primaryDark
  },
  container: {
    minHeight: '90vh'
  },
  login: {
    width: '22em',
    height: '22em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function Home() {
  const classes = useStyles();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

	const { login, loading } = useAuth();

  const submitLogin = () => {
    login({ email, password });
  }

  return (
    <div className={classes.background}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.container}
      >
        <Grid item xs={3}>
          <Card className={classes.login}>
            <img src={logo} width={150} />
            <div>
              <Text color='grey' fontWeight='bold'>email</Text>
              <Input
                placeholder='seunome@email.com.br'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Text color='grey' fontWeight='bold'>senha</Text>
              <Input
                placeholder='*********'
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
              />
            </div>
            <div>
              <PrimaryButton onClick={submitLogin} variant='primary' loading={loading}>entrar</PrimaryButton>
            </div>
          </Card>
        </Grid>
      </Grid> 
    </div>
  );
}