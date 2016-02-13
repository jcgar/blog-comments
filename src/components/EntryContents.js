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

    switch (true) {
      case creatingEntry > 0:
        setDocumentTitle('Create blog entry');
        break;

      case deletedEntry:
        setDocumentTitle('Deleted entry');
        break;

      case selectedEntry !== null && editingEntry:
        setDocumentTitle(`${selectedEntry.name} - edit`);
        break;

      case selectedEntry !== null:
        setDocumentTitle(selectedEntry.name);
        break;

      case selectedEntryKey !== null:
        setDocumentTitle('Not found');
        setStatusCode(404);
        break;

      default:
        setDocumentTitle('Bloggur');
        break;
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

    switch (true) {
      case creatingEntry > 0:
        return (
          <EntryCreator/>
        );

      case deletedEntry:
        return (
          <div className={classes.EntryContents}>
            Deleted entry!
          </div>
        );

      case selectedEntry !== null && editingEntry:
        return (
          <EntryEditor/>
        );

      case selectedEntry !== null:
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

      case selectedEntryKey !== null:
        return (
          <div className={classes.EntryContents}>
            Not found!
          </div>
        );

      default:
        return null;
    }
  }
}
