import React, { useEffect, useState } from 'react';
import { getInputFieldStyles } from '../style-utils/GaussStyles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const GaussTextField = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const [validationError, setValidationError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [value, setValue] = useState(null);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (props.regex && !props.regex.test(value)) {
      setValidationError(true);
      setErrorText(props.validationError);
      props.onInput(null);
    } else {
      setValidationError(false);
      setErrorText(null);
      props.onInput(value);
    }
  }, [value]);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <React.Fragment>
      <TextField
        id='standard-basic'
        label={props.label}
        type={props.type}
        defaultValue={props.defaultValue}
        multiline={props.multiline}
        error={validationError}
        helperText={errorText}
        InputProps={{
          readOnly: props.readOnly,
        }}
        className={inputFieldClasses.root}
        onChange={handleInput}
        value={value}
        variant={props.variant ? props.variant : 'standard'}
      />
    </React.Fragment>
  );
};

export default GaussTextField;
