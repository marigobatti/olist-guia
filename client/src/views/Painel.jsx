import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { 
  makeStyles, 
  Grid, 
  Container, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from '@material-ui/core';
import { colorsByAlias, theme, Icon, Text, Card, Table, ProgressBar, Loading } from '@olist/united';
import { Accordion, AccordionDetails, AccordionSummary } from '../components/Accordion';
import Footer from '../components/Footer';

import { index as indexProgresso, store as storeProgresso } from '../services/progresso';
import { PrimaryButton } from '../components/Button';


const useStyles = makeStyles(() => ({
  ranking: {
    marginBottom: '1.5em'
  },
  steps: {
    paddingTop: '1em'
  },
  stepsProgress: {
    display: 'flex',
    alignItems: 'center'
  },
  stepsButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  accordionDetails: {
    display: 'block'
  }
}));

export default function Painel() {
  const classes = useStyles();

  const [ categorias, setCategorias ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const getCategorias = async () => {
    setLoading(true);
    try {
      setCategorias(await indexProgresso());
    } catch(e){
    } finally {
      setLoading(false);
    }
  }

  const totalEtapasFeitas = (categoria) => {
    const etapasFeitas = categoria.etapas.filter(rec => rec.progresso?.terminou ?? false);
    return etapasFeitas.length;
  }

  useEffect(() => {
    getCategorias();
  }, []);

  const updateEtapa = (etapa) => {
    const updatedCategorias = categorias.map(cat => {
      if (cat.id == etapa.categoria_id) {
        return {
          ...cat,
          etapas: cat.etapas.map(et => {
            if (et.id == etapa.id)
              return {
                ...et,
                ...etapa
              }
            else
              return et;
          })
        };
      } else {
        return cat;
      }
    });

    setCategorias(updatedCategorias);
  }

  const iniciarEtapa = async (etapa) => {
    updateEtapa({
      ...etapa,
      loading: true
    });

    const response = await storeProgresso({ etapa_id: etapa.id, terminou: false });

    updateEtapa({
      ...etapa,
      loading: false,
      progresso: response
    })
  }

  const getTotalPontos = () => {
    const todasEtapas = [].concat.apply([], categorias.map(cat => cat.etapas));
    const etapasFeitas = todasEtapas.filter(rec => rec.progresso?.terminou ?? false);
    const soma = etapasFeitas.reduce((prevPontuacao, curr) => prevPontuacao + curr.pontuacao, 0);

    return soma;
  }

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Card>
              <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text.H3 fontWeight='bold'>progresso</Text.H3>
                <div style={{ display: 'flex' }}>
                  <Text.H3 style={{ marginRight: '0.3em'}} fontWeight='bold'>pontos:</Text.H3>
                  <Text.H3 fontWeight='bold'>{getTotalPontos()}</Text.H3>
                </div>
              </Card.Header>
              {loading ? 
                <Card.Content>
                  <Loading backgroundColor={colorsByAlias.primary} variation='primary' />
                </Card.Content> :
                <Container className={classes.steps}>
                  {categorias.map(categoria => (
                    <Accordion square key={categoria.id}>
                      <AccordionSummary
                        expandIcon={<Icon name='chevron-down-outline' />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Grid container spacing={2}>
                          <Grid xs={6} item>
                            <Text.H4 fontWeight='bold'>{ categoria.nome }</Text.H4>
                          </Grid>
                          <Grid xs={6} item className={classes.stepsProgress}>
                            {categoria.etapas.length > 0 &&
                              <ProgressBar current={totalEtapasFeitas(categoria)} total={categoria.etapas.length} height='12px'/>
                            }
                          </Grid>
                        </Grid>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accordionDetails}>
                        <Text><ReactMarkdown source={categoria.descricao} /></Text>
                        <div>
                        {categoria.etapas.map(etapa => (
                          <Accordion square key={etapa.id}>
                            <AccordionSummary
                              expandIcon={<Icon name='chevron-down-outline' />}
                              aria-controls='panel1a-content'
                              id='panel1a-header'
                            >
                              <Grid container spacing={2}>
                                <Grid xs={6} item>
                                  <Text.H4>{ etapa.nome }</Text.H4>
                                </Grid>
                                <Grid xs={6} item className={classes.stepsButton}>
                                  <PrimaryButton 
                                    variant='primary' 
                                    loading={etapa.loading} 
                                    onClick={() => iniciarEtapa(etapa)} 
                                    disabled={etapa.progresso != null}
                                  >
                                    {etapa.progresso ==  null ? 
                                      'Iniciar' :
                                      etapa.progresso.terminou ?
                                      <Icon color='white' name='success-outline' size={20} /> :
                                      'Em progresso'
                                    }
                                  </PrimaryButton>
                                </Grid>
                              </Grid>
                            </AccordionSummary>
                            <AccordionDetails className={classes.accordionDetails}>
                              <Text><ReactMarkdown source={etapa.descricao}/></Text>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Container>
              }
            </Card>
          </Grid>
          <Grid item lg={4}>
            <Card className={classes.ranking}>
              <Card.Header>
                <Text.H3 fontWeight='bold'>ranking</Text.H3>
              </Card.Header>
              <Card.Content>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon color={theme.colors.yellowLighter} size={32} name='trophy-outline' />
                    </ListItemIcon>
                    <ListItemText primary={<Text>Isabele Brum</Text>} secondary='1º lugar' />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon color={theme.colors.textLightest} size={32} name='trophy-outline' />
                    </ListItemIcon>
                    <ListItemText primary={<Text>Amábilly</Text>} secondary='2º lugar'/>
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon color={theme.colors.yellowDarker} size={32} name='trophy-outline' />
                    </ListItemIcon>
                    <ListItemText primary={<Text>Paula</Text>} secondary='3º lugar'/>
                  </ListItem>
                </List>
              </Card.Content>
            </Card>
            <Card>
              <Card.Header>
                <Text.H3 fontWeight='bold'>pontuação</Text.H3>
              </Card.Header>
              <Card.Content>
                <Table>
                  <Table.Head>
                    <Table.Row>
                      <Table.Cell header><Text></Text>nível</Table.Cell>
                      <Table.Cell header>pontos</Table.Cell>
                    </Table.Row>
                  </Table.Head>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>1000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>2000</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell verticalAlign='top'>3000</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}