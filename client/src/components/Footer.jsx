import React from 'react';
import { makeStyles, Grid, Container, List, ListItem, ListItemText } from '@material-ui/core';
import { Text } from '@olist/united';

import logo from '../assets/images/logo.png';
import { ReactComponent as FacebookLogo } from '../assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from '../assets/svg/instagram.svg';
import { ReactComponent as LinkedinLogo } from '../assets/svg/linkedin.svg';
import { ReactComponent as TwitterLogo } from '../assets/svg/twitter.svg';
import { ReactComponent as YoutubeLogo } from '../assets/svg/youtube.svg';


const useStyles = makeStyles(() => ({
  socialLogos: {
    display: 'flex',
    width: '150px',
    justifyContent: 'space-between'
  }
}));

const Link = (props) => (
  <Text.Link {...props} color='grey' colorHover='blue'>{props.children}</Text.Link>
);

export default function Footer() { 
  const classes = useStyles();
   
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <img src={logo} width='86' alt='Logo do Olist Guia' />  
              </ListItem>
              <ListItem>
                <ListItemText primary={<Text color='grey'>Av. Cândido Hartmann, 590 Mercês, Curitiba – PR</Text>}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={<Text color='grey'>80730-440</Text>}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={<Text color='grey'>Consulte nossos Termos de Uso e Política de Privacidade</Text>}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <Text.H3 fontWeight='bold'>soluções</Text.H3>  
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link>olist store</Link>}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link>branded store</Link>}/>
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link>olist shops</Link>}/>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <Text.H3 fontWeight='bold'>redes sociais</Text.H3>  
              </ListItem>
              <ListItem>
                <ListItemText primary={
                  <div className={classes.socialLogos}>
                    <Link href='https://www.facebook.com/olistbr'><FacebookLogo width={20} height={20} /></Link>
                    <Link href='https://www.instagram.com/olistbr/'><InstagramLogo width={20} height={20} /></Link>
                    <Link href='https://pt.linkedin.com/company/olist'><LinkedinLogo width={20} height={20} /></Link>
                    <Link href='https://twitter.com/olistbr'><TwitterLogo width={20} height={20} /></Link>
                    <Link href='https://www.youtube.com/olistbr'><YoutubeLogo width={20} height={20} /></Link>
                  </div>
                }/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}