import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import logo from '../../images/logoEms.webp'
import { Hidden } from '@mui/material';
import { useEffect } from 'react';
import { login } from '../../Routes/auth';


const theme = createTheme();

const Login = () => {

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });


    login(
      data.get('email'),
      data.get('password'),
      (response) => {
        window.location.href = '/frota'

      },
      (err) => {

        enqueueSnackbar(err, { variant: 'error' })
      })

  };


  useEffect(() => {

    localStorage.clear()
    sessionStorage.clear()

  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Hidden smDown>
          <Grid item xs={false} sm={3} md={7} sx={{
            width: 1200,
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#e6ebe8',
            backgroundPosition: 'center',
          }}
          />
        </Hidden>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >


            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                color="primary"
                fullWidth
                STY
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
             

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default Login