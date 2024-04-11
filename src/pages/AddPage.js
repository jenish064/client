import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddUserForm from '../components/AddUserForm';
import ThemeToggle from '../components/ThemeToggle';

export default function AddPage() {
  const navigate = useNavigate();
  return (
    <div>
      <AddUserForm />
      <Button onClick={() => navigate('/')} variant="outlined">
        Go to home page
      </Button>
      <ThemeToggle />
    </div>
  );
}
