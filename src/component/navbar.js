import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { NavLink } from "react-router-dom";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
   // NextPage 
   navigate('/login');
 };

 const cartButtonClick = () => {
  // NextPage 
  navigate('/cart');
};
 
  function activeLink ({isActive}) {
      return {color:isActive?"purple":"black"};
    }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}  sx={{ textAlign: "center"}}>
     <li>
          <NavLink activeClassName="active" to={"/"}>
          </NavLink>
        </li>
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/Home"} style={activeLink}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/collection"} style={activeLink}>COLLECTIONS</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={activeLink}>CONTACT</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"}  color="black" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <img src="/img/logo.jpg" alt="Logo" style={{ width: '70px', height: 'auto'}} />
            <Typography
              color="black"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
               THE FLOWER COMPANY
            
            </Typography>
            
            <Box  sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
              <li>
          <NavLink activeClassName="active" to={"/"}>
          </NavLink>
        </li>
              <li>
                  <NavLink activeClassName="active" to={"/"}>
                  
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Home"} style={activeLink}>HOME</NavLink>
                </li>
                <li>
                  <NavLink  to={"/collection"} style={activeLink}>COLLECTIONS</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} style={activeLink}>CONTACT</NavLink>
                </li>
                     <PersonOutlineOutlinedIcon  onClick={handleButtonClick} style={{ marginLeft:32,marginRight: 5, color: 'purple'  }} fontSize="large" />
          <LocalMallOutlinedIcon onClick={cartButtonClick} style={{ marginLeft:12,marginRight: 5,color: 'purple'  }} fontSize="large"/>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
