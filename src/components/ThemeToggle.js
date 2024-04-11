// ThemeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, FormControlLabel } from '@mui/material';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.theme);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME', payload: theme }); // Dispatch action to toggle theme
  };

  return (
    <FormControlLabel
      control={<Switch checked={theme === 'dark'} onChange={toggleTheme} />}
      label="Theme switch"
    />
  );
};

export default ThemeToggle;
