import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '60%', margin: 'auto', paddingTop: '180px', textAlign: 'center' }}>
      <Typography color="success" variant="h4" gutterBottom>Payment Successful</Typography>
      <Typography color="grey" variant="h6" gutterBottom>Your payment was processed successfully.</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/')}
        sx={{ marginTop: '20px' }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Success;

