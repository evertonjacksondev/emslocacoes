import { Button, Grid } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ReservaPage = () => {
  
  const navigate = useNavigate();

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const options = {
    filterType: "checkbox",
  };

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
            item
            fullWidth
            lg={"auto"}
            xs={"auto"}
            title={"Employee List"}
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
