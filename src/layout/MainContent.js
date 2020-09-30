import React from 'react';
import { layoutStyles } from '../style-utils/LayoutStyles';

const MainContent = (props) => {
  const classes = layoutStyles();
  return (
    <React.Fragment>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default MainContent;
