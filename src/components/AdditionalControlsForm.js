import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { getInputFieldStyles } from '../style-utils/GaussStyles';
import GaussSelect from '../common-components/GaussSelect';
import GaussTextField from '../common-components/GaussTextField';
import GaussDatePicker from '../common-components/GaussDatePicker';
import GaussCheckBox from '../common-components/GaussCheckbox';
import GaussRadio from '../common-components/GaussRadio';
import GaussSwitch from '../common-components/GaussSwitch';
import GaussTabs from '../common-components/GaussTabs';

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

const AdditionalControlsForm = () => {
  const classes = useStyles();

  const [active, setActive] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [income, setIncome] = useState(null);

  const incomeOptions = [
    {
      value: 'low_income',
      label: '< INR 10000',
    },
    {
      value: 'middle_income',
      label: 'INR 10000 to INR 40000',
    },
    {
      value: 'high_income',
      label: '> INR 40000',
    },
  ];

  const submitHandler = () => {
    const formData = {
      active,
      newsletter,
      income,
    };

    console.log('Form Submit', formData);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom color='primary'>
              Additional Controls Form
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <GaussCheckBox
                  checked={active}
                  onChange={setActive}
                  label='Is Active'
                />
                <GaussSwitch
                  checked={newsletter}
                  onChange={setNewsletter}
                  label='Subscribe to our newsletter'
                />
                <GaussRadio
                  value={income}
                  onChange={setIncome}
                  options={incomeOptions}
                />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              className={classes.rightAlign}
              endIcon={<Icon>send</Icon>}
              onClick={submitHandler}
            >
              Primary
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <GaussTabs />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default AdditionalControlsForm;
