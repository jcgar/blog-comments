import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { routes } from './App';


export function getCommentContents({
  commentId,
  commentContents,
  commentDeleted,
  setStatusCode,
}) {

  let result = commentContents;

  if (commentDeleted) {
    setStatusCode(404);

    if (commentDeleted) {
      result = '## This comment has been deleted.';
    } else {
      result = '# 404\n'
        + '\n'
        + '## Comment not found.\n';
    }
  } else {
    setStatusCode(null);

    if (!commentContents) {
      result = '**Loading...**';
    }
  }

  return result;
};

const Comment = ({
  classes,
  userName,
  commentId,
  commentContents,
  commentDeleted,
  commentByUserId,
  commentByEntryId,
  requestSession,
  setStatusCode,
}) => (
  <div className={classes.Entry}>
    <Markdown
      source={getCommentContents({
        commentContents,
        commentDeleted,
        setStatusCode,
      })}
    />

    {commentByUserId === requestSession.userId
      ? (
/*      <Link
        className={classes.EditButton}
        to={routes.commentEdit(commentId)}
      >
          Edit
      </Link>
      */
      <span />
      )
      : undefined
    }
  </div>
);

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  commentContents: PropTypes.string.isRequired,
  commentDeleted: PropTypes.bool.isRequired,
  commentByUserId: PropTypes.string.isRequired,
  commentByEntryId: PropTypes.string.isRequired,
  requestSession: PropTypes.object.isRequired,
  setStatusCode: PropTypes.func.isRequired,
};

export default Comment;
