import React from 'react';
import {  Link, Divider } from '@mui/material';
import {  IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import {  Typography, Grid} from '@mui/material';

function Footer(){
return (
    <div>
         <footer style={{ backgroundColor: '#D1A1E2'}}>
    <Divider style={{ backgroundColor: '#fff', margin: '20px 0' }} />
      <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} style={{ marginLeft:60 }}>
            <Typography variant="body2" gutterBottom>
              CONNECT WITH US
            </Typography><br></br>
            <Typography variant="body1" color="#333333">
            Explore our social media channels to read about Our<br></br> latest insights.
            </Typography>
            <div>
              <Link href="https://www.facebook.com" target="_blank" color="inherit">
                <IconButton aria-label="facebook">
                  <Facebook style={{ marginLeft:-10 }}/>
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" color="inherit">
                <IconButton aria-label="instagram">
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="https://twitter.com" target="_blank" color="inherit">
                <IconButton aria-label="twitter">
                  <Twitter />
                </IconButton>
              </Link>
            </div>
          </Grid>
           <Grid item xs={12} md={4} textAlign="right">
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} The Flower Company.
            </Typography>
            <Typography variant="body2" >
          <Link href="https://www.example.com"color="textSecondary"target="_blank">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="https://www.example.com" color="textSecondary" target="_blank">
            Terms of Service
          </Link>
        </Typography>
          </Grid>
        </Grid>
    </footer>

    </div>
)

}
export default Footer;