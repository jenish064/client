import { useNavigate } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button, Grid } from '@mui/material';
import ThemeToggle from '../components/ThemeToggle';

export default function HomePage() {
  const navigate = useNavigate();

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
    marginTop: '1rem'
  });

  const handleMenuItemClick = (value) => {
    navigate(value);
  };

  return (
    <ContentContainer>
      <br />
      <br />
      <Typography variant="h4" gutterBottom>
        Welcome to CRUD page
      </Typography>
      <br />
      <ButtonContainer container spacing={2}>
        <Grid item>
          <Button onClick={() => handleMenuItemClick('add')} variant="contained">
            Add
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => handleMenuItemClick('view')} variant="contained">
            View
          </Button>
        </Grid>
      </ButtonContainer>
      <br />
      <ThemeToggle />
      <br />
      <Typography gutterBottom>environment: {process.env.REACT_APP_ENV}</Typography>
      <Typography gutterBottom>
        environment base url: {process.env.REACT_APP_API_BASE_URL}
      </Typography>
    </ContentContainer>
  );
}
