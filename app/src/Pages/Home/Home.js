import React, { Fragment, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Chip, Divider, ListItem, Paper, TextField, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Catalog = () => {
  const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState('2022-12-01');
  const [someDetail, setSomeDetail] = useState(false);

  return (
    <Fragment style={{ padding: 40 }} >

      {/* Filtro */}
      <Paper style={{ margin: 25 }} elevation={2}>
        <Grid style={{ padding: 30 }} container xs={12} spacing={1}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              value={startDate}
              onChange={({ target }) => { setStartDate(target.value) }}
              type='date'
              size='small'
              fullWidth label={'Data da Retirada'} />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              value={endDate}
              type='date'
              onChange={({ target }) => { setEndDate(target.value) }}
              size='small'
              fullWidth
              label={'Data da devolução'} />

          </Grid>
          <Grid item xs={3}>
            <Button variant='contained'>Pesquisar</Button>
          </Grid>


        </Grid>
      </Paper>

      {/* Items */}
      <Grid container >

        <Grid item xs={12} md={6} lg={12}>
          <ListItem >
            <Paper style={{ padding: 25 }} elevation={3}>
              <Grid container spacing={2} justifyContent={'center'}>
                <Grid item textAlign={'center'} lg={12} >
                  <Chip color='info' label={'Alugado'} />
                </Grid>
                <Grid item >
                  <Avatar sx={{ width: 100, height: 100, borderRadius: '10px' }} src='https://www.zeene.com.br/mkt/imagens/ZN4242022.jpg' variant='square'>
                    B
                  </Avatar>
                </Grid>
              </Grid>
              <Typography
                textAlign={'center'}>
                <b>Renegede 1.8 Diesel</b>
              </Typography>
              <Typography
                style={{ border: 4 }}
                textAlign={'center'}>
                JEEP | SPORTLINE | 2022
              </Typography>

              <Divider style={{ marginBottom: 10 }} />
              <Grid container spacing={2}>
                <Grid item xs={12} textAlign={'center'}>
                  <Button
                    size='small'
                    startIcon={<AddBoxIcon />}
                    variant='contained'>
                    Reservar
                  </Button>
                </Grid>
                <Grid item xs={12} textAlign={'center'}>
                  <Button
                    size='small'
                    startIcon={<KeyboardArrowDownIcon />}
                    variant='contained'
                    onClick={() => setSomeDetail(!someDetail)}>

                    Mais Detalhes
                  </Button>

                  {someDetail && (
                    <Grid container justifyContent={'center'}>
                      DETALHES...
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </ListItem>
        </Grid>

      </Grid>

    </Fragment >
  )
}

export default Catalog;