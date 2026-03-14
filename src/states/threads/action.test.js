import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import {
  addThreadActionCreator,
  asyncAddThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralizeVoteThread,
  asyncToggleUpVoteThread,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  upVoteThreadActionCreator,
} from './actions';

/**
 * skenario test:
 * - asyncAddThread thunk
 *  - should dispatch action correctly when add thread success
 *  - should dispatch action and call alert correctly when add thread failed
 * - asyncToggleUpVoteThread thunk
 *  - should dispatch action correctly when up vote thread success
 *  - should dispatch action and call alert correctly when up vote thread failed
 * - asyncToggleDownVoteThread thunk
 *  - should dispatch action correctly when down vote thread success
 *  - should dispatch action and call alert correctly when down vote thread failed
 * - asyncToggleNeutralizeVoteThread thunk
 *  - should dispatch action correctly when down neutralize thread success
 *  - should dispatch action and call alert correctly when neutralize vote thread failed
 */

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeAuthUser = {
  id: 'users-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddThread({ title, body, category })(dispatch); thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;

    delete api._createThread;
  });

  it('should dispatch action correctly when add thread success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadResponse);
    // mock dipacth
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeThreadResponse.title,
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      addThreadActionCreator(fakeThreadResponse),
    );
  });

  it('should dispatch action and call alert correctly when add thread failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddThread({
      title: fakeThreadResponse.title,
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
    })(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncToggleUpVoteThread(threadId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._upVoteThread = api.upVoteThread;
  });

  afterEach(() => {
    api.upVoteThread = api._upVoteThread;

    delete api._upVoteThread;
  });

  it('should dispatch action correctly when up vote thread success', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });

    // action
    await asyncToggleUpVoteThread(fakeThreadResponse.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      upVoteThreadActionCreator({
        threadId: fakeThreadResponse.id,
        userId: fakeAuthUser.id,
      }),
    );
  });

  it('should dispatch action and call alert correctly when up vote thread failed', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncToggleUpVoteThread(fakeThreadResponse.id)(dispatch, getState);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncToggleDownVoteThread(threadId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._downVoteThread = api.downVoteThread;
  });

  afterEach(() => {
    api.downVoteThread = api._downVoteThread;

    delete api._downVoteThread;
  });

  it('should dispatch action correctly when down vote thread success', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });

    // action
    await asyncToggleDownVoteThread(fakeThreadResponse.id)(dispatch, getState);

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      downVoteThreadActionCreator({
        threadId: fakeThreadResponse.id,
        userId: fakeAuthUser.id,
      }),
    );
  });

  it('should dispatch action and call alert correctly when down vote thread failed', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncToggleDownVoteThread(fakeThreadResponse.id)(dispatch, getState);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});

describe('asyncToggleNeutralizeVoteThread(threadId)(dispatch, getState); thunk', () => {
  beforeEach(() => {
    api._neutralizeVoteThread = api.neutralizeVoteThread;
  });

  afterEach(() => {
    api.neutralizeVoteThread = api._neutralizeVoteThread;

    delete api._neutralizeVoteThread;
  });

  it('should dispatch action correctly when neutralize vote thread success', async () => {
    // arrange
    // stub implementation
    api.neutralizeVoteThread = () => Promise.resolve();
    // mock dipacth
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });

    // action
    await asyncToggleNeutralizeVoteThread(fakeThreadResponse.id)(
      dispatch,
      getState,
    );

    // assert
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteThreadActionCreator({
        threadId: fakeThreadResponse.id,
        userId: fakeAuthUser.id,
      }),
    );
  });

  it('should dispatch action and call alert correctly when neutralize vote thread failed', async () => {
    // arrange
    // stub implementation
    api.neutralizeVoteThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock getState
    const getState = () => ({ authUser: fakeAuthUser });
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncToggleNeutralizeVoteThread(fakeThreadResponse.id)(dispatch, getState);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
