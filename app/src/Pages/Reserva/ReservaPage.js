import { Button, Grid, Tooltip } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { getReserva } from "../../util/Api";

const ReservaPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    getReserva(
      (response) => { setData(response); },
      (error) => { }
    )
  }, [])
  
  const columns = [
    {
      name: "name",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "brand",
      label: "Marca",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "model",
      label: "Modelo",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "price",
      label: "Valor",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'optionsButton',
      label: ' ',
      options: {
        display: true,
        sort: false,
        customBodyRenderLite: (dataIndex) => {

          return (
            <Grid container justifyContent='flex-end'>
              <Tooltip title="Editar detalhes">
                <Button
                  onClick={() => { navigate(`/reserva/${data[dataIndex]._id}`) }}
                  variant={'contained'}
                  style={{ color: 'primary', fontSize: 9, padding: 5, borderRadius: 3, textTransform: 'none' }}
                >
                  Detalhes
                </Button>
              </Tooltip>
              </Grid>
              );
            }
          }
        }
  ];

  const options = {
    selectableRows: false,
    elevation: 0,
    viewColumns: false,
    filter: false,
    responsive: "simple",
    rowsPerPageOptions: [10, 20, 40, 80, 100],
    textLabels: {
      body: {
        noMatch: "Desculpe, nenhuma reserva foi localizada",
        toolTip: "Sort",
        columnHeaderTooltip: column => `Sort for ${column.label}`
      },
      pagination: {
        next: "Proxima Pagina",
        previous: "Página anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      }
    }  };

  return (
    <Fragment>
      <Grid
        container
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 10,
        }}
        spacing={1}
      >
        <Grid item lg={"auto"} xs={"auto"}>
          <Button
            startIcon={<AddBoxIcon />}
            variant="contained"
            color="info"
            onClick={() => {
              navigate("/reserva/new");
            }}
          >
            Adicionar Reserva
          </Button>
        </Grid>

        <Grid
          container
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: 50,
          }}
          spacing={5}
        >

          <MUIDataTable
            title={"Reservas"}
            data={data}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ReservaPage;
