import React from 'react';
import { AppBar, Toolbar, Button, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

const FormatButton = styled(Button)({
  '&&': {
    textTransform: 'none',
    color: 'white',
    fontSize: '15px',
  },
});

const Navbar = () => {
  return (
    <AppBar color='transparent' position='static' elevation={0}>
      <Toolbar>
        <Grid container justify='center' alignItems='center' spacing={3}>
          <Grid item>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <FormatButton>Home</FormatButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <FormatButton>Projects</FormatButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <FormatButton>About</FormatButton>
            </Link>
          </Grid>
          {/* <Grid item>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
              <FormatButton>Contact</FormatButton>
            </Link>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
