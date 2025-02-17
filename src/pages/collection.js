import React, { useEffect, useState } from 'react';
import { Card,CardContent, CardMedia, TextField, Typography, Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import "../styles/App.css";
import original_data from '../Assets/productData';


function Collection() {

const[data, setData] =useState(original_data)
const [search, setSearch]=useState("")
useEffect(() => {
    let data_rev = original_data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setData(data_rev)
    }, [search]);

    return(
        
        <div style={{textAlign:"center", margin:"2%"}}>  
        <Typography color="black" variant="h5" component="div" align="center" sx={{ flexGrow: 1, marginTop:12, marginBottom:5 }}>
          NEW COLLECTION </Typography> 
        <TextField  sx={{ marginBottom:10 }}id="standard-basic" placeholder="SEARCH..." slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" fontSize="large"/>
              </InputAdornment>
            ),
          },
        }} variant="standard" onChange={(event) => setSearch(event.target.value)}/>
           
        {data.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No flowers found
        </Typography>
      ) : (
        <Grid container spacing={2}>
      
        {data.map((item)=>{
            return (
        
             <Grid className='Image_list' item xs={12} sm={6} md={4} lg={4}>
                <Card >
                <Link to={`/item/${item.id}`}>
                    <CardMedia
                       sx={{height:{lg:360, md:500, sm:700, xs:360}}}
                       image={item.image}>
                    </CardMedia>
                  </Link>
                </Card>
                <CardContent>
                <Typography  align="center" variant="h5" component="div">
                {item.title}
                </Typography>
                <Typography align="center" variant="body2" color="text.secondary">
                RS. {item.price}
                </Typography>
              </CardContent>
              </Grid>
                );
              })}
            </Grid>
          )}
        </div>
      );
    }
export default Collection;
