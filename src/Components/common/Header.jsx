import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Aggregator
          </Typography>

          {isSmallScreen ? (
            <>
              <Button
                color="inherit"
                aria-label="menu"
                onClick={handleMenuClick}
              >
                Menu
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/feed" onClick={handleMenuClose}>
                  Feed
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleMenuClose}
                >
                  User Profile
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/signup"
                  onClick={handleMenuClose}
                >
                  Sign Up
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/login"
                  onClick={handleMenuClose}
                >
                  Login
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/feed">
                Feed
              </Button>
              <Button color="inherit" component={Link} to="/profile">
                User Profile
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
