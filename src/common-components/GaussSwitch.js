import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import { getInputFieldStyles } from '../style-utils/GaussStyles';

const GaussSwitch = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const handleChecked = (e) => {
    props.onChange(e.target.checked);
  };
  return (
    <React.Fragment>
      <FormControl className={inputFieldClasses.root}>
        <FormControlLabel
          control={
            <Switch
              checked={props.checked}
              onChange={handleChecked}
              color={props.color ? props.color : 'primary'}
            />
          }
          label={props.label}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default GaussSwitch;
