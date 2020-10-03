import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { getInputFieldStyles } from '../style-utils/GaussStyles';

const GaussRadio = (props) => {
  const inputFieldClasses = getInputFieldStyles();
  const handleSelection = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <React.Fragment>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{props.label}</FormLabel>
        <RadioGroup value={props.value} onChange={handleSelection}>
          {props.options.map((v, i) => (
            <FormControlLabel
              value={v.value}
              control={<Radio />}
              label={v.label}
              key={i}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default GaussRadio;
