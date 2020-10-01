import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { customers } from '../dummy/data';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  rightAlign: {
    float: 'right',
  },
}));

const CustomersListPaginated = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const pageCountChangeHandler = (args) => {
    setRowsPerPage(parseInt(args.target.value, 10));
    setCurrentPage(0);
  };

  const pageChangeHandler = (args, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom color='primary'>
              Customers List
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <Typography variant='h6' gutterBottom color='primary'>
                  Customers List
                </Typography>

                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Account Number</TableCell>
                        <TableCell>City</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? customers.slice(
                            currentPage * rowsPerPage,
                            currentPage * rowsPerPage + rowsPerPage
                          )
                        : customers
                      ).map((c) => (
                        <TableRow key={c.id}>
                          <TableCell component='th' scope='row'>
                            {c.id}
                          </TableCell>
                          <TableCell>{c.firstName}</TableCell>
                          <TableCell>{c.lastName}</TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>{c.accountNumber}</TableCell>
                          <TableCell>{c.city}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component='div'
                  count={customers.length}
                  rowsPerPage={rowsPerPage}
                  page={currentPage}
                  onChangePage={pageChangeHandler}
                  onChangeRowsPerPage={pageCountChangeHandler}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default CustomersListPaginated;
