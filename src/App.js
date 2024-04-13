import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';
import ErrorBoundary from './error-handling/AppErrorBoundary';
import ErrorFallback from './error-handling/ErrorFallback';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);

  const theme = useSelector((state) => state.themeReducer.theme);

  const routeToErrorPage = (error) => {
    navigate('error-boundary');
    setError(error);
  };

  return (
    <ErrorBoundary routeToErrorPage={routeToErrorPage}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="error-boundary" element={<ErrorFallback errorMessage={error} />} />
          <Route path="*" element={<ErrorFallback errorMessage={error} />} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
