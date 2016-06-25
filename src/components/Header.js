import React, { PropTypes } from 'react';
import UserWelcome from './UserWelcome';
import ThemeSelector from './ThemeSelector';

const Header = ({ classes, requestSession }) => (
  <div className={classes.Header}>
    <UserWelcome userId={requestSession.userId} />
    <ThemeSelector/>
  </div>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  requestSession: PropTypes.object.isRequired
};

export default Header;
