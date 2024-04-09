import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../images/lianhao-qu-l4HAkTlJQP0-unsplash.jpg'; // Import your background image

const RootContainer = styled(Container)({
  marginTop: '1.5rem', // You can adjust the spacing as needed
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '2rem' // Add padding to ensure content is visible
});

const ButtonContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem' // You can adjust the spacing as needed
});

const Dashboard = () => {
  return (
    <RootContainer>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <ButtonContainer container spacing={2}>
        <Grid item>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Update
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="info">
            View
          </Button>
        </Grid>
      </ButtonContainer>
    </RootContainer>
  );
};

export default Dashboard;
