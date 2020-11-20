import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Icon, Typography } from '@material-ui/core';
import { layoutStyles } from '../style-utils/LayoutStyles';
import GaussTextField from '../common-components/GaussTextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

const CommonLogin = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);

  const classes = layoutStyles();
  const handleLogin = () => {
    if (!username || username.length < 5) {
      setLoginFailedMessage('Enter valid credentials');
      return;
    }

    if (!password || password.length < 6) {
      setLoginFailedMessage('Enter valid credentials');
      return;
    }

    const credentials = {
      username,
      password,
    };

    setOverlayOpen(true);

    axios
      .post('http://localhost:8080/api/v1/auth/login', credentials)
      .then(() => {
        setLoginFailedMessage(null);
        setTimeout(() => {
          setOverlayOpen(false);
          //  route to relevant page based on response.data.roles
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          setOverlayOpen(false);
          setLoginFailedMessage('Login failed. Please try again...');
        }, 1000);
      });

    console.log('Credentials', credentials);
  };
  return (
    <React.Fragment>
      <Grid container className={classes.backgroundImage}>
        <Grid
          className={classes.fullPageComponent}
          container
          direction='row'
          justify='center'
          spacing={5}
        >
          <Grid md={6} xs={'auto'}>
            <Grid
              container
              direction='column'
              justify='flex-end'
              alignItems='flex-end'
              className={classes.fullPageComponent}
            >
              <Grid item>
                <Box margin={5}>
                  <Typography variant='h6' className={classes.shadowText}>
                    Princeps mathematicorum
                  </Typography>
                  <Typography variant='h3' className={classes.shadowText}>
                    Johann Carl Friedrich Gauss
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid md={6} xs={'auto'}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              className={classes.fullPageComponent}
              spacing={5}
            >
              <Grid
                container
                direction='column'
                spacing={5}
                alignItems='stretch'
                md={8}
                xs={'auto'}
              >
                <Grid item>
                  <div className={classes.logo}></div>
                </Grid>

                <Grid item>
                  <GaussTextField
                    label='Username'
                    type='text'
                    onInput={setUsername}
                    variant='outlined'
                  />
                </Grid>
                <Grid item>
                  <GaussTextField
                    label='Password'
                    type='password'
                    onInput={setPassword}
                    variant='outlined'
                  />
                </Grid>
                <Grid item>
                  <Typography variant='body1' color='error'>
                    {loginFailedMessage}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction='column' alignItems='stretch'>
                    <Button
                      variant='contained'
                      color='primary'
                      className={classes.loginButton}
                      endIcon={<Icon>login</Icon>}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={overlayOpen}>
        <Grid container direction='column' alignItems='center' spacing={5}>
          <Grid item direction='row'>
            <Grid container direction='row'>
              <Box marginX={2}>
                <CircularProgress color='inherit' />
              </Box>
              <Box>
                <Typography variant='subtitle1'>
                  Logging in, please wait...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Backdrop>
    </React.Fragment>
  );
};

export default CommonLogin;
