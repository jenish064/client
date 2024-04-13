import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';
import Button from '@mui/material/Button';

export default function ErrorFallback(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    errorMessage: 'Oops! something went wrong while rendering the component'
  });

  useEffect(() => {
    if (props.errorMessage && props.errorMessage.message) {
      setState({ errorMessage: props.errorMessage.message });
    }
  }, []);

  return (
    <div>
      {state.errorMessage}
      <Button onClick={() => navigate('/')} variant="outlined">
        Go to home page
      </Button>
    </div>
  );
}

ErrorFallback.propTypes = {
  errorMessage: string
};
