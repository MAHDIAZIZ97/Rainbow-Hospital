import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const ImageWithDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Register as User</MenuItem>
        <MenuItem onClick={handleMenuClose}>Register as Doctor</MenuItem>
      </Menu>
    </>
  );
};

export default ImageWithDropdown;
