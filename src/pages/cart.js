import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  

const Cart = () => {
 
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart); // get the data 
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrement = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity < 1000) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const handleCheckout = () => {
    navigate('/payment');  // Navigate to the payment page
  };
  return (
    <div style={{ padding: '20px', marginTop: "120px" }}>
      {cart.length === 0 ? (
        <>
          <Typography textAlign="center" variant="body1">YOUR CART IS EMPTY</Typography>
          <div className="shop-products-button-container">
            <Link to="/">
              <Button variant="contained" color="secondary" style={{ marginTop: '20px' }}>
                SHOP OUR PRODUCTS
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <>
      
          <Grid container spacing={3} sx={{ backgroundColor: '#e0e0e0' }}>
          
            <Grid item xs={2}>
              <Typography variant="h6">Product</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Detail</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Quantity</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Total</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Action</Typography>
            </Grid>

          
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <Grid item xs={2}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body1">RS.{item.price}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <div className="cart-container">
                    <button className="cart-button" onClick={() => handleDecrement(item.id)}>
                      -
                    </button>
                    <h4>{item.quantity}</h4>
                    <button className="cart-button" onClick={() => handleIncrement(item.id)}>
                      +
                    </button>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">RS. {(item.price * item.quantity).toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeFromCart(item.id)}
                    fullWidth
                  >
                    Remove
                  </Button>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Box mt={3}>
            <Typography variant="h5">
              Total: ₹ 
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </Typography>
          </Box>
          <Button onClick={handleCheckout} variant="contained" color="secondary" style={{ marginTop: '20px' }}>
            CHECKOUT
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;

