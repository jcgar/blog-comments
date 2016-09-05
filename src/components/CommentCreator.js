import React, { PropTypes } from 'react';
import { Form } from 'provide-page';
import { components, routes } from './App';

const CommentCreator = ({
  classes,
  requestSession,
  commentError,
  createComment,
  genCommentId,
  pushRoute,
  replaceRoute,
  entryId,
  entrySlug,
  formId,
  formData,
  defaultValue,
}) => {
  const onSubmit = (event, formData) => {
    if (!formData || !formData.commentContents) {
      return;
    }

    formData.commentByUserId = requestSession.userId;
    formData.commentByEntryId = entryId;

    createComment(formData, genCommentId, () => {
      pushRoute(routes.blogDetail(requestSession.userName, entryId, entrySlug));
    });
  };

  if (!requestSession.userId) {
    replaceRoute(routes.login());
  }


  return (
    <Form
      className={classes.EntryCreator}
      formId={formId}
      serverSide={true}
      onSubmit={onSubmit}
    >
      <textarea
        className={classes.EntryCreatorInput}
        name="commentContents"
        defaultValue={defaultValue}
        autoFocus
      />

      <p> New Comment </p>

      <button className={classes.SaveButton} type="submit">
        Send
      </button>

      {commentError
        ? (
        <div className={classes.EntryError}>
            {commentError}
        </div>
        )
        : undefined
      }
    </Form>
  );
};

CommentCreator.propTypes = {
  classes: PropTypes.object.isRequired,
  requestSession: PropTypes.object.isRequired,
  commentError: PropTypes.string.isRequired,
  createComment: PropTypes.func.isRequired,
  genCommentId: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  replaceRoute: PropTypes.func.isRequired,
  entryId: PropTypes.string.isRequired,
  entrySlug: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  formData: PropTypes.object,
  defaultValue: PropTypes.string.isRequired,
};

CommentCreator.defaultProps = {
  formId: 'CommentCreator',
  defaultValue:   [
    `default comment`,
  ].join('\n'),

};
export default CommentCreator;
