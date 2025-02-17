import React from 'react';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, Grid, Typography, Box } from '@mui/material';

function Review(props) {

  const {flowerShopReviews} = props; 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        setUsers(response.data); 
        setLoading(false);  
      } catch (error) {
        setError(error.message); 
        setLoading(false);  
      }
    };

    fetchUsers(); 
  }, []);  

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const usersToDisplay = users.slice(0, 3);
    return(
        <>
       <div >
      <Typography  color="black" variant="h5" component="div" align="center"sx={{  marginBottom: 3}} >
        RECENT REVIEWS
       </Typography>
       <Grid container spacing={3}  sx={{ paddingLeft: 5, paddingRight: 5 }}>
        {usersToDisplay.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card >
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    alt={`${user.name}'s avatar`}
                    src={user.avatar}
                    sx={{ width: 50, height: 50, marginRight: 2 }}
                  />
                  <div>
                    <Typography variant="h6" component="strong">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      "{flowerShopReviews[index].review}"
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
        </>
    )
}
export default Review;