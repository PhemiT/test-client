import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
      green: '#3BB987'
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Manrope", sans-serif',
    },
    h2: {
      fontFamily: '"Manrope", sans-serif',
    },
    h3: {
      fontFamily: '"Manrope", sans-serif',
    },
    h4: {
      fontFamily: '"Manrope", sans-serif',
    },
    h5: {
      fontFamily: '"Manrope", sans-serif',
    },
    h6: {
      fontFamily: '"Manrope", sans-serif',
    },
  },
});

export default theme;
