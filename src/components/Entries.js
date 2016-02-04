import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import EntryList from './EntryList';
import EntryContents from './EntryContents';

@provide
export default class Entries extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.Entries}>
        <EntryList/>
        <EntryContents/>
      </div>
    );
  }
}
