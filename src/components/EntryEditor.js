import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import { Form } from 'provide-page';

@provide
export default class EntryEditor extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedEntryKey: PropTypes.string.isRequired,
    selectedEntry: PropTypes.object,
    updateEntry: PropTypes.func.isRequired,
    renameEntry: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    pushWindowPath: PropTypes.func.isRequired,
    formId: PropTypes.string
  };

  static defaultProps = {
    formId: 'EntryEditor'
  };

  updateEntry = (event, formData) => {
    if (!formData) {
      return;
    }

    const { selectedEntryKey } = this.props;
    
    if (!formData.contents) {
      this.props.deleteEntry(selectedEntryKey);
      this.props.pushWindowPath(`/`);
      return;
    }

    const { entry } = this.props.updateEntry(selectedEntryKey, formData);
    const { href } = entry;

    if (selectedEntryKey !== href) {
      this.props.renameEntry(selectedEntryKey, href);
    }

    this.props.pushWindowPath(`/${href}`);
  };

  render() {
    const { classes, formId, selectedEntry } = this.props;

    return (
      <Form
        formId={formId}
        className={classes.EntryEditor}
        onSubmit={this.updateEntry}
      >
        <textarea
          className={classes.EntryEditorInput}
          name="contents"
          defaultValue={selectedEntry && selectedEntry.contents}
          autoFocus
        />

        <button className={classes.SaveButton} type="submit">
          Save
        </button>
      </Form>
    );
  }
}
