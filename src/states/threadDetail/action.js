import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'NEUTRALIZE_VOTE_THREAD_DETAIL',

  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function neutralizeVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(clearThreadDetailActionCreator());
    try {
      dispatch(showLoading());
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
      dispatch(hideLoading());
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    try {
      await api.upVoteThread({ threadId: detailThread.id });
      dispatch(upVoteThreadDetailActionCreator(authUser.id));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    try {
      await api.downVoteThread({ threadId: detailThread.id });
      dispatch(downVoteThreadDetailActionCreator(authUser.id));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    try {
      await api.neutralizeVoteThread({ threadId: detailThread.id });
      dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
      );
    }
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));
    try {
      await api.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
      );
    }
  };
}

function asyncNeutralizeVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id }),
    );
    try {
      await api.neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeVoteCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
