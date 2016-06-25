import React, { PropTypes } from 'react';

const Home = ({ classes }) => (
  <div className={classes.Home}>
    Nothing to see here... yet!
  </div>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
