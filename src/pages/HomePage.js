import { useNavigate } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../images/jezael-melgoza-alY6_OpdwRQ-unsplash.jpg'; // Import your background image

export default function HomePage() {
  const navigate = useNavigate();

  const RootContainer = styled(Container)({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  });

  const ContentContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  });

  const ButtonContainer = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem' // You can adjust the spacing as needed
  });

  const handleMenuItemClick = (value) => {
    navigate(value);
  };

  return (
    <RootContainer>
      <ContentContainer>
        <Typography variant="h4" gutterBottom color="white">
          Dashboard
        </Typography>
        <ButtonContainer container spacing={2}>
          <Grid item>
            <Button
              onClick={() => handleMenuItemClick('add')}
              variant="contained"
              color="primary.main">
              Add
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleMenuItemClick('update')}
              variant="contained"
              color="primary.dark">
              Update
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleMenuItemClick('delete')} variant="contained" color="error">
              Delete
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleMenuItemClick('view')} variant="contained" color="info">
              View
            </Button>
          </Grid>
        </ButtonContainer>
      </ContentContainer>
    </RootContainer>
  );
}
