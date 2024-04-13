import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import userImage from '../images/user-lazy.jpeg';

export default function LazyLoading() {
  return (
    <div>
      <Card sx={{ display: 'flex', marginBottom: '16px' }}>
        <CardMedia
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            marginRight: '16px'
          }}
          component="img"
          image={userImage}
        />
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h5" component="h2">
              ...............
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Email: ...............
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              ID: ...............
            </Typography>
            <Button disabled variant="contained" color="primary">
              Update
            </Button>
            <Button disabled id="basic-button" variant="contained">
              Delete
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
