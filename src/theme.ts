import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e40a0', // Medium blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c8e8fa', // light blue
    },
    background: {
      default: '#ffffff',
      paper: '#f9fbfc',
    },
    text: {
      primary: '#1D2B53', // navy for headers
      secondary: '#444444', // clean gray for body text
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
