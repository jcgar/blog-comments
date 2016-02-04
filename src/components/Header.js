import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import { Link } from 'provide-page';
import ThemeSelector from './ThemeSelector';

@provide
export default class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedEntryKey: PropTypes.string
  };

  render() {
    const { classes, selectedEntryKey } = this.props;
    let homeIconClassName = classes.HomeIcon;

    if (selectedEntryKey) {
      homeIconClassName += ' ' + classes.HomeIconHasSelected;
    }

    return (
      <div className={classes.Header}>
        <Link className={homeIconClassName} href="/" />

        <span className={classes.Welcome}>
          Welcome!
        </span>

        <ThemeSelector/>
      </div>
    );
  }
}
