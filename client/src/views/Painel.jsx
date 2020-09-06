import React from 'react';
import { 
  makeStyles, 
  Grid, 
  Container, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from '@material-ui/core';
import { theme, Icon, Text, Card, Table, ProgressBar } from '@olist/united';
import { Accordion, AccordionDetails, AccordionSummary } from '../components/Accordion';
import Footer from '../components/Footer';


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
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Card>
              <Card.Header>
                <Text.H3 fontWeight='bold'>progresso</Text.H3>
              </Card.Header>
              <Container className={classes.steps}>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>primeiros passos</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='100' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>cadastro de produtos</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='85' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>vendas</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='40' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>entrega dos produtos</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='60' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>fidelizar e manter cliente informado</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='10' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Dica de ouro olist: mantenha o seu canal de atendimento sempre aberto aos seus clientes!
                      Não demore para tirar dúvidas sobre os produtos e entregas. Dê voz aos seus cleintes e deixe-os à vontade para se comunicar.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion square>
                  <AccordionSummary
                    expandIcon={<Icon name='chevron-down-outline' />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Grid container spacing={2}>
                      <Grid xs={6} item>
                        <Text.H4 fontWeight='bold'>estratégias de divulgação</Text.H4>
                      </Grid>
                      <Grid xs={6} item className={classes.stepsProgress}>
                        <ProgressBar current='20' total='100' height='12px'/>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Text>
                  </AccordionDetails>
                </Accordion>
              </Container>
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