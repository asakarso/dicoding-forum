import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import {
  addCommentActionCreator,
  asyncAddComment,
  asyncDownVoteComment,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteComment,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteComment,
  asyncUpVoteThreadDetail,
  downVoteCommentActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteCommentActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
  upVoteCommentActionCreator,
  upVoteThreadDetailActionCreator,
} from './action';
import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';

/**
 * skenario test:
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 * - asyncUpVoteThreadDetail thunk
 *  - should dispatch action correctly when up vote thread detail success
 * - asyncDownVoteThreadDetail thunk
 *  - should dispatch action correctly when down vote thread detail success
 * - asyncNeutralizeVoteThreadDetail thunk
 *  - should dispatch action correctly when down neutralize thread detail success
 * - asyncAddComment thunk
 *  - should dispatch action correctly when add comment success
 * - asyncUpVoteComment thunk
 *  - should dispatch action correctly when up vote comment success
 * - asyncDownVoteComment thunk
 *  - should dispatch action correctly when down vote comment success
 * - asyncNeutralizeVoteComment thunk
 *  - should dispatch action correctly when down neutralize comment success
 */

const fakeDetailThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

const fakeAuthUser = {
  id: 'users-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeCommentResponse = {
  id: 'comment-3',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
};

describe('asyncReceiveThreadDetail(threadId)(dispatch); thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeDetailThreadResponse);
    // mock dipacth
    const dispatch = vi.fn();

    // action
    await asyncReceiveThreadDetail(fakeDetailThreadResponse.id)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeDetailThreadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpVoteThreadDetail()(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._upVoteThread = api.upVoteThread;
  });

  afterEach(() => {
    api.upVoteThread = api._upVoteThread;

    delete api._upVoteThread;
  });

  it('should dispatch action correctly when up vote thread detail success', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
      detailThread: fakeDetailThreadResponse,
    });

    // action
    await asyncUpVoteThreadDetail()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      upVoteThreadDetailActionCreator(fakeAuthUser.id),
    );
  });
});

describe('asyncDownVoteThreadDetail()(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._downVoteThread = api.downVoteThread;
  });

  afterEach(() => {
    api.downVoteThread = api._downVoteThread;

    delete api._downVoteThread;
  });

  it('should dispatch action correctly when down vote thread detail success', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
      detailThread: fakeDetailThreadResponse,
    });

    // action
    await asyncDownVoteThreadDetail()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      downVoteThreadDetailActionCreator(fakeAuthUser.id),
    );
  });
});

describe('asyncNeutralizeVoteThreadDetail()(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._neutralizeVoteThread = api.neutralizeVoteThread;
  });

  afterEach(() => {
    api.neutralizeVoteThread = api._neutralizeVoteThread;

    delete api._neutralizeVoteThread;
  });

  it('should dispatch action correctly when neutralize vote thread detail success', async () => {
    // arrange
    // stub implementation
    api.neutralizeVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
      detailThread: fakeDetailThreadResponse,
    });

    // action
    await asyncNeutralizeVoteThreadDetail()(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteThreadDetailActionCreator(fakeAuthUser.id),
    );
  });
});

describe('asyncAddComment({ threadId, content })(dispatch); thunk', () => {
  beforeEach(() => {
    api._createComment = api.createComment;
  });

  afterEach(() => {
    api.createComment = api._createComment;

    delete api._createComment;
  });

  it('should dispatch action correctly when add comment success', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.resolve(fakeCommentResponse);
    // mock dipacth
    const dispatch = vi.fn();

    // action
    await asyncAddComment({
      threadId: fakeDetailThreadResponse.id,
      content: fakeCommentResponse.content,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      addCommentActionCreator(fakeCommentResponse),
    );
  });
});

describe('asyncUpVoteComment(threadId, commentId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._upVoteComment = api.upVoteComment;
  });

  afterEach(() => {
    api.upVoteComment = api._upVoteComment;

    delete api._upVoteComment;
  });

  it('should dispatch action correctly when up vote comment success', async () => {
    // arrange
    // stub implementation
    api.upVoteComment = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
    });

    // action
    await asyncUpVoteComment(fakeDetailThreadResponse.id, fakeCommentResponse.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      upVoteCommentActionCreator({ commentId: fakeCommentResponse.id, userId:fakeAuthUser.id }),
    );
  });
});

describe('asyncDownVoteComment(threadId, commentId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._downVoteComment = api.downVoteComment;
  });

  afterEach(() => {
    api.downVoteComment = api._downVoteComment;

    delete api._downVoteComment;
  });

  it('should dispatch action correctly when down vote comment success', async () => {
    // arrange
    // stub implementation
    api.downVoteComment = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
    });

    // action
    await asyncDownVoteComment(fakeDetailThreadResponse.id, fakeCommentResponse.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      downVoteCommentActionCreator({ commentId: fakeCommentResponse.id, userId:fakeAuthUser.id }),
    );
  });
});

describe('asyncNeutralizeVoteComment(threadId, commentId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._neutralizeVoteComment = api.neutralizeVoteComment;
  });

  afterEach(() => {
    api.neutralizeVoteComment = api._neutralizeVoteComment;

    delete api._neutralizeVoteComment;
  });

  it('should dispatch action correctly when neutralize vote comment success', async () => {
    // arrange
    // stub implementation
    api.neutralizeVoteComment = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({
      authUser: fakeAuthUser,
    });

    // action
    await asyncNeutralizeVoteComment(fakeDetailThreadResponse.id, fakeCommentResponse.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteCommentActionCreator({ commentId: fakeCommentResponse.id, userId:fakeAuthUser.id }),
    );
  });
});