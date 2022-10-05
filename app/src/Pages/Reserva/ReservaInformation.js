import {
  Button,
  Divider,
  Grid,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const ReservaInformation = () => {
  return (
    <Fragment>
      <Grid
        container
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 50,
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
            size={"small"}
            fullWidth
            label={"Data de retirada"}
          ></TextField>
        </Grid>
        <Grid item lg={4} xs={6}>
          <TextField
            size={"small"}
            fullWidth
            label={"Data de devolução"}
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
          <Divider style={{ padding: 30 }}></Divider>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          paddingLeft: 50,
          paddingRight: 50,
        }}
        spacing={2}
      >
        <Grid item lg={12} xs={12}>
          <Typography variant="h4">Dados do Cliente</Typography>
        </Grid>
        <Grid item lg={6} xs={6}>
          <TextField helperText="Incorrect entry."error size={"small"} fullWidth label={"Nome"}></TextField>
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
          <Divider style={{ padding: 30 }}></Divider>
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
