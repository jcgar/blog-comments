import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import EntryName from './EntryName';
import { Link } from 'provide-page';

@provide
export default class EntryList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    entries: PropTypes.instanceOf(Map).isRequired,
    selectedEntryKey: PropTypes.string,
    creatingEntry: PropTypes.number.isRequired
  };

  render() {
    const { classes, selectedEntryKey, creatingEntry, entries } = this.props;
    const createHref = '/create';
    let listClassName = classes.EntryList;
    let createClassName = classes.EntryName;

    if (selectedEntryKey) {
      listClassName += ' ' + classes.EntryListHasSelected;
    }

    if (creatingEntry) {
      createClassName += ' ' + classes.EntryNameSelected;
    }

    return (
      <div className={listClassName}>
        {Array.from(entries.keys()).map((entryKey) => (
          <EntryName key={entryKey} entryKey={entryKey} />
        ))}

        <Link
          className={createClassName}
          href={createHref}
        >
          Create blog entry
        </Link>
      </div>
    );
  }
}
