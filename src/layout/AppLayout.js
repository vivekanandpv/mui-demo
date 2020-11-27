import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import { layoutStyles } from '../style-utils/LayoutStyles';
import SideNav from './SideNav';
import MainContent from './MainContent';
import PaymentInitiationForm from '../components/PaymentIntiationForm';
import AdditionalControlsForm from '../components/AdditionalControlsForm';
import CustomersList from '../components/CustomersList';
import CustomersListPaginated from '../components/CustomersListPaginated';
import CustomersListPaginatedSorted from '../components/CustomersListPaginatedSorted';
import TabCards from '../components/TabCards';
import TabsWithTables from '../components/TabsAndTable';
import GaussSimpleTable from '../common-components/GaussSimpleTable';

import { notifications } from '../dummy/tab-tables';
import AccordionDemo from '../components/AccordionDemo';
import DialogDemo from '../components/DialogDemo';
import DynamicForm from '../components/DynamicForm';
import PopoverDemo from '../components/PopoverDemo';
import DataTable from '../components/DataTable';
import SearchableDataTable from '../components/SearchableDataTable';

export default function AppLayout(props) {
  const classes = layoutStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        title='Project Title'
      />
      <SideNav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <MainContent>
        {/* <PaymentInitiationForm /> */}
        {/* <CustomersList /> */}
        {/* <CustomersListPaginatedSorted /> */}
        {/* <AdditionalControlsForm /> */}
        {/* <TabsWithTables /> */}
        {/* <AccordionDemo /> */}
        {/* <DialogDemo /> */}
        {/* <DynamicForm /> */}
        {/* <PopoverDemo /> */}
        {/* <DataTable /> */}
        <SearchableDataTable />
      </MainContent>
    </div>
  );
}
