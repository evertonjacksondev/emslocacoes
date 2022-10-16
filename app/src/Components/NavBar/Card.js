import { Avatar, Button, Chip, Divider, Grid, IconButton, ListItem, Paper, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useLocation } from 'react-router-dom';

const Card = (props) => {

  let navigate = useNavigate();

  const [someDetail, setSomeDetail] = useState(false);
  const sendMessage = (data) => {


    let { title, combustivel } = data;

    window.open(`https://api.whatsapp.com/send?phone=5511997831826&text=*Estou%20interessado!*%0aVeiculo%0a${title}%0a${combustivel}%0aData%20da%20Retira:${props.startDate}%0aData%20da%20Devolução:${props.startDate}%0a*Preencha%20os%20Campos*%0aNome:%0aTelefone:%0aCEP:%0aEndereço%0aBairro:%0aNúmero:%0aCidade:%0aEstado:%0a`)
  }

  return (

    <Grid item xs={12} md={3} lg={3}>
      <ListItem id='card-item'>
        <Paper style={{ padding: 25 }} elevation={3}>
          {useLocation().pathname === '/frota' && (<IconButton onClick={() => navigate(`/cadastro/${props.data._id}`)}><EditIcon /></IconButton>)}
          <Grid container spacing={2} justifyContent={'center'}>
            <Grid item textAlign={'center'} xs={12} lg={12} >
              <Chip color={props.data.status == 'Alugado' ? 'error' : 'success'} label={props.data.status} />
            </Grid>
            <Grid item >
              <Avatar style={{ width: 100, height: 100, borderRadius: '10px' }} src={props.data.image} variant='square'>

              </Avatar>
            </Grid>
          </Grid>
          <Typography
            textAlign={'center'}>
            <Tooltip title={props.data.title}><b>{props.data.title.substring(0, 25) + '...'}</b></Tooltip>
          </Typography>
          <Typography
            style={{ border: 4 }}
            textAlign={'center'}>
            {props.data.combustivel}
          </Typography>

          <Divider style={{ marginBottom: 10 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={'center'}>
              <Button
                size='small'
                disabled={props.data.status == 'Alugado' ? true : false}
                startIcon={<AddBoxIcon />}
                variant='contained'
                onClick={() => { sendMessage(props.data) }}>
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
                  <Grid item>
                    <ListItem >
                      Ar-Condicionado:{props.data.arcondicionado ? <CheckCircleIcon color={'success'} /> : <CheckBoxOutlineBlankIcon color={'inherit'} />}
                    </ListItem>
                    <ListItem >
                      Transmissão:{props.data['Transmissão']}
                    </ListItem>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    </Grid>

  )
}

export default Card