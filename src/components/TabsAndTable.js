import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import GaussSimpleTable from '../common-components/GaussSimpleTable';
import { notifications } from '../dummy/tab-tables';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  zeroPadding: {
    padding: 0,
  },
}));

export default function TabsWithTables() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const bull = <span className={classes.bullet}>•</span>;

  const handleChange = (event, newValue) => {
    console.log('Tab Change', newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='KYC' {...a11yProps(0)} />
          <Tab label='Deposit' {...a11yProps(1)} />
          <Tab label='Loan' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GaussSimpleTable data={notifications} category='kyc' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GaussSimpleTable data={notifications} category='deposit' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* <GaussSimpleTable data={notifications} category='loan' /> */}
        <h3>Header Header</h3>
      </TabPanel>
    </div>
  );
}
