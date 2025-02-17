import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { styled} from '@mui/system';
import { useNavigate } from 'react-router-dom'; 
const ResponsiveButton = styled(Button)(({ theme }) => ({
    width: 'auto', 
    fontWeight: 'bold',
    padding: theme.spacing(2), 
    [theme.breakpoints.up('sm')]: {
      width: 'auto', 
    },
  }));
  

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  const onSubmit = (data) => {

    const randomId = String(Math.random());
    const dataWithId = { ...data, id: randomId };
    const existingData = JSON.parse(localStorage.getItem('signupData')) || [];
    existingData.push(dataWithId);
    localStorage.setItem('signupData', JSON.stringify(existingData));
    console.log('Form data saved to localStorage:', dataWithId);
    navigate('/login');  // Navigate 
    
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}
      >
         <Typography component="h1" variant="h4" color='secondary' textAlign="center" sx={{fontFamily:"times new roman"}}>
                SIGN UP
        </Typography>
          <Typography component="h1" variant="h6"  textAlign="center" color="gray" sx={{fontFamily:"times new roman"}}>
                Signup to continue
            </Typography>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <TextField
            label="Name"
            variant="outlined"
            color='secondary'
            fullWidth
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            variant="outlined"
             color='secondary'
            fullWidth
            margin="normal"
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email format'
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
             color='secondary'
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        <ResponsiveButton color="secondary" variant="contained" type="submit" >
        SIGN UP
        </ResponsiveButton>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
