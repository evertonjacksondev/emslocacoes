import React, { Fragment } from "react";
import { useSnackbar } from "notistack";
import { Button, TextField } from "@mui/material";

const Home = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = (type) => {
    enqueueSnackbar("I love hooks", { variant: type });
  };

  return (
    <Fragment>
      <TextField label={"E-mail"}></TextField>
      <Button variant="contained" onClick={() => handleClick("error")}>
        Error
      </Button>
      <Button onClick={() => handleClick("success")}>sucesso</Button>
    </Fragment>
  );
};

export default Home;
