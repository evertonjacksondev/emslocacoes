import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { formatDate } from "../../lib/date";

const ReservaInformation = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date().setDate(new Date().getDate()+1))); 

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

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Categoria"}></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Marca"}></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Modelo"}></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField
            InputLabelProps={{ shrink: true, required: true }}
            size={"small"}
            fullWidth
            value={startDate}
            onChange={({ target }) => { setStartDate(target.value) }}
            label={"Data de retirada"}
            type='date'
          ></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField
            InputLabelProps={{ shrink: true, required: true }}
            size={"small"}
            fullWidth
            value={endDate}
            onChange={({ target }) => { setEndDate(target.value) }}
            label={"Data de devolução"}
            type='date'
          ></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField
            size={"small"}
            fullWidth
            label={"Valor da reserva"}
          ></TextField>
        </Grid>

        <Grid item lg={4} xs={6}>
          <TextField size={"small"} fullWidth label={"Placa"}></TextField>
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
          <TextField size={"small"} fullWidth label={"Telefone"}></TextField>
        </Grid>

        <Grid item lg={3} xs={6}>
          <TextField size={"small"} fullWidth label={"CEP"}></TextField>
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
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ReservaInformation;
