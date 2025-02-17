import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';

function Menu(props) {
    return (
        <div>
          
   <Grid container spacing={2} justifyContent="center" style={{ backgroundColor: "white", padding: "20px" }}>
      {props.flowers.map((flower, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card className="Image_list" sx={{ maxWidth: 300 }} onClick={props.handleButtonClick}>
            <CardMedia component="img" height="360" image={flower.image} alt={flower.name} />
            <CardContent>
              <Typography align="center" variant="h5" component="div">
                {flower.name}
              </Typography>
              <Typography align="center" variant="body2" color="text.secondary">
                {flower.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
       </div>
    )    
  
}
export default Menu;