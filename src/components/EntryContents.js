import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import EntryCreator from './EntryCreator';
import EntryEditor from './EntryEditor';
import { Link } from 'provide-page';
import Markdown from 'react-remarkable';

@provide
export default class EntryContents extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedEntryKey: PropTypes.string,
    selectedEntry: PropTypes.object,
    creatingEntry: PropTypes.number.isRequired,
    deletedEntry: PropTypes.bool.isRequired,
    editingEntry: PropTypes.bool.isRequired,
    setDocumentTitle: PropTypes.func.isRequired,
    setStatusCode: PropTypes.func.isRequired
  };

  setPageInfo(props) {
    const { selectedEntryKey, selectedEntry } = props;
    const { creatingEntry, deletedEntry, editingEntry } = props;
    const { setDocumentTitle, setStatusCode } = props;

    if (creatingEntry) {
      setDocumentTitle('Create blog entry');
    } else if (deletedEntry) {
      setDocumentTitle('Deleted entry');
    } else if (selectedEntry) {
      if (editingEntry) {
        setDocumentTitle(`${selectedEntry.name} - edit`);
      } else {
        setDocumentTitle(selectedEntry.name);
      }
    } else if (selectedEntryKey) {
      setDocumentTitle('Not found');
      setStatusCode(404);
    } else {
      setDocumentTitle('Bloggur');
    }
  }

  componentWillMount() {
    this.setPageInfo(this.props);
  }

  componentWillReceiveProps(props) {
    this.setPageInfo(props);
  }

  render() {
    const { classes } = this.props;
    const { selectedEntryKey, selectedEntry } = this.props;
    const { creatingEntry, deletedEntry, editingEntry } = this.props;

    if (creatingEntry) {
      return (
        <EntryCreator/>
      );
    }

    if (deletedEntry) {
      return (
        <div className={classes.EntryContents}>
          Deleted entry!
        </div>
      );
    }

    if (selectedEntry) {
      if (editingEntry) {
        return (
          <EntryEditor/>
        );
      }

      return (
        <div className={classes.EntryContents}>
          <Markdown source={selectedEntry.contents} />

          <Link
            className={classes.EditButton}
            href={`/${selectedEntry.href}/edit`}
          >
            Edit
          </Link>
        </div>
      );
    }

    if (selectedEntryKey) {
      return (
        <div className={classes.EntryContents}>
          Not found!
        </div>
      );
    }

    return null;
  }
}
