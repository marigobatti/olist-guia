import React from 'react';
import { Slide, Grid, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme, colors, Text, Card } from '@olist/united';

import Footer from '../components/Footer';
import roadmap from '../assets/images/roadmap.png';


const useStyles = makeStyles(() => ({
  blueBanner: {
    backgroundColor: colors.blue.light[2],
    display: 'flex',
    overflow: 'hidden'
  },
  card: {
    padding: '4em 0',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  roadmap: {
    padding: '4em 0'
  },
  guideIntent: {
    marginTop: '2em',
    marginBottom: '2em'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.blueBanner}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Slide direction='right' in={true} timeout={1000} mountOnEnter unmountOnExit>
                <div className={classes.card}>
                  <Text fontSize='3em' fontWeight='bold'>se você é um(a) vendedor(a) olist</Text>
                  <Text.H4>
                    e ainda tem dificuldades no processo de utilização da plataforma, essa é a sua chance de aprender a navegar no site,
                    e aplicar as estratégias de venda e divulgação que melhor funcionam no nosso universo!
                  </Text.H4>

                  <Text.H4>
                    Sabemos que o começo é difícil para todos, por isso resolvemos criar uma plataforma para você aprender sobre nós, estratégias de vendas, 
                    como atingir melhores resultados e ainda ganhar pontos de troca pelos conteúdos consumidos!
                  </Text.H4>

                  <Text.H4 fontWeight='bold'>
                    Não desista, persista!
                  </Text.H4>
                </div>
              </Slide>
            </Grid>
            <Grid item xs={4}>
              <img className={classes.roadmap} src={roadmap} alt='roadmap' />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container className={classes.guideIntent}>
        <Card>
          <Card.Header>
            <Text.H2 fontWeight='bold'>como este guia pode te ajudar</Text.H2>
          </Card.Header>
          <Card.Content>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Text>1</Text>
                </ListItemIcon>
                <ListItemText primary={<Text>informações centralizadas</Text>} secondary='aprenda tudo sobre o olist'  />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Text>2</Text>
                </ListItemIcon>
                <ListItemText primary={<Text>motivação</Text>} secondary='veja seus resultados melhorarem ao aplicar nossas recomendações'/>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Text>3</Text>
                </ListItemIcon>
                <ListItemText primary={<Text>pontos de troca</Text>} secondary='mais vantagens ao aprender e aplicar o conteúdo'/>
              </ListItem>
            </List>
          </Card.Content>
        </Card>
      </Container>
      <Footer />
    </>
  );
}