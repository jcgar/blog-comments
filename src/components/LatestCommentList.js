import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Comment from './Comment';

const LatestCommentList = ({
  classes,
  query,
  queryOptions,
  result
}) => {

  console.log("LATEST COMMENT LIST", result);

  return (
    <div className={classes.LatestEntryList}>
      <h3 className={classes.LatestEntryListHeader}>
      Latest comments
      </h3>

    {result && result.length
      ? result.map(commentState => (
        <Comment
          {...commentState}
          userId={commentState.commentByUserId}
          key={`commentId=${commentState.commentId}`}
          selected={false}
        />
      ))
      : (
      <div className={classes.NothingYet}>
          Nothing yet!
      </div>
      )
    }

    </div>
);
}

LatestCommentList.propTypes = {
  classes: PropTypes.object.isRequired,
  query: PropTypes.any,
  queryOptions: PropTypes.object.isRequired,
  result: PropTypes.any
};

LatestCommentList.defaultProps = {
  query: ({ props }) => ({ commentDeleted: false, commentByEntryId: props.entryId }),
  queryOptions: {
    limit: 10,
    select: [
      'commentByUserId',
      'commentId',
      'commentName',
    ]
  }
};

export default LatestCommentList;
