import { Grid } from '@material-ui/core'
import { Avatar, Button, TextField } from '@mui/material'
import UndoIcon from "@mui/icons-material/Undo";
import AddIcon from "@mui/icons-material/Add";
import { deleteCatalogId, getCatalogId, postCreateCatalog, putCatalogId } from '../../util/Api'
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import { Box } from '@mui/system';
import { useSnackbar } from "notistack";
import UploadImage from '../../Components/UploadImage/UploadImage';


const CarsDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [dataInput, setDataInput] = useState({});


  useEffect(() => {
    if (params.id != 'new') {
      getCatalogId(params.id,
        (response) => {
          setDataInput(response);
        });
    }
  }, []);


  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setDataInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleDelete = (_id) => {
    deleteCatalogId(_id,
      () => {
        enqueueSnackbar("Deletado com sucesso", { variant: "success" });
        navigate('/cadastro')
      },
      (error) => {
        enqueueSnackbar(error, { variant: "success" })
      })

  };

  const handleSubmit = (e) => {
    if (params.id == 'new') {
      e.preventDefault();
      postCreateCatalog(dataInput,
        (response) => {
          setDataInput(response);
          navigate(`/cadastro/${response.insertedId}`);
          navigate(0);
          enqueueSnackbar("Cadastrado com sucesso", { variant: "success" })
        },
        (error) => {
          enqueueSnackbar(error, { variant: "error" });
        })
    } else {
      e.preventDefault();
      putCatalogId(params.id,
        dataInput,
        (response) => {
          setDataInput(response);
          enqueueSnackbar("Atualizado com sucesso", { variant: "success" });
          navigate(0);
        },
        (error) => {
          enqueueSnackbar(error, { variant: "error" });
        })

    }
  };



  return (
    <Fragment>
      <NavBar />
      <Box component={"form"} onSubmit={handleSubmit} >
        <Grid container justifyContent='center' >
          <Grid item style={{ border: 5, positon: 'relative' }} xs={12} lg={3} md={3}>
            <UploadImage img={dataInput.image} setDataInput={setDataInput} />
          </Grid>
          <Grid item xs={12} lg={3} md={6}>
            <Grid container spacing={1} justifyContent='center' >
              <Grid item xs={12} lg={12}>
                <TextField
                  name={'title'}
                  label={'Título'}
                  size={"small"}
                  fullWidth
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true, required: true }}
                  value={dataInput.title} />
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  name='brand'
                  fullWidth
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true, required: true }}
                  value={dataInput.brand}
                  label={'Marca'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name='model'
                  onChange={handleChange}
                  value={dataInput.model}
                  fullWidth
                  label={'Modelo'}
                  InputLabelProps={{ shrink: true, required: true }}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'year'}
                  onChange={handleChange}
                  fullWidth
                  value={dataInput.ano}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Ano'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'combustivel'}
                  fullWidth
                  onChange={handleChange}
                  value={dataInput.combustivel}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Combústivel'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'Transmissão'}
                  fullWidth
                  onChange={handleChange}
                  value={dataInput['Transmissão']}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Trasmissão'} size={"small"} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  name={'motor'}
                  fullWidth
                  onChange={handleChange}
                  value={dataInput.motor}
                  InputLabelProps={{ shrink: true, required: true }}
                  label={'Motor'}
                  size={"small"} />
              </Grid>

              <Grid item xs={12} lg={12}>
                <TextField
                  name={'plate'}
                  fullWidth
                  value={dataInput._id}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true, required: true }}
                  disabled
                  label={'Placa'}
                  size={"small"} />
              </Grid>
              <Grid item xs={12} lg={12}>

              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  fullWidth
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
                  fullWidth
                  startIcon={<DeleteIcon />}
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => { handleDelete(params.id) }}
                >
                  Excluir
                </Button>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  onClick={() => {
                    navigate('/cadastro');
                  }}
                  startIcon={<UndoIcon />}
                  size="small"
                  fullWidth
                  variant="contained"
                  color="inherit"
                >
                  Voltar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default CarsDetail