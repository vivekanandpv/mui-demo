import React, { useState, useEffect } from 'react';
import GaussTextField from '../common-components/GaussTextField';
import { Box, Button, Icon, Typography } from '@material-ui/core';

const SimpleForm = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    console.log(props.username);
    setUsername(props.username);
    setPassword(props.password);
  }, [props.username, props.password]);

  const handleSubmit = () => {
    const formData = {
      username,
      password,
    };
    console.log('Form', formData);
  };

  return (
    <>
      <GaussTextField
        label='Username'
        type='text'
        onInput={setUsername}
        value={username}
        regex={/[0-9]{4}/}
        validationError='Only numbers'
      />
      <GaussTextField
        label='Password'
        type='text'
        onInput={setPassword}
        value={password}
      />
      <Button color='primary' variant='contained' onClick={handleSubmit}>
        Submit
      </Button>
    </>
  );
};

export default SimpleForm;
