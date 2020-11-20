import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GaussSelect from '../common-components/GaussSelect';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const PopoverDemo = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [insidePopover, setInsidePopover] = useState(false);
  const [insideButton, setInsideButton] = useState(false);

  const handleTriggerMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setInsideButton(true);
  };

  const handleTriggerMouseLeave = () => {
    setInsideButton(false);
  };

  const handlePopoverMouseEnter = () => {
    setInsidePopover(true);
  };

  const handlePopoverMouseLeave = () => {
    setInsidePopover(false);
  };

  useEffect(() => {
    console.log(`Popover: ${insidePopover}; Button: ${insideButton}`);
    if (!insidePopover && !insideButton) {
      setAnchorEl(null);
    }
  }, [insidePopover, insideButton]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <GaussSelect label='Select Country' />
      <Button
        aria-describedby={id}
        variant='contained'
        color='primary'
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={() => setInsideButton(false)}
      >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        // onClose={handleClose}
        onMouseEnter={() => setInsidePopover(true)}
        onMouseLeave={handlePopoverMouseLeave}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </div>
  );
};

export default PopoverDemo;
