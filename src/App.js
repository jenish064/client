import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
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
