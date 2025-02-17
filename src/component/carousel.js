import React from 'react';
import {  Button,Typography} from '@mui/material';
import { Carousel } from "react-responsive-carousel";
function Slide(props) {
    
    return (
   <div>
         <Carousel className="Image" useKeyboardArrows={true} autoPlay interval="10000" transitionTime="1000" showThumbs={false} showStatus={false}>
          {props.images.map((image, index) => (
            <div className="slide">
              <img alt="sample_file"src={image.url} key={index} height={1000}/>
              <div style={{ position: 'absolute', bottom: '130px', left: '620px'}}>
              <Typography variant="h4" sx={{ textAlign: 'center' , color:"white", textTransform: 'uppercase'}}>
              {image.description}
              </Typography>
              </div>
              <div style={{ position: 'absolute', bottom: '60px', left: '700px'}}>
               <Button variant="contained"sx={{ backgroundColor:"white" , color:"black", border: "none",  borderRadius: '0', width: "160px", height: "50px", 
               "&:hover": {backgroundColor: "transparent", color: "white",
                border: "2px solid white"}}} onClick={props.handleButtonClick}>
               Shop Now
              </Button>
              </div>
            </div> 
          ))}
        </Carousel>
   </div>
    )    
  
}
export default Slide;