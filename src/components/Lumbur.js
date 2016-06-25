import React, { PropTypes } from 'react';
import Header from './Header';

const Lumbur = ({ classes, children }) => (
  <div className={classes.Lumbur}>
    <Header/>

    <div className={classes.Body}>
      {children}
    </div>
  </div>
);

Lumbur.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Lumbur;
