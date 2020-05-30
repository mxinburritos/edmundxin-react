import React from 'react';
import { AppBar, Toolbar, Button, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar>
        <Grid container justify="space-between" spacing={24}>
          <Grid item>
            <Typography
              type="title"
              variant="h6"
              color="inherit"
              style={{ marginLeft: 100 }}
            >
              Edmund Xin
            </Typography>
          </Grid>
          <Grid item>
            <div style={{ marginRight: 100 }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button pt={100}>Projects</Button>
              </Link>
              <Link to="/resume" style={{ textDecoration: 'none' }}>
                <Button pt={100}>Resume</Button>
              </Link>
              <Link to="/contactme" style={{ textDecoration: 'none' }}>
                <Button pt={100}>Projects</Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
