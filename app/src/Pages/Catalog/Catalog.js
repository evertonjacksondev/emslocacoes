import React, { Fragment, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Paper, TextField } from '@mui/material';
import { formatDate } from '../../lib/date';
import { getCatalog, getReserva } from '../../util/Api';
import Card from '../../Components/NavBar/Card';
import loading from '../../../src/images/loading.gif'
import { useSnackbar } from 'notistack';

const Catalog = () => {

  const { enqueueSnackbar } = useSnackbar();
  const [date, setDate] = useState((preventState) => {
    return {
      ...preventState, startDate: formatDate(new Date()),
      endDate: formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))
    }
  });
  const [data, setData] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDate((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });


  };

  useEffect(() => {
    filter();
  }, []);

  const validateReserva = () => {

    let adRenteds = reservas.filter(
      reserva =>
        (new Date(new Date(date.startDate).setHours(0, 0, 0, 0)) >= //start
          new Date(new Date(reserva.startDate).setHours(0, 0, 0, 0)) &&
          new Date(new Date(date.startDate).setHours(0, 0, 0, 0)) <=
          new Date(new Date(reserva.endDate).setHours(0, 0, 0, 0))) ||

        (new Date(new Date(date.endDate).setHours(0, 0, 0, 0)) >= //end
          new Date(new Date(reserva.startDate).setHours(0, 0, 0, 0)) &&
          new Date(new Date(date.endDate).setHours(0, 0, 0, 0)) <=
          new Date(new Date(reserva.endDate).setHours(0, 0, 0, 0))));

    setData((preventState) => {

      let result = preventState.map(catalog => {
        return {
          ...catalog,
          status: adRenteds.filter(adRented => adRented.idCar == catalog._id).length ? 'Alugado' : 'Disponível'
        }
      });

      return result

    });
  }


  const filter = () => {
    setIsLoading(true);
    getCatalog(
      (response) => { setData(response); setIsLoading(false); validateReserva(); },
      () => { setIsLoading(false) }
    )
    validateReserva();
  }
f
  useEffect(() => {
    setIsLoading(true);

    getReserva(
      (response) => { setReservas(response); setIsLoading(false) },
      () => { setIsLoading(false) }
    )
  }, [])



  return (
    <Fragment  >

      <Paper style={{ margin: 25 }} elevation={2}>
        <Grid style={{ padding: 30 }} container xs={12} spacing={1}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              name={'startDate'}
              InputLabelProps={{ shrink: true, required: true }}
              value={date.startDate}
              onChange={(e) => {
                if (
                  new Date(
                    new Date(
                      new Date(e.target.value).setHours(0, 0, 0, 0)
                    ).setDate(new Date(e.target.value).getDate() + 1)
                  ) >= new Date(new Date().setHours(0, 0, 0, 0))
                ) {
                  handleChange(e);
                } else {
                  enqueueSnackbar("Selecione outra data", { variant: "error" });
                }
              }}
              type='date'
              size='small'
              fullWidth label={'Data da Retirada'} />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <TextField
              name={'endDate'}
              InputLabelProps={{ shrink: true, required: true }}
              value={date.endDate}
              type='date'
              onChange={(e) => {
                if (
                  new Date(
                    new Date(
                      new Date(e.target.value).setHours(0, 0, 0, 0)
                    ).setDate(new Date(e.target.value).getDate() + 1)
                  ) >=
                  new Date(new Date(date.startDate).setHours(0, 0, 0, 0)).setDate(
                    new Date(date.startDate).getDate() + 1
                  )
                ) {
                  handleChange(e);
                } else {
                  enqueueSnackbar("Selecione outra data", { variant: "error" });
                }
              }}
              size='small'
              fullWidth
              label={'Data da devolução'} />

          </Grid>
          <Grid item alignItems={'center'} xs={3}>
            <Button variant='contained' onClick={() => { filter() }}>Pesquisar</Button>
          </Grid>


        </Grid>
      </Paper>

      {isLoading ?
        <Grid container justifyContent={'center'}>
          <img style={{ width: 500 }} src={loading}></img>
        </Grid> : (
          <Grid container > {data.map(item => <Card endDate={data.endDate} startDate={date.startDate} data={item} />)}
          </Grid>

        )}

    </Fragment >
  )
}

export default Catalog;