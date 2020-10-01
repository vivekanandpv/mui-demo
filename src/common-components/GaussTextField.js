import React, { useState } from 'react';
import { getInputFieldStyles } from '../style-utils/GaussStyles';
import TextField from '@material-ui/core/TextField';

const GaussTextField = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const [validationError, setValidationError] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const handleInput = (e) => {
    const value = e.target.value;
    if (props.regex && !props.regex.test(value)) {
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
      />
    </React.Fragment>
  );
};

export default GaussTextField;
