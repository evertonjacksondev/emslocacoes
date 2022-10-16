import { Button, Grid, Tooltip } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import React, { Fragment, useEffect, useState } from 'react'
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from 'react-router-dom';
import { getCatalog } from '../../util/Api';

const CarsPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {

    getCatalog(
      (response) => { setData(response); },
      () => { }
    )
  }, [])

  const columns = [
    {
      name: "title",
      label: "Título",
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
        sort: true,
      },
    },
    {
      name: "model",
      label: "Modelo",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "version",
      label: "Versão",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "combustivel",
      label: "Combustivel",
      options: {
        filter: true,
        sort: true,
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
                  onClick={() => { navigate(`/cadastro/${data[dataIndex]._id}`) }}
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
        noMatch: "Desculpe, nenhum carro foi localizado",
        toolTip: "Sort",
        columnHeaderTooltip: column => `Sort for ${column.label}`
      },
      pagination: {
        next: "Proxima Pagina",
        previous: "Página anterior",
        rowsPerPage: "Linhas por página:",
        displayRows: "de",
      }
    }
  };

  return (
    <Fragment>
      <Grid
        container
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",

        }}
        spacing={1}
      >
        <Grid item lg={"auto"} xs={"auto"}>
          <Button
            startIcon={<AddBoxIcon />}
            variant="contained"
            color="info"
            onClick={() => {
              navigate("/cadastro/new");
            }}
          >
            Adicionar Veículo
          </Button>
        </Grid>

        <Grid
          container
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",

          }}
          spacing={5}
        >


        </Grid>
      </Grid>
      <MUIDataTable
        title={"Cadastro"}
        data={data}
        columns={columns}
        options={options}
      />
    </Fragment>
  );
}

export default CarsPage