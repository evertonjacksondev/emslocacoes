import { Button } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Reserva = () => {
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
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          navigate('/reservainformation');
        }}
      >
        Adicionar Reserva
      </Button>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </Fragment>
  );
};

export default Reserva;
