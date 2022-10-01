import AppRoute from "./Routes/Routes";
import { SnackbarProvider } from 'notistack';
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
