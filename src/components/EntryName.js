import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import { Link } from 'provide-page';

@provide
export default class EntryName extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    entryKey: PropTypes.string.isRequired,
    entry: PropTypes.object.isRequired,
    isSelectedEntry: PropTypes.bool.isRequired
  };

  render() {
    const { entry } = this.props;
    let className = this.props.classes.EntryName;

    if (this.props.isSelectedEntry) {
      className += ' '+this.props.classes.EntryNameSelected;
    }

    return (
      <Link
        className={className}
        href={`/${entry.href}`}
      >
        {entry.name}
      </Link>
    );
  }
}
