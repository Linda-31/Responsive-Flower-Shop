import React from 'react';
import Carousel from "../component/carousel"; 
import Menu from "../component/Menu"; 
import MenuItem from '../component/MenuItem';
import Footer from '../component/Footer';
import Review from '../component/review';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/App.css";
import {  Typography, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const images = [
  {
    url: "https://images.unsplash.com/photo-1485700281629-290c5a704409?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "New Collection",
  },
  {
    url: "https://images.unsplash.com/photo-1478591658898-a8174c966a8c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Bloosom Flowers",
  },
  {
    url: "https://b2866409.smushcdn.com/2866409/wp-content/uploads/2022/10/bunch_of_pink_roses.png?lossy=1&strip=1&webp=1",
    description: "Admire the Roses",
  },
];


const flowers = [
  {
    name: "Red Roses",
    image: "img/flower3.avif",
    price: "RS. 2,500",
    description: "Beautiful red roses for every occasion.",
  },
  {
    name: "Fresh Blush",
    image: "img/flower5.avif",
    price: "RS. 3,000",
    description: "Fresh blush flowers with a delicate fragrance.",
  },
  {
    name: "Floral Bouquet",
    image: "img/flower1.avif",
    price: "From RS. 3,500",
    description: "A beautiful bouquet of assorted flowers.",
  },
  {
    name: "Blush (in a vase)",
    image: "img/flower7.avif",
    price: "RS. 2,000",
    description: "Blush flowers arranged in a vase for decoration.",
  },
];

const items = [
  { img: "img/c.jpg", name: "Bountiful Bouquets" },
  { img: "img/a.jpg", name: "Blossom Bunch" },
  { img: "img/b.jpg", name: "Petal Creations" }
];


const flowerShopReviews = [
  {
    review: "I absolutely love this flower shop! The arrangement I received was beyond beautiful, and the flowers lasted longer than expected. The customer service was top-notch as well. I'll definitely be coming back for all my floral needs!"
  },
  {
    review: "A wonderful experience! I ordered a bouquet for my anniversary, and it was perfect. The flowers were fresh, vibrant, and smelled amazing. Delivery was prompt, and the whole process was seamless. Highly recommend!"
  },
  {
    review: "Best flower shop in town! I ordered a last-minute bouquet for a friend, and they were able to deliver it within hours. The quality of the flowers was exceptional, and the service was so friendly. I will be a loyal customer from now on!"
  }
];

function Home() {

  const navigate = useNavigate();
  const handleButtonClick = () => {
   navigate('/collection');
   };

   return (
        
        <div className="box">
        <Box sx={{ width: '100%',  margin: '0 auto', padding: 2, marginBottom: 5}}>
        <Carousel images={images} handleButtonClick={handleButtonClick}/>
        </Box>
        <Typography  color="black" variant="h5" component="div" align="center" sx={{ marginBottom: 4}} >
        BEST SELLERS
        </Typography> 
        <Box sx={{ width: '90%',  margin: '0 auto', padding: 2, marginBottom: 8 }}>
        <Menu flowers={flowers} handleButtonClick={handleButtonClick}/> 
        </Box>
        <MenuItem items={items} handleButtonClick={handleButtonClick}/>
        <Box sx={{  marginBottom: 2}}>
        <Review flowerShopReviews={flowerShopReviews}/>
        </Box>
        <Footer/>
       </div>
        )    
      
}


export default Home;