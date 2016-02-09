import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import { Form } from 'provide-page';

@provide
export default class EntryCreator extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    creatingEntry: PropTypes.number.isRequired,
    setEntry: PropTypes.func.isRequired,
    editEntry: PropTypes.func.isRequired,
    pushWindowPath: PropTypes.func.isRequired,
    formId: PropTypes.string
  };

  static defaultProps = {
    formId: 'EntryCreator'
  };

  getDefaultValue() {
    return [
      `# New Blog Entry`,
      ``,
      `### ${new Date(this.props.creatingEntry).toString()}`,
      ``,
      `Markdown is supported.`
    ].join('\n');
  }

  setEntry = (event, formData) => {
    if (!formData || !formData.contents) {
      return;
    }

    const { entry } = this.props.setEntry(null, formData);

    this.props.pushWindowPath(`/${entry.href}`);
  };

  render() {
    const { classes, formId } = this.props;

    return (
      <Form
        formId={formId}
        className={classes.EntryCreator}
        onSubmit={this.setEntry}
      >
        <textarea
          className={classes.EntryCreatorInput}
          name="contents"
          defaultValue={this.getDefaultValue()}
          autoFocus
        />

        <button className={classes.SaveButton} type="submit">
          Save
        </button>
      </Form>
    );
  }
}
