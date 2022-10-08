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
import SearchIcon from '@mui/icons-material/Search';

const ReservaInformation = () => {
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
  const [address, setAdress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [num, setNum] = useState("");

  const { enqueueSnackbar } = useSnackbar();

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

  useEffect(() => {
    if (category) {
      let priceCategory = {
        hatch: 50,
        sedan: 70,
        suv: 90,
        utilitario: 80,
        esportivo: 120,
      };

      let date1 = new Date(startDate);
      let date2 = new Date(endDate);
      let diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

      setPrice("R$ " + diffDays * priceCategory[category.toLocaleLowerCase()]);
    }
  }, [category, startDate, endDate]);

  return (
    <Fragment>
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
            <MenuItem value={"Hatch"}>Hatch</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
            <MenuItem value={"Utilitario"}>Utilitário</MenuItem>
            <MenuItem value={"Esportivo"}>Esportivo de Luxo</MenuItem>
          </TextField>
        </Grid>

        <Grid item lg={3} xs={6}>
          <TextField
            select
            fullWidth
            size="small"
            value={automaker}
            label={"Marca"}
            onChange={({ target }) => {
              setAutomaker(target.value);
            }}
          >
            <MenuItem value={"Audi"}>Audi</MenuItem>
            <MenuItem value={"BMW"}>BMW</MenuItem>
            <MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
            <MenuItem value={"Fiat"}>Fiat</MenuItem>
            <MenuItem value={"Honda"}>Honda</MenuItem>
            <MenuItem value={"Jeep"}>Jeep</MenuItem>
            <MenuItem value={"Nissan"}>Nissan</MenuItem>
            <MenuItem value={"Toyota"}>Toyota</MenuItem>
            <MenuItem value={"Volkswagen"}>Volkswagen </MenuItem>
          </TextField>
        </Grid>

        <Grid item lg={3} xs={6}>
          <TextField size={"small"} fullWidth label={"Modelo"}></TextField>
        </Grid>

        <Grid item lg={3} xs={6}>
          <TextField
            inputProps={{ maxLength: 7 }}
            size={"small"}
            fullWidth
            label={"Placa"}
          ></TextField>
        </Grid>

        <Grid item lg={3} xs={6}>
          <TextField
            InputLabelProps={{ shrink: true, required: true }}
            size={"small"}
            fullWidth
            value={startDate}
            onChange={({ target }) => {
              setStartDate(target.value);
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
              setEndDate(target.value);
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
            disabled={zipCodeOrigin == ''}
            onClick={() => {
              fillAdress();
            }}
          >
            Consultar CEP
          </Button>
        </Grid>

        <Grid item lg={12} xs={6}>
          <TextField value={address} onChange={(e) => setAdress(e.target.value)} size={"small"} fullWidth label={"Endereço"}></TextField>
        </Grid>

        <Grid item lg={2} xs={6}>
          <TextField value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} size={"small"} fullWidth label={"Bairro"}></TextField>
        </Grid>


        <Grid item lg={2} xs={6}>
          <TextField value={num} onChange={(e) => setNum(e.target.value)} size={"small"} fullWidth label={"Numero"}></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Complemento"}></TextField>
        </Grid>

        <Grid item lg={2} xs={6}>
          <TextField value={city} onChange={(e) => setCity(e.target.value)} size={"small"} fullWidth label={"Cidade"}></TextField>
        </Grid>

        <Grid item lg={2} xs={6}>
          <TextField select value={uf} onChange={(e) => setUf(e.target.value)} size={"small"} fullWidth label={"Estado"}>
            <MenuItem value={'AC'} >AC</MenuItem>
            <MenuItem value={'AL'}>AL</MenuItem>
            <MenuItem value={'AP'}>AP</MenuItem>
            <MenuItem value={'AM'}>AM</MenuItem>
            <MenuItem value={'BA'}>BA</MenuItem>
            <MenuItem value={'CE'}>CE</MenuItem>
            <MenuItem value={'DF'}>DF</MenuItem>
            <MenuItem value={'ES'}>ES</MenuItem>
            <MenuItem value={'GO'}>GO</MenuItem>
            <MenuItem value={'MA'}>MA</MenuItem>
            <MenuItem value={'MT'}>MT</MenuItem>
            <MenuItem value={'MS'}>MS</MenuItem>
            <MenuItem value={'MG'}>MG</MenuItem>
            <MenuItem value={'PA'}>PA</MenuItem>
            <MenuItem value={'PB'}>PB</MenuItem>
            <MenuItem value={'PR'}>PR</MenuItem>
            <MenuItem value={'PE'}>PE</MenuItem>
            <MenuItem value={'PI'}>PI</MenuItem>
            <MenuItem value={'RJ'}>RJ</MenuItem>
            <MenuItem value={'RN'}>RN</MenuItem>
            <MenuItem value={'RS'}>RS</MenuItem>
            <MenuItem value={'RO'}>RO</MenuItem>
            <MenuItem value={'RR'}>RR</MenuItem>
            <MenuItem value={'SC'}>SC</MenuItem>
            <MenuItem value={'SP'}>SP</MenuItem>
            <MenuItem value={'SE'}>SE</MenuItem>
            <MenuItem value={'TO'}>TO</MenuItem>
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
    </Fragment>
  );
};

export default ReservaInformation;
