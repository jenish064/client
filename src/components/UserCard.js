import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { deleteUserData } from '../redux/action/UsersAction';
import UpdateUserModal from '../pages/UpdateUserModal';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginBottom: '16px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginRight: '16px'
  }
});

const UserCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const deleteUser = async (id) => {
    await deleteUserData(id);
    await props.getUsersList();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={props.avatar}
        title={`${props.firstName} ${props.lastName}`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h5">
            {`${props.firstName} ${props.lastName}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Email: {props.email}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ID: {props.id}
          </Typography>
          <Button onClick={handleOpen} variant="contained" color="primary">
            Update
          </Button>
          <Button id="basic-button" onClick={() => deleteUser(props.id)} variant="contained">
            Delete
          </Button>
        </CardContent>
      </div>
      <UpdateUserModal
        name={`${props.firstName} ${props.lastName}`}
        id={props.id}
        open={open}
        handleClose={handleClose}
        getUsersList={props.getUsersList}
      />
    </Card>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  getUsersList: PropTypes.func
};

export default UserCard;
