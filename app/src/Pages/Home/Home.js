import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, TextField } from '@mui/material';
import { formatDate } from '../../lib/date';
import { getCatalog, postCreateCatalog } from '../../util/Api';
import Card from '../../Components/NavBar/Card';
import { getMeliAds } from '../../lib/mockupDb';

const Catalog = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [data, setData] = useState([])
  const [teste, setTeste] = useState([])


  useEffect(() => {

    getCatalog(
      (response) => { setData(response) },
      (error) => { }
    )

    // getMeliAds(
    //   (response) => {
    //     try {

    //       let result = response.results.map(ad => {
    //         return {
    //           title: ad.title ? ad.title : '',
    //           brand: ad.attributes.find(attribute => attribute.name == 'Marca')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Marca').value_name : '',
    //           model: ad.attributes.find(attribute => attribute.name == 'Modelo')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Modelo').value_name : '',
    //           version: ad.attributes.find(attribute => attribute.name == 'Versão')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Versão').value_name : '',
    //           ano: ad.attributes.find(attribute => attribute.name == 'Ano')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Ano').value_name : '',
    //           Transmissão: ad.attributes.find(attribute => attribute.name == 'Transmissão')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Transmissão').value_name : '',
    //           motor: ad.attributes.find(attribute => attribute.name == 'Motor')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Motor').value_name : '',
    //           combustivel: ad.attributes.find(attribute => attribute.name == 'Tipo de combustível')?.value_name ? ad.attributes.find(attribute => attribute.name == 'Tipo de combustível').value_name : '',
    //           arcondicionado: ad.attributes.find(attribute => attribute.name == 'Ar-condicionado')?.value_name == 'Sim' ? true : false,
    //           image: ad.thumbnail ? ad.thumbnail : '',
    //           category: ''

    //         }
    //       })

    //       setTeste(result)

    //       for (let test of result) {

    //         postCreateCatalog(test, () => { }, () => { })


    //       }
    //     } catch (error) {
    //       error
    //     }



    //   },
    //   (error) => { }
    // )

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


      {data.length > 0 && (
        <Grid container > {data.map(item => <Card data={item} />)}
        </Grid>

      )}

    </Fragment >
  )
}

export default Catalog;