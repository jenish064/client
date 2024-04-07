import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import { updateUserData } from '../redux/action/UsersAction';

const UpdateUserModal = (props) => {
  const [name, setName] = useState(props.name);
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name,
      job
    };
    const response = await updateUserData(props.id, data);
    if (response.data) {
      setMessage(`User ${response.data.name} added successfully with job ${response.data.job}.`);
      await props.getUsersList();
      props.handleClose();
    } else {
      setMessage('Error occurred while adding user.');
    }
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Update user: {props.id}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Job"
            type="text"
            fullWidth
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {message && <p>{message}</p>}
    </div>
  );
};

UpdateUserModal.propTypes = {
  name: PropTypes.string,
  open: PropTypes.bool,
  id: PropTypes.number,
  handleClose: PropTypes.func,
  getUsersList: PropTypes.func
};

export default UpdateUserModal;
