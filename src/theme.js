// theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2' // Set primary color to a shade of blue
    },
    secondary: {
      main: '#f50057' // Set secondary color to a shade of pink
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#BFBF00' // Set primary color to a different shade of blue for dark theme
    },
    secondary: {
      main: '#f48fb1' // Set secondary color to a different shade of pink for dark theme
    },
    mode: 'dark' // Enable dark mode
  }
});
