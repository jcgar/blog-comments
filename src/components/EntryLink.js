import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const EntryLink = ({
  classes,
  userName,
  entryId,
  entrySlug,
  entryName
}) => (
  <Link
    className={classes.EntryLink}
    to={`/${userName}/${entryId}/${entrySlug}`}
  >
    {entryName}
  </Link>
);

EntryLink.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  entryId: PropTypes.string.isRequired,
  entrySlug: PropTypes.string.isRequired,
  entryName: PropTypes.string.isRequired
};

export default EntryLink;
