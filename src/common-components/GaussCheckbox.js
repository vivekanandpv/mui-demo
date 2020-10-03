import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import { getInputFieldStyles } from '../style-utils/GaussStyles';

const GaussCheckBox = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const handleChecked = (e) => {
    props.onChange(e.target.checked);
  };
  return (
    <React.Fragment>
      <FormControl className={inputFieldClasses.root}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.checked}
              onChange={handleChecked}
              color={props.color ? props.color : 'primary'}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label={props.label}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default GaussCheckBox;
