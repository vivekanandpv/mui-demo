import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import { layoutStyles } from '../style-utils/LayoutStyles';

const Navbar = (props) => {
  const classes = layoutStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={props.handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: props.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap className={classes.title}>
              {props.title}
            </Typography>
            <Avatar alt='Johann Carl Friedrich Gauss' src='/assets/gauss.jpg' />
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
