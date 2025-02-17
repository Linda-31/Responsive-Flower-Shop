import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '120px' }}>
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="img/flower17.jpg"  
          alt="Contact Us"
          style={{ width: '100%', height:'550px', borderRadius: '8px' }}
        />
      </div>
      </Grid>
      <Grid item xs={12} md={6}>
      <Typography variant="h5" color='purple' gutterBottom align="center">
        CONTACT US
      </Typography><br></br>
      <Typography variant="body2" color='black' gutterBottom align="center">
      We are a Digital Flower Boutique it would be best if you contact us via email at @flowercompany.in
      OR call on +91 9025300344
      </Typography><br></br><br></br>
      
      {error && (
        <Typography color="error" align="center" variant="body2" paragraph>
          {error}
        </Typography>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              color='secondary'
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              color='secondary'
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              type="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              color='secondary'
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="secondary" type="submit" fullWidth>
              SEND MESSAGE
            </Button>
          </Grid>
        </Grid>
      </form>
      </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

