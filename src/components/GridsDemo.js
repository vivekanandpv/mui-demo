import React from 'react';
import GaussTextField from '../common-components/GaussTextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: '100%',
  },
  rightAlign: {
    float: 'right',
  },
}));

const GridsDemo = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={6} spacing={6}>
              <Typography variant='h6' gutterBottom color='primary'>
                Your Account Details
              </Typography>
              <GaussTextField
                label='Your Name'
                type='text'
                regex={/^[A-Za-z ]{3,50}$/}
                validationError='Only characters (max 50)'
              />
              <GaussTextField
                label='Your Name'
                type='text'
                regex={/^[A-Za-z ]{3,50}$/}
                validationError='Only characters (max 50)'
              />
              <GaussTextField
                label='Your Name'
                type='text'
                regex={/^[A-Za-z ]{3,50}$/}
                validationError='Only characters (max 50)'
              />
            </Grid>
            <Grid item xs={6} spacing={6}>
              <Typography variant='h6' gutterBottom color='primary'>
                Additional Details
              </Typography>
              <GaussTextField
                label='Your Name'
                type='text'
                regex={/^[A-Za-z ]{3,50}$/}
                validationError='Only characters (max 50)'
              />
              <GaussTextField
                label='Your Name'
                type='text'
                regex={/^[A-Za-z ]{3,50}$/}
                validationError='Only characters (max 50)'
              />
              <Grid container alignItems='flex-end'>
                <Grid item xs={11} spacing={2}>
                  <GaussTextField
                    label='Your Name'
                    type='text'
                    regex={/^[A-Za-z ]{3,50}$/}
                    validationError='Only characters (max 50)'
                  />
                </Grid>
                <Grid item xs={1} spacing={2}>
                  <IconButton color='secondary' aria-label='add an alarm'>
                    <AddCircleOutline />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default GridsDemo;
