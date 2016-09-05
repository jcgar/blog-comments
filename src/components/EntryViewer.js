import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Entry from './Entry';
import LatestCommentList from './LatestCommentList';
import CommentCreator from './CommentCreator';

const EntryViewer = ({ classes, entryId }) => (
  <div>
    <p> ENTRY {entryId} </p>
    <Entry entryId={entryId} />
    <CommentCreator entryId={entryId} />
    <LatestCommentList entryId={entryId} />
  </div>
  );



EntryViewer.propTypes = {
  classes: PropTypes.object.isRequired,
  entryId: PropTypes.string.isRequired,
};

export default EntryViewer;
