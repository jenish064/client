import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import AddPage from './pages/AddPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="view" element={<ViewPage />} />
        <Route path="add" element={<AddPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
