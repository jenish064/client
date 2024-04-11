import { useNavigate } from 'react-router-dom';
import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Button, Grid } from '@mui/material';
import backgroundImage from '../images/jezael-melgoza-alY6_OpdwRQ-unsplash.jpg'; // Import your background image
import ThemeToggle from '../components/ThemeToggle';

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
    backgroundPosition: 'center',
    opacity: '70%'
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
          Welcome to CRUD page
        </Typography>
        <ButtonContainer container spacing={2}>
          <Grid item>
            <Button onClick={() => handleMenuItemClick('add')} variant="contained">
              Add
            </Button>
          </Grid>
          {/* <Grid item>
            <Button onClick={() => handleMenuItemClick('update')} variant="contained">
              Update
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => handleMenuItemClick('delete')} variant="contained">
              Delete
            </Button>
          </Grid> */}
          <Grid item>
            <Button onClick={() => handleMenuItemClick('view')} variant="contained">
              View
            </Button>
          </Grid>
        </ButtonContainer>
        <ThemeToggle />
      </ContentContainer>
    </RootContainer>
  );
}
