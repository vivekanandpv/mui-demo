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

const PaymentInitiationForm = () => {
  const classes = useStyles();

  const [customerName, setCustomerName] = useState(null);
  const [customerReference, setCustomerReference] = useState(null);
  const [customerAccount, setCustomerAccount] = useState(null);
  const [recepientReference, setRecepientReference] = useState(null);
  const [recepientAccount, setRecepientAccount] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [payeeCurrency, setPayeeCurrency] = useState(null);
  const [priorityAmount, setPriorityAmount] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState(null);
  const [debitAmount, setDebitAmount] = useState(null);
  const [dateOfPayment, setDateOfPayment] = useState(null);
  const [dateOfDebit, setDateOfDebit] = useState(null);
  const [debitReason, setDebitReason] = useState(null);
  const [creditReason, setCreditReason] = useState(null);

  const payFromOptions = [
    {
      value: '122222233',
      text: '122222233',
    },
    {
      value: '122222234',
      text: '122222234',
    },
    {
      value: '122222235',
      text: '122222235',
    },
  ];

  const payToOptions = [
    {
      value: '522222233',
      text: '522222233',
    },
    {
      value: '522222234',
      text: '522222234',
    },
    {
      value: '522222235',
      text: '522222235',
    },
  ];

  const paymentTypeOptions = [
    {
      value: 'IMPS',
      text: 'IMPS',
    },
    {
      value: 'NEFT',
      text: 'NEFT',
    },
    {
      value: 'RTGS',
      text: 'RTGS',
    },
  ];

  const currencyOptions = [
    {
      value: 'USD',
      text: 'USD',
    },
    {
      value: 'INR',
      text: 'INR',
    },
    {
      value: 'EUR',
      text: 'EUR',
    },
  ];

  const accountPriorityOptions = [
    {
      value: 'Debit',
      text: 'Debit Account Priority',
    },
    {
      value: 'Credit',
      text: 'Credit Account Priority',
    },
  ];

  const getFormValidity = () => {
    return (
      customerName &&
      customerReference &&
      customerAccount &&
      recepientAccount &&
      recepientReference &&
      paymentType &&
      payeeCurrency &&
      priorityAmount &&
      transactionAmount &&
      dateOfDebit &&
      dateOfPayment
    );
  };

  const submitHandler = () => {
    if (!getFormValidity()) {
      alert('Invalid form');
      return;
    }

    const formData = {
      customerName,
      customerReference,
      customerAccount,
      recepientReference,
      recepientAccount,
      paymentType,
      payeeCurrency,
      priorityAmount,
      transactionAmount,
      debitAmount,
      dateOfPayment,
      dateOfDebit,
      debitReason,
      creditReason,
    };

    console.log('Form Submit', formData);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom color='primary'>
              Initiate Transaction
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Your Account Details
                </Typography>
                <GaussTextField
                  label='Your Name'
                  type='text'
                  regex={/^[A-Za-z ]{3,50}$/}
                  validationError='Only characters (max 50)'
                  onInput={setCustomerName}
                />
                <GaussTextField
                  label='Your Reference'
                  type='text'
                  regex={/^[A-Z0-9]{10}$/}
                  validationError='Alpha-numeric (10)'
                  onInput={setCustomerReference}
                />
                <GaussSelect
                  label='Pay From'
                  options={payFromOptions}
                  required
                  validationError='Select your account'
                  onInput={setCustomerAccount}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Beneficiary Account Details
                </Typography>
                <GaussTextField
                  label='Receipt Reference'
                  type='text'
                  regex={/^[A-Z0-9]{10}$/}
                  validationError='Alpha-numeric (10)'
                  onInput={setRecepientReference}
                />
                <GaussSelect
                  helperText='Choose beneficiary account...'
                  label='Pay To'
                  options={payToOptions}
                  required
                  validationError='Select beneficiary account'
                  onInput={setRecepientAccount}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Currency
                </Typography>
                <GaussSelect
                  helperText='Choose payment type'
                  label='Payment Type'
                  options={paymentTypeOptions}
                  required
                  validationError='Select payment type'
                  onInput={setPaymentType}
                />
                <GaussSelect
                  helperText='Choose payee currency'
                  label='Payee Currency'
                  options={currencyOptions}
                  required
                  validationError='Select currency'
                  onInput={setPayeeCurrency}
                />
                <GaussSelect
                  helperText='Choose priority amount'
                  label='Priority Amount'
                  options={accountPriorityOptions}
                  required
                  validationError='Select priority amount'
                  onInput={setPriorityAmount}
                />
                <GaussTextField
                  label='Transaction Amount'
                  type='number'
                  regex={/^[0-9]{3,15}$/}
                  validationError='Only numbers (3-15)'
                  onInput={setTransactionAmount}
                />

                <GaussTextField
                  label='Actual Debit Amount'
                  type='number'
                  defaultValue='1500000'
                  readOnly
                  onInput={setDebitAmount}
                />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Payment Schedule
                </Typography>
                <GaussDatePicker
                  date={dateOfPayment}
                  format='dd-MM-yyyy'
                  label='Date of Payment'
                  required
                  onInput={setDateOfPayment}
                />
                <GaussDatePicker
                  date={dateOfDebit}
                  format='dd-MM-yyyy'
                  label='Date of Debit'
                  required
                  onInput={setDateOfDebit}
                />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Regulatory Information
                </Typography>
                <GaussTextField
                  label='Reason for Payment (Debit)'
                  multiline
                  onInput={setDebitReason}
                />
                <GaussTextField
                  label='Reason for Payment (Credit)'
                  multiline
                  onInput={setCreditReason}
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
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default PaymentInitiationForm;
