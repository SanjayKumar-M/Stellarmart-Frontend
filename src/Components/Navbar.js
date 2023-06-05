import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  logo: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
  navbarItem: {
    marginLeft: theme.spacing(),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Stellar Mart
          </Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          <Typography variant="h6" className={classes.navbarItem}>
            Cart
          </Typography>
          <Typography variant="h6" className={classes.navbarItem}>
            Orders
          </Typography>
          <Typography variant="h6" className={classes.navbarItem}>
            Account
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
