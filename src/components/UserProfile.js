import React, { PropTypes } from 'react';
import UserEntryList from './UserEntryList';

const UserProfile = ({
  classes,
  setStatusCode,
  requestSession,
  userName,
  query,
  queryOptions,
  result,
  children
}) => {
  let userId;
  let contents;

  if (userName) {
    userId = result && result[0] && result[0].userId;

    if (userId) {
      setStatusCode(null);
      contents = (
        <UserEntryList userId={userId} />
      );
    } else {
      setStatusCode(404);
      contents = (
        <h2>{userName} not found!</h2>
      );
    }
  } else {
    userId = requestSession.userId;

    if (userId) {
      setStatusCode(null);
      contents = (
        <UserEntryList userId={userId} />
      );
    } else {
      setStatusCode(null);
      contents = (
        <h2>Hello!</h2>
      );
    }
  }

  return (
    <div className={classes.UserProfile}>
      {contents}
      {children}
    </div>
  );
};

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  setStatusCode: PropTypes.func.isRequired,
  requestSession: PropTypes.object.isRequired,
  userName: PropTypes.string,
  query: PropTypes.any.isRequired,
  queryOptions: PropTypes.object.isRequired,
  result: PropTypes.any,
  children: PropTypes.any
};

UserProfile.defaultProps = {
  query: ({ props: { userName } }) => userName ? { userName } : null,
  queryOptions: {
    select: [
      'userId',
      'userName'
    ]
  }
};

export default UserProfile;
