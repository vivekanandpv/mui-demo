import React, { useState } from 'react';
import FormFragment from './FormFragment';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const DynamicForm = () => {
  const [formRowsCollection, setFormRowsCollection] = useState([]);

  const handleInput = (value, index) => {
    let element = formRowsCollection[index];

    if (formRowsCollection[index]) {
      console.log('found');
      formRowsCollection[index] = { ...value };
    } else {
      console.log('not found');
      formRowsCollection.push(value);
    }

    console.log('update', formRowsCollection);

    const newCollection = [...formRowsCollection];
    setFormRowsCollection(newCollection);
  };

  const addNew = () => {
    const newCollection = [...formRowsCollection];
    newCollection.push({ customerName: '', amount: '' });
    setFormRowsCollection(newCollection);
  };

  const deleteRow = (index) => {
    formRowsCollection.splice(index, 1);
    console.log('Delete', index, formRowsCollection);
    const newCollection = [...formRowsCollection];
    setFormRowsCollection(newCollection);
  };

  const handleSubmit = () => {
    console.log('Submit', formRowsCollection);
  };

  return (
    <React.Fragment>
      {formRowsCollection.map((el, i) => {
        console.log('Render', el, i);
        return (
          <FormFragment
            key={i}
            onChange={handleInput}
            onDelete={deleteRow}
            index={i}
            customerName={el.customerName}
            amount={el.amount}
          />
        );
      })}

      <hr />
      <Grid container>
        <Grid item xs={6}>
          <Button variant='contained' color='primary' onClick={addNew}>
            Add New
          </Button>
        </Grid>
        <Grid container xs={6} alignItems='flex-start' justify='flex-end'>
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DynamicForm;
