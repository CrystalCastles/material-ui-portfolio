import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from './NavBar.css'

const navBar = () => {
  return (
    <div>
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.Typography} variant="title" color="inherit">
            dp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default navBar;