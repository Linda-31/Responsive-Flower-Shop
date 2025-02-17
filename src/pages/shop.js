import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import original_data from '../Assets/productData';
import { useReducer } from 'react';
import "../styles/App.css";


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const initialState = { quality: 1 };
function qualityReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      // Increment the quality, max limit is 1000
      return {
        ...state,
        quality: state.quality < 1000 ? state.quality +1 : state.quality,
      };
    case DECREMENT:
      // Decrement the quality, min limit is 1
      return {
        ...state,
        quality: state.quality > 1 ? state.quality - 1 : state.quality,
      };
    default:
      return state;
  }
}

const Shop = () => {
  
  const [state, dispatch] = useReducer(qualityReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };
  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item1 => item1.id === item.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity:state.quality });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    navigate('/cart'); 
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const item = original_data.find((p) => p.id === parseInt(id));

  if (!item) {
    return <p>Product not found</p>;
  }

  return (
  
<Container maxWidth="md" style={{ marginTop: '100px' }}>
<Grid container spacing={12}>
  <Grid item xs={12} md={6}>
    <Box
      component="img"
      src={item.image}
      alt={item.title}
      sx={{
        width: '100%',
        height: '80%',
        objectFit: 'cover', 
      }}
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" gutterBottom sx={{  marginBottom: 2}}>
      {item.title}
    </Typography>
    <Typography variant="h6" color="textSecondary" gutterBottom sx={{  marginBottom: 3}}>
    RS. {item.price}
    </Typography>
    <Typography variant="body1" color="textSecondary" sx={{  marginBottom: 4}} >
      {item.info}
    </Typography>
    <div>
      <div className="buttons-container">
        <button className="quality-button" onClick={handleDecrement}>
          -
        </button>
        <h3>{state.quality}</h3>
        <button className="quality-button" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
    <Button sx={{  marginTop: 6}} size="large" className="btn" variant="contained" color="secondary" type="submit" onClick={() => handleAddToCart(item)} >
    ADD TO CART
    </Button>
  </Grid>
</Grid>
</Container>
  );
};

export default Shop;
