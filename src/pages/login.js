import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled} from '@mui/system';
import { TextField, Button, Box, Typography,Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ResponsiveButton = styled(Button)(({ theme }) => ({
  width: 'auto', 
  fontWeight: 'bold',
  padding: theme.spacing(2), 
  [theme.breakpoints.up('sm')]: {
    width: 'auto', 
  },
}));

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Store to localStorage
    const savedData = JSON.parse(localStorage.getItem('signupData')) || [];

    // Find the correct user values
    const user = savedData.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

   
    if (user) {
      navigate('/home');  // Navigate to the home page
    } else {
      setError('Invalid email, or password');  
    }
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        marginTop: 18,
      }}
    >
          <Typography component="h1" variant="h4" color='secondary' textAlign="center" sx={{fontFamily:"times new roman"}}>LOGIN</Typography>
      <Typography component="h1" variant="h6"  textAlign="center" color="gray" sx={{fontFamily:"times new roman"}}>
       Please enter your e-mail and Password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', maxWidth: 400 }}>
       
        <TextField
          label="Email"
          variant="outlined"
          color='secondary'
          fullWidth
          margin="normal"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        
       
        <TextField
          label="Password"
          variant="outlined"
          color='secondary'
          type="password"
          fullWidth
          margin="normal"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        
       
        {error && (
          <Typography variant="body2" color="error" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
    <ResponsiveButton color="secondary" variant="contained" type="submit" className='bt'>
        LOGIN
    </ResponsiveButton>
    <Typography component="h1" variant="h6"   textAlign="center" color="gray" sx={{fontFamily:"times new roman",  mt: 3}}>
       Don't have an account?

       <Link href="/signup"  variant="h8" sx={{textDecoration: 'none', color: 'black' , ml: 1, fontSize: '1.075rem',}}>
            Sign Up
          </Link>
      </Typography>
     
      </form>
    </Box>
  );
}

export default Login;
