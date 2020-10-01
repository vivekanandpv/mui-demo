import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getInputFieldStyles } from '../style-utils/GaussStyles';

const GaussSelect = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const [validationError, setValidationError] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const handleInput = (e) => {
    const value = e.target.value;
    if (props.required && !value) {
      setValidationError(true);
      setErrorText(props.validationError);
      props.onInput(null);
    } else {
      setValidationError(false);
      setErrorText(null);
      props.onInput(value);
    }
  };
  return (
    <React.Fragment>
      <FormControl className={inputFieldClasses.root}>
        <InputLabel id='demo-simple-select-helper-label'>
          {props.label}
        </InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          error={validationError}
          onChange={handleInput}
        >
          <MenuItem value=''>Please select</MenuItem>
          {props.options.map((o, i) => (
            <MenuItem value={o.value} key={i}>
              {o.text}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText style={validationError ? { color: 'red' } : {}}>
          {props.validationError}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default GaussSelect;
