import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, TextField } from '@mui/material';
import { formatDate } from '../../lib/date';
import { getCatalog } from '../../util/Api';
import Card from '../../Components/NavBar/Card';
import loading from '../../../src/images/loading.gif'

const Catalog = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    getCatalog(
      (response) => { setData(response); setIsLoading(false) },
      (error) => { setIsLoading(false) }
    )
  }, [])



  return (
    <Fragment  >

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

      {isLoading ?
        <Grid container justifyContent={'center'}>
          <img style={{ width: 500 }} src={loading}></img>
        </Grid> : (
          <Grid container > {data.map(item => <Card endDate={endDate} startDate={startDate} data={item} />)}
          </Grid>

        )}

    </Fragment >
  )
}

export default Catalog;