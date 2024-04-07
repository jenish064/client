import React, { useState } from 'react';
import { useSetState } from 'react-use';
import { TextField, Button, Typography, Box } from '@mui/material';
import { addUserData } from '../redux/action/UsersAction';

const AddUserForm = () => {
  const [state, setState] = useSetState({
    name: '',
    job: ''
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: state.name,
      job: state.job
    };
    const response = await addUserData(data);
    if (response.data) {
      setMessage(`User ${response.data.name} added successfully with job ${response.data.job}.`);
    } else {
      setMessage('Error occurred while adding user.');
    }
  };

  return (
    <Box maxWidth={400} mx="auto">
      <Typography variant="h5" gutterBottom>
        Add User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={state.name}
          onChange={(event) => setState({ name: event.target.value })}
          required
        />
        <TextField
          label="Job"
          variant="outlined"
          fullWidth
          margin="normal"
          value={state.job}
          onChange={(event) => setState({ job: event.target.value })}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  );
};

export default AddUserForm;
