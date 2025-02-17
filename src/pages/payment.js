import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Button, TextField, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import StripeCheckout from "react-stripe-checkout"

const Payment = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handlePlaceOrder = () => {
    console.log('Order placed!');
    navigate('/success');
  };
  const handlePaymentFailure = (error) => {
    console.error('Payment Failed: ', error);
  };
const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
const [paymentMethod, setPaymentMethod] = React.useState('');
const handlePaymentChange = (event) => {
  setPaymentMethod(event.target.value);
};

  return (
    <div style={{ padding: '20px', marginTop: '60px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Payment 
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '30px', backgroundColor:"lightgrey" }}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
          Delivery 
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
               color='secondary'
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
               color='secondary'
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
               color='secondary'
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
             color='secondary'
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Postal Code"
               color='secondary'
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Paper>
   <Box sx={{ width: '100%', margin: '0 auto', paddingTop: '10px' }}>
      <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
       Payment
        </Typography>
      <FormControl fullWidth sx={{ marginBottom: '20px' }}>
        <InputLabel color='secondary'>Select Payment</InputLabel>
        <Select
          value={paymentMethod}
          label="Payment Method"
          color='secondary'
          onChange={handlePaymentChange}
        >
          <MenuItem value="card">Credit/Debit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
          <MenuItem value="upi">UPI</MenuItem>
          <MenuItem value="net">Net Banking</MenuItem>
          <MenuItem value="cod">Cash on Delivery</MenuItem>
        </Select>
      </FormControl>
    </Box> 
      <Paper elevation={3} style={{ padding: '20px', backgroundColor:'lightgrey' }}>
        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
           Order Summary
        </Typography>
         <List>
         {cart.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={`Quantity: ${item.quantity} | Subtotal: R.S. ${(item.price * item.quantity).toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
        <Box mt={3} display="flex" justifyContent="space-between">
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Total</Typography>
          <Typography variant="h6">₹{totalPrice}</Typography>
        </Box>
      </Paper>
      <Box mt={3} textAlign="center">
      <StripeCheckout
       name='Buy Flowers' 
       amount= {totalPrice*100}
       token={handlePlaceOrder}
       onError={handlePaymentFailure} 
       stripeKey="pk_test_51QDOQMEJjow2uAPKioatoIZwZjZ96BsTQqxFAK0CYzujCXojVDAKJDxneRl9Ix1d0LWetkpRgYUrT364XfcoM0dz00Ks4PujG6"
       currency='INR'> 
        <Button
          variant="contained"
          sx={{ backgroundColor: 'black', width: '200px', color: 'white' }}
          size="large"
        >
          Pay Now
        </Button>
        </StripeCheckout>
      </Box>
    </div>
  );
};

export default Payment;


