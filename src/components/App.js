import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import Header from './Header';
import Entries from './Entries';

@provide
export default class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.App}>
        <Header/>
        <Entries/>
      </div>
    );
  }
}
