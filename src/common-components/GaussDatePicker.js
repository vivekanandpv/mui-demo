import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { getInputFieldStyles } from '../style-utils/GaussStyles';

const GaussDatePicker = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const [date, setDate] = useState(props.date);

  const handleDateChange = (date) => {
    props.onInput(date);
    setDate(date);
  };

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin='normal'
          id='date-picker-dialog'
          label={props.label}
          format={props.format}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={inputFieldClasses.root}
          value={date}
          onChange={handleDateChange}
          required={props.required}
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
};

export default GaussDatePicker;
