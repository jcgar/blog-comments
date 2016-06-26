import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';

const Entry = ({
  classes,
  entryId,
  entrySlug,
  entryName,
  entryContents,
  entryDeleted,
  setStatusCode,
  setDocumentTitle
}) => {
  if (entryDeleted || !entryName) {
    setStatusCode(404);
    setDocumentTitle('404 - Entry not found!');

    if (entryDeleted) {
      entryContents = '## This entry has been deleted.';
    } else {
      entryContents = '# 404\n'
        + '\n'
        + '## Entry not found.\n';
    }
  } else {
    setStatusCode(null);
    setDocumentTitle(entryName);

    if (!entryContents) {
      entryContents = '**Loading entry...**';
    }
  }

  return (
    <div className={classes.Entry}>
      <Markdown source={entryContents} />
    </div>
  );
};

Entry.propTypes = {
  classes: PropTypes.object.isRequired,
  entryId: PropTypes.string.isRequired,
  entrySlug: PropTypes.string.isRequired,
  entryName: PropTypes.string.isRequired,
  entryContents: PropTypes.string.isRequired,
  entryDeleted: PropTypes.bool.isRequired,
  setStatusCode: PropTypes.func.isRequired,
  setDocumentTitle: PropTypes.func.isRequired
};

export default Entry;
