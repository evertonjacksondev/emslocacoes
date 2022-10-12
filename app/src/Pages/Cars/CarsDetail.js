import { Grid } from '@material-ui/core'
import { Avatar, Button, TextField } from '@mui/material'
import UndoIcon from "@mui/icons-material/Undo";
import AddIcon from "@mui/icons-material/Add";
import { getCatalogId, postCreateCatalog } from '../../util/Api'
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import { Box } from '@mui/system';

const CarsDetail = () => {
  const navigate = useNavigate();
  const params = useParams()

  const [dataInput, setDataInput] = useState({});


  useEffect(() => {
    if (params.id != 'new') {
      getCatalogId(params.id, (response) => { setDataInput(response) });
    }
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault();

    // show the form values
    // const formData = new FormData(e.target);
    // const title = formData.get('title');
    // const brand = formData.get('brand');
    // const model = formData.get('model');
    // const version = formData.get('version');
    // const ano = formData.get('year');
    // const Transmissão = formData.get('transmissao');
    // const motor = formData.get('motor');
    // const combustivel = formData.get('combustivel');
    // const arcondicionado = formData.get('arcondicionado');
    // const image = formData.get('image');
    // const category = formData.get('category');


    let data = {};

    if (title) data['title'] = title;
    if (brand) data['brand'] = brand;
    if (model) data['model'] = model;
    if (version) data['version'] = version;
    if (ano) data['ano'] = ano;
    if (Transmissão) data['Transmissão'] = Transmissão;
    if (motor) data['motor'] = motor;
    if (combustivel) data['combustivel'] = combustivel;
    if (arcondicionado) data['arcondicionado'] = arcondicionado;
    if (image) data['image'] = image;
    if (category) data['category'] = category;

    postCreateCatalog(data, (response) => { }, (error) => { })


  }

  return (
    <Fragment>
      <NavBar />
      <Box component={"form"} onSubmit={() => { handleSubmit() }} >
        <Grid container justifyContent='center' >
          <Grid item style={{ border: 5 }} xs={3}>
            <Avatar style={{ width: 250, height: 300, borderRadius: '10px' }}></Avatar>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={1} justifyContent='center' >
              <Grid item xs={12} lg={12}>
                <TextField
                  name={'title'}
                  label={'Título'}
                  size={"small"}
                  fullWidth
                  InputLabelProps={{ shrink: true, required: true }}
                  value={dataInput.title} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  label={'Categoria'}
                  size={"small"}
                  InputLabelProps={{ shrink: true, required: true }}
                  name={'category'} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name='brand'
                  InputLabelProps={{ shrink: true, required: true }}
                  value={dataInput.brand}
                  label={'Marca'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name='model'
                  value={dataInput.model}
                  label={'Modelo'}
                  InputLabelProps={{ shrink: true, required: true }}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'year'}
                  value={dataInput.ano}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Ano'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'combustivel'}
                  value={dataInput.combustivel}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Combústivel'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'transmissao'}
                  value={dataInput['Transmissão']}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Trasmissão'} size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'plate'}
                  value={dataInput._id}
                  InputLabelProps={{ shrink: true, required: true }}
                  disabled
                  label={'Placa'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'motor'}
                  value={dataInput.motor}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Motor'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  startIcon={<AddIcon />}
                  size="small"
                  type='submit'
                  variant="contained"
                  color="success"
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  startIcon={<DeleteIcon />}
                  size="small"
                  variant="contained"
                  color="error"
                >
                  Excluir
                </Button>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  onClick={() => {
                    navigate(-1);
                  }}
                  startIcon={<UndoIcon />}
                  size="small"
                  variant="contained"
                  color="inherit"
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid >
      </Box>
    </Fragment>
  )
}

export default CarsDetail