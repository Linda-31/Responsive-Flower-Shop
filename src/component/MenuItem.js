import React from 'react';
import { Grid, Button,Typography} from '@mui/material';

function MenuItem(props){
    return(
    <div>
    <Grid container className="zoom-container" >
     {props.items.map((item, index) => (
     <Grid item xs={12} sm={6} md={4} key={index} >
      <img
        src={item.img}
        alt={item.alt}
        style={{ width: '100%', height: '80%' }}
      />
             <div>
              <Typography variant="h5" sx={{ position:"relative", top:"-280px", textAlign: 'center' , color:"white", textTransform: 'uppercase'}}>
              {item.name}
              </Typography>
              </div>
               <Button variant="contained"sx={{ position:"relative", top:"-250px", left:"165px", backgroundColor:"white" , color:"black", border: "none",  borderRadius: '0', width: "160px", height: "50px", 
               "&:hover": {backgroundColor: "transparent", color: "white",
                border: "2px solid white"}}} onClick={props.handleButtonClick}>
               Shop Now
              </Button>
              
    </Grid>
  ))}
</Grid>
</div>
)    

}
export default MenuItem;