import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    bgcolor: {
      default: "#c6b2eb"
    },
    primary:{
      main: '#b19cd9',
      light: '#c6b2eb',
      dark: '#967bb6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b1eda4',
      main: '#57cf93',
      dark: '#527a49',
      contrastText: '#000',
    },
  },
});
