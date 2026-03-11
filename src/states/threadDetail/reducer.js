import { ActionType } from './action';

function detailThreadReducer(detailThread = null, action = {}) {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAIL:
    return action.payload.detailThread;
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.UP_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
        ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
        : detailThread.upVotesBy.concat([action.payload.userId]),
      downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
    };
  case ActionType.DOWN_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
      downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
        ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
        : detailThread.downVotesBy.concat([action.payload.userId]),
    };
  case ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL:
    return {
      ...detailThread,
      upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
      downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
    };
  case ActionType.ADD_COMMENT:
    return { ...detailThread, comments: detailThread.comments.concat(action.payload.comment) };
  case ActionType.UP_VOTE_COMMENT:
    return {
      ...detailThread,
      comments: detailThread.comments.map((comment) => {
        if (comment.id !== action.payload.commentId) {
          return comment;
        }

        return {
          ...comment,
          upVotesBy: comment.upVotesBy.includes(action.payload.userId)
            ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
            : comment.upVotesBy.concat([action.payload.userId]),
          downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }),
    };
  case ActionType.DOWN_VOTE_COMMENT:
    return {
      ...detailThread,
      comments: detailThread.comments.map((comment) => {
        if (comment.id !== action.payload.commentId) {
          return comment;
        }

        return {
          ...comment,
          upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: comment.downVotesBy.includes(action.payload.userId)
            ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
            : comment.downVotesBy.concat([action.payload.userId]),
        };
      }),
    };
  case ActionType.NEUTRALIZE_VOTE_COMMENT:
    return {
      ...detailThread,
      comments: detailThread.comments.map((comment) => {
        if (comment.id !== action.payload.commentId) {
          return comment;
        }

        return {
          ...comment,
          upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }),
    };
  default:
    return detailThread;
  }
}

export default detailThreadReducer;