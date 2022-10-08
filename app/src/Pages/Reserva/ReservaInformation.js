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
import React, { Fragment, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatDate } from "../../lib/date";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import UndoIcon from "@mui/icons-material/Undo";

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
              setCategory(target.value)
            }}
          >
            <MenuItem value={"Hatch"}>Hatch</MenuItem>
            <MenuItem value={"Sedan"}>Sedan</MenuItem>
            <MenuItem value={"SUV"}>SUV</MenuItem>
            <MenuItem value={"Utilitário"}>Utilitário</MenuItem>
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
              setAutomaker(target.value)
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
          <TextField size={"small"} fullWidth label={"Placa"}></TextField>
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

        <Grid item lg={6} xs={6}>
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

        <Grid item lg={3} xs={6}>
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

        <Grid item lg={12} xs={6}>
          <TextField size={"small"} fullWidth label={"Endereço"}></TextField>
        </Grid>

        <Grid item lg={2} xs={6}>
          <TextField size={"small"} fullWidth label={"Numero"}></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Complemento"}></TextField>
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
