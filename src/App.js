import React from 'react';
import CommonLogin from './components/CommonLogin';
import SimpleForm from './components/SimpleForm';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <div className='App'>
      {/* <SimpleForm username='kamala' password='jackfruit' /> */}
      {/* <CommonLogin /> */}
      <AppLayout></AppLayout>
    </div>
  );
}

export default App;
