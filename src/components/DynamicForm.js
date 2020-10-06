import React, { useState } from 'react';
import FormFragment from './FormFragment';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const DynamicForm = () => {
  const [formRowsCollection, setFormRowsCollection] = useState([]);

  const handleInput = (value) => {
    const elementIndex = formRowsCollection.findIndex(
      (el) => el.index === value.index
    );

    if (elementIndex !== -1) {
      formRowsCollection[elementIndex] = { ...value };
    } else {
      formRowsCollection.push(value);
    }

    const newCollection = [...formRowsCollection];
    setFormRowsCollection(newCollection);
  };

  const addNew = () => {
    const newCollection = [...formRowsCollection];
    const runningIndex = newCollection.length;
    newCollection.push({ index: runningIndex });
    setFormRowsCollection(newCollection);
  };

  const deleteRow = (index) => {
    const newCollection = [
      ...formRowsCollection.filter((el) => el.index != index),
    ];
    console.log('Fragment delete', formRowsCollection, newCollection);
    setFormRowsCollection(newCollection);
  };

  const handleSubmit = () => {
    console.log('Submit', formRowsCollection);
  };

  return (
    <React.Fragment>
      {formRowsCollection.map((el, i) => (
        <FormFragment
          key={i}
          onChange={handleInput}
          onDelete={deleteRow}
          index={i}
        />
      ))}

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
