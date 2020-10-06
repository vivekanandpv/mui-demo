import React, { useEffect, useState, useRef } from 'react';
import GaussTextField from '../common-components/GaussTextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  rightAlign: {
    float: 'right',
  },
}));

const FormFragment = (props) => {
  const [customerName, setCustomerName] = useState(null);
  const [amount, setAmount] = useState(null);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    transmitChange();

    return () => {
      firstRender.current = true;
    };
  }, [customerName, amount]);

  const onDelete = () => {
    props.onDelete(props.index);
  };

  const transmitChange = () => {
    const formData = { customerName, amount: +amount, index: props.index };

    props.onChange(formData);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={5} spacing={6}>
          <GaussTextField
            label='Your Name'
            type='text'
            regex={/^[A-Za-z ]{3,50}$/}
            validationError='Only characters (max 50)'
            onInput={setCustomerName}
          />
        </Grid>
        <Grid item xs={5} spacing={6} color='primary'>
          <GaussTextField
            label='Amount'
            type='number'
            regex={/^[0-9]{3,10}$/}
            validationError='Only numbers'
            onInput={setAmount}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            aria-label='delete'
            color='secondary'
            size='small'
            onClick={onDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FormFragment;
