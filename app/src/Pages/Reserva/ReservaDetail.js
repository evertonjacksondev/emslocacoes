import {
  Button,
  InputLabel,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatDate } from "../../lib/date";
import InputMask from "react-input-mask";
import { useNavigate, useParams } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { getCep } from "../../lib/cep";
import { useSnackbar } from "notistack";
import SearchIcon from "@mui/icons-material/Search";
import { getCatalog, getReservaId, postCreateReserva } from "../../util/Api";
import Box from "@mui/material/Box";

const ReservaDetail = () => {
  const [endDate, setEndDate] = useState(
    formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))
  );
  const navigate = useNavigate();
  const params = useParams();
  const [selectCars, setSelectCars] = useState([]);
  const [dataInput, setDataInput] = useState(() => {return {startDate: formatDate(new Date()), endDate: formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))}});

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setDataInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (params.id != "new") {
      getReservaId(params.id, (response) => {
        setDataInput(response);
      });
    }
  }, []);

  useEffect(() => {
    setEndDate(
      formatDate(
        new Date(new Date(dataInput.startDate).setDate(new Date(dataInput.startDate).getDate() + 1))
      )
    );
  }, [dataInput.startDate]);
  const fillAdress = () => {
    getCep(
      dataInput.zipCodeOrigin.replace("-", ""),
      (response) => {
        let { logradouro, bairro, localidade, uf } = response;
        setDataInput((preventState) => {
          return {
            ...preventState,
            address: logradouro,
            neighborhood: bairro,
            city: localidade,
            uf: uf,
          };
        });
        enqueueSnackbar("Cep consultado", { variant: "success" });
      },
      (error) => enqueueSnackbar("Cep não encontrado", { variant: "error" })
    );
  };

  const handleSubmit = (e) => {
    if (params.id == "new") {
      e.preventDefault();
      postCreateReserva(
        dataInput,
        () => {},
        () => {}
      );
    }
  };

  useEffect(() => {
    getCatalog(
      (response) => {
        setSelectCars(response);
      },
      (error) => {}
    );
  }, []);

  useEffect(() => {
    if (dataInput.category) {
      let priceCategory = {
        basic: 90,
        plus: 110,
        confort: 130,
        premium: 100,
        luxo: 250,
      };

      let date1 = new Date(dataInput.startDate);
      let date2 = new Date(endDate);
      let diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

      setDataInput((preventState) => {let price= "R$ " + diffDays * priceCategory[dataInput.category.toLocaleLowerCase()]; return {...preventState, price}}
      );
    }
  } ,[dataInput.startDate, endDate]);

  return (
    <Fragment>
      <Box component={"form"} noValidate onSubmit={handleSubmit}>
        <Grid
          container
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: 10,
          }}
          spacing={2}
        >
          <Grid item lg={12} xs={12}>
            <Typography variant="h4">Dados do Veículo</Typography>
          </Grid>

          <Grid item lg={12} xs={12}>
            <TextField
              name="title"
              onChange={({ target }) => {
                setDataInput(target.value);
              }}
              select
              fullWidth
              size="small"
            >
              {selectCars.length > 0 &&
                selectCars.map((car, index) => (
                  <MenuItem key={index} value={car}>
                    {car.title}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name="category"
              select
              fullWidth
              size="small"
              value={dataInput.category}
              label={"Categoria"}
              onChange={handleChange}
            >
              <MenuItem value={"basic"}>Basic</MenuItem>
              <MenuItem value={"confort"}>Confort</MenuItem>
              <MenuItem value={"plus"}>Plus</MenuItem>
              <MenuItem value={"luxo"}>Luxo</MenuItem>
              <MenuItem value={"premium"}>Premium</MenuItem>
            </TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name="brand"
              disabled={true}
              fullWidth
              size="small"
              value={dataInput.brand}
              label={"Marca"}
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name={"model"}
              disabled={true}
              size={"small"}
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={dataInput.model}
              label={"Modelo"}
              id={"model"}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name="plate"
              disabled={true}
              InputLabelProps={{ shrink: true }}
              inputProps={{ maxLength: 7 }}
              size={"small"}
              fullWidth
              label={"Placa"}
              value={dataInput._id}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name="startDate"
              InputLabelProps={{ shrink: true, required: true }}
              size={"small"}
              fullWidth
              value={dataInput.startDate}
              onChange={({ target }) => {
                if (
                  new Date(
                    new Date(
                      new Date(target.value).setHours(0, 0, 0, 0)
                    ).setDate(new Date(target.value).getDate() + 1)
                  ) >= new Date(new Date().setHours(0, 0, 0, 0))
                ) {
                  (e) => {handleChange(e)};
                } else {
                  enqueueSnackbar("Selecione outra data", { variant: "error" });
                }
              }}
              label={"Data de retirada"}
              type="date"
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              name="endDate"
              InputLabelProps={{ shrink: true, required: true }}
              size={"small"}
              fullWidth
              value={endDate}
              onChange={({ target }) => {
                if (
                  new Date(
                    new Date(
                      new Date(target.value).setHours(0, 0, 0, 0)
                    ).setDate(new Date(target.value).getDate() + 1)
                  ) >=
                  new Date(new Date(dataInput.startDate).setHours(0, 0, 0, 0)).setDate(
                    new Date(dataInput.startDate).getDate() + 1
                  )
                ) {
                  setEndDate(target.value);
                } else {
                  enqueueSnackbar("Selecione outra data", { variant: "error" });
                }
              }}
              label={"Data de devolução"}
              type="date"
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="price"
              disabled={true}
              value={dataInput.price}
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Valor da reserva"}
            ></TextField>
          </Grid>

          <Grid item lg={12} xs={12}>
            <Divider style={{ padding: 20 }}></Divider>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 20,
          }}
          spacing={2}
        >
          <Grid item lg={12} xs={12}>
            <Typography variant="h4">Dados do Cliente</Typography>
          </Grid>

          <Grid item lg={5} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="name"
              size={"small"}
              fullWidth
              label={"Nome"}
              value={dataInput.name}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <InputMask
              size="small"
              name="Phonenumber"
              mask="(99) 99999-9999 "
              value={dataInput.phoneNumber}
              onChange={handleChange}
            >
              {() => <TextField label="Telefone" fullWidth size="small" />}
            </InputMask>
          </Grid>

          <Grid item lg={2} xs={6}>
            <InputMask
              size="small"
              name="zipCodeOrigin"
              mask="99999-999"
              value={dataInput.zipCodeOrigin}
              onChange={handleChange}
            >
              {() => (
                <TextField
                  InputLabelProps={{ shrink: true, required: true }}
                  name={"zipCodeOrigin"}
                  label="CEP Origem"
                  fullWidth
                  size="small"
                />
              )}
            </InputMask>
          </Grid>

          <Grid item lg={2} xs={6}>
            <Button
              startIcon={<SearchIcon />}
              variant="contained"
              size="large"
              color="warning"
              disabled={dataInput.zipCodeOrigin == ""}
              onClick={() => {
                fillAdress();
              }}
            >
              Consultar CEP
            </Button>
          </Grid>

          <Grid item lg={12} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="address"
              value={dataInput.address}
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Endereço"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="neighborhood"
              value={dataInput.neighborhood}
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Bairro"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="num"
              value={dataInput.num}
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Numero"}
            ></TextField>
          </Grid>

          <Grid item lg={4} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="complement"
              size={"small"}
              value={dataInput.complement}
              fullWidth
              label={"Complemento"}
              onChange={handleChange}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              InputLabelProps={{ shrink: true, required: true }}
              name="city"
              value={dataInput.city}
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Cidade"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              name="uf"
              select
              value={dataInput.uf ? dataInput.uf : '' }
              onChange={handleChange}
              size={"small"}
              fullWidth
              label={"Estado"}
            >
              <MenuItem value={"AC"}>AC</MenuItem>
              <MenuItem value={"AL"}>AL</MenuItem>
              <MenuItem value={"AP"}>AP</MenuItem>
              <MenuItem value={"AM"}>AM</MenuItem>
              <MenuItem value={"BA"}>BA</MenuItem>
              <MenuItem value={"CE"}>CE</MenuItem>
              <MenuItem value={"DF"}>DF</MenuItem>
              <MenuItem value={"ES"}>ES</MenuItem>
              <MenuItem value={"GO"}>GO</MenuItem>
              <MenuItem value={"MA"}>MA</MenuItem>
              <MenuItem value={"MT"}>MT</MenuItem>
              <MenuItem value={"MS"}>MS</MenuItem>
              <MenuItem value={"MG"}>MG</MenuItem>
              <MenuItem value={"PA"}>PA</MenuItem>
              <MenuItem value={"PB"}>PB</MenuItem>
              <MenuItem value={"PR"}>PR</MenuItem>
              <MenuItem value={"PE"}>PE</MenuItem>
              <MenuItem value={"PI"}>PI</MenuItem>
              <MenuItem value={"RJ"}>RJ</MenuItem>
              <MenuItem value={"RN"}>RN</MenuItem>
              <MenuItem value={"RS"}>RS</MenuItem>
              <MenuItem value={"RO"}>RO</MenuItem>
              <MenuItem value={"RR"}>RR</MenuItem>
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"SP"}>SP</MenuItem>
              <MenuItem value={"SE"}>SE</MenuItem>
              <MenuItem value={"TO"}>TO</MenuItem>
            </TextField>
          </Grid>

          <Grid item lg={12} xs={12}>
            <Divider style={{ padding: 20 }}></Divider>
          </Grid>

          <Grid
            container
            style={{
              justifyContent: "center",
              padding: 30,
            }}
            spacing={5}
          >
            <Grid item lg={"auto"} xs={"auto"}>
              <Button
                type="submit"
                startIcon={<AddIcon />}
                size="large"
                variant="contained"
                color="success"
              >
                Salvar
              </Button>
            </Grid>
            <Grid item lg={"auto"} xs={"auto"}>
              <Button
                startIcon={<DeleteIcon />}
                size="large"
                variant="contained"
                color="error"
              >
                Excluir
              </Button>
            </Grid>

            <Grid item lg={"auto"} xs={"auto"}>
              <Button
                onClick={() => {
                  navigate("/reserva");
                }}
                startIcon={<UndoIcon />}
                size="large"
                variant="contained"
                color="inherit"
              >
                Voltar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ReservaDetail;
