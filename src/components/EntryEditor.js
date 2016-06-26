import React, { PropTypes } from 'react';
import { Form } from 'provide-page';
import { getEntryContents } from './Entry';

const EntryEditor = ({
  classes,
  userName,
  entryId,
  entryName,
  entryContents,
  entryByUserId,
  entryDeleted,
  entryError,
  setEntryError,
  updateEntry,
  deleteEntry,
  replaceRoute,
  pushRoute,
  requestSession,
  setStatusCode,
  setDocumentTitle,
  formId,
  formData
}) => {
  const canEdit = entryByUserId === requestSession.userId;
  const onSubmit = (event, formData) => {
    if (!formData) {
      return;
    }

    if (!canEdit) {
      setEntryError(`You don't have permission to do that!`);
      return;
    }

    if (formData.entryContents) {
      updateEntry(formData, ({ entrySlug }) => {
        replaceRoute(`/${userName}/${entryId}/${entrySlug}`);
      });
    } else {
      deleteEntry(() => pushRoute(`/`));
    }
  };

  return (
    <Form
      formId={formId}
      className={classes.EntryEditor}
      onSubmit={onSubmit}
    >
      <textarea
        className={classes.EntryEditorInput}
        name="entryContents"
        defaultValue={getEntryContents({
          entryName,
          entryContents,
          entryDeleted,
          setStatusCode,
          setDocumentTitle
        })}
        autoFocus
      />

      {canEdit
        ? (
          <button className={classes.SaveButton} type="submit">
            Save
          </button>
        )
        : undefined
      }

      {entryError
        ? (
          <div className={classes.EntryError}>
            {entryError}
          </div>
        )
        : undefined
      }
    </Form>
  );
};

EntryEditor.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  entryId: PropTypes.string.isRequired,
  entryName: PropTypes.string.isRequired,
  entryContents: PropTypes.string.isRequired,
  entryByUserId: PropTypes.string.isRequired,
  entryDeleted: PropTypes.bool.isRequired,
  entryError: PropTypes.string.isRequired,
  setEntryError: PropTypes.func.isRequired,
  updateEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  replaceRoute: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  requestSession: PropTypes.object.isRequired,
  setStatusCode: PropTypes.func.isRequired,
  setDocumentTitle: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  formData: PropTypes.object
};

EntryEditor.defaultProps = {
  formId: 'EntryEditor'
};

export default EntryEditor;
