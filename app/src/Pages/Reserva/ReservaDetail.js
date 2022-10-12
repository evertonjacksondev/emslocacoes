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
import { useNavigate } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";
import { getCep } from "../../lib/cep";
import { useSnackbar } from "notistack";
import SearchIcon from "@mui/icons-material/Search";
import { getCatalog } from "../../util/Api";
import Box from '@mui/material/Box';

const ReservaDetail = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(
    formatDate(new Date(new Date().setDate(new Date().getDate() + 1)))
  );
  const [zipCodeOrigin, setZipCodeOrigin] = useState("");
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [automaker, setAutomaker] = useState("");
  const [price, setPrice] = useState("R$ 0,00");
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [num, setNum] = useState("");
  const [selectCars, setSelectCars] = useState([]);
  const [dataInput, setDataInput] = useState({});
  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setAutomaker(dataInput.brand)
    setModel(dataInput.model)
    setPlate(dataInput._id)
  },[dataInput])

  useEffect(() => {
    setEndDate(
      formatDate(
        new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 1))
      )
    );
  }, [startDate]);
  const fillAdress = () => {
    getCep(
      zipCodeOrigin.replace("-", ""),
      (response) => {
        let { logradouro, bairro, localidade, uf } = response;
        if (logradouro) setAdress(logradouro);
        if (bairro) setNeighborhood(bairro);
        if (localidade) setCity(localidade);
        if (uf) setUf(uf);
        enqueueSnackbar("Cep consultado", { variant: "success" });
      },
      (error) => enqueueSnackbar("Cep não encontrado", { variant: "error" })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    model
    brand
    plate
    price
    startDate
    endDate
    name
    address
    phoneNumber
    zipCodeOrigin
    address
    neighborhood
    num
    complement
    city
    uf
    postCreateReserva();
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
    if (category) {
      let priceCategory = {
        basic: 90,
        plus: 110,
        confort: 130,
        premium: 100,
        luxo: 250,
      };

      let date1 = new Date(startDate);
      let date2 = new Date(endDate);
      let diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

      setPrice("R$ " + diffDays * priceCategory[category.toLocaleLowerCase()]);
    }
  }, [category, startDate, endDate]);

  return (
    <Fragment>
      <Box component="form" noValidate onSubmit={handleSubmit}>
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
              select
              fullWidth
              size="small"
              value={category}
              label={"Categoria"}
              onChange={({ target }) => {
                setCategory(target.value);
              }}
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
              disabled={true}
              fullWidth
              size="small"
              value={dataInput.brand}
              label={"Marca"}
              InputLabelProps={{ shrink: true }}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
              disabled={true}
              size={"small"}
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={dataInput.model}
              label={"Modelo"}
              id={'model'}
              onChange={({target}) => {
                setModel(target.value)
              }}
            ></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <TextField
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
              InputLabelProps={{ shrink: true, required: true }}
              size={"small"}
              fullWidth
              value={startDate}
              onChange={({ target }) => {
                if (
                  new Date(
                    new Date(
                      new Date(target.value).setHours(0, 0, 0, 0)
                    ).setDate(new Date(target.value).getDate() + 1)
                  ) >= new Date(new Date().setHours(0, 0, 0, 0))
                ) {
                  setStartDate(target.value);
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
                  new Date(new Date(startDate).setHours(0, 0, 0, 0)).setDate(
                    new Date(startDate).getDate() + 1
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
              disabled={true}
              value={price}
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
            <TextField size={"small"} fullWidth label={"Nome"}></TextField>
          </Grid>

          <Grid item lg={3} xs={6}>
            <InputMask
              size="small"
              name="Phonenumber"
              mask="(99) 99999-9999 "
              value={phoneNumber}
              onChange={({ target }) => {
                setPhoneNumber(target.value);
              }}
            >
              {() => <TextField label="Telefone" fullWidth size="small" />}
            </InputMask>
          </Grid>

          <Grid item lg={2} xs={6}>
            <InputMask
              size="small"
              name="sCepOrigem"
              mask="99999-999"
              value={zipCodeOrigin}
              onChange={({ target }) => {
                setZipCodeOrigin(target.value);
              }}
            >
              {() => <TextField label="CEP Origem" fullWidth size="small" />}
            </InputMask>
          </Grid>

          <Grid item lg={2} xs={6}>
            <Button
              startIcon={<SearchIcon />}
              variant="contained"
              size="large"
              color="warning"
              disabled={zipCodeOrigin == ""}
              onClick={() => {
                fillAdress();
              }}
            >
              Consultar CEP
            </Button>
          </Grid>

          <Grid item lg={12} xs={6}>
            <TextField
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              size={"small"}
              fullWidth
              label={"Endereço"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              size={"small"}
              fullWidth
              label={"Bairro"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              value={num}
              onChange={(e) => setNum(e.target.value)}
              size={"small"}
              fullWidth
              label={"Numero"}
            ></TextField>
          </Grid>

          <Grid item lg={4} xs={6}>
            <TextField
              size={"small"}
              fullWidth
              label={"Complemento"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              value={city}
              onChange={(e) => setCity(e.target.value)}
              size={"small"}
              fullWidth
              label={"Cidade"}
            ></TextField>
          </Grid>

          <Grid item lg={2} xs={6}>
            <TextField
              select
              value={uf}
              onChange={(e) => setUf(e.target.value)}
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
                  navigate(-1);
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
