import provideCrud from 'provide-crud';

const comment = provideCrud('comment', {
  byUserId: '',
  byEntryId: '',
  contents: '',
  creationTime: new Date().getTime(),
  error: ''
});

const { createComment } = comment.actions;
comment.actions.createComment = (state, genId, onSuccess) => {

  if (!state.commentByUserId) {
    return comment.actions.setCommentError('Invalid user ID for Comment!')
  }
  if (!state.commentByEntryId) {
    return comment.actions.setCommentError('Invalid entry ID for Comment!')
  }
  if (!state.commentContents) {
    return comment.actions.setCommentError('Empty comment!');
  }

  state.commentCreationTime = new Date().getTime();

  return createComment(state, genId, onSuccess);
};

comment.replication.baseQueryOptions = {
  sortBy: {
    commentCreationTime: -1
  }
};

export default comment;
