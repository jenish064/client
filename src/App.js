import { Routes, Route } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';
import ErrorPage from './pages/ErrorPage';

const theme = createTheme({
  palette: {
    primary: {
      contrastText: '#EEEEEE',
      main: '#00f6ff',
      dark: '#222831',
      light: '#'
      // Adjust this color to your primary color
    },
    secondary: {
      main: '#00f6ff' // Adjust this color to your secondary color
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
