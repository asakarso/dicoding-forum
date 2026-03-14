import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';

/**
 * skenario test:
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with the new thread when given by ADD_THREAD action
 *  - should return the threads with up voted thread when given by UP_VOTE_THREAD action
 *  - should return the threads with down voted thread when given by DOWN_VOTE_THREAD action
 *  - should return the threads with neutralize voted thread when given by NEUTRALIZE_VOTE_THREAD action
*/

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    //arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    //arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          },
        ],
      },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    //arrange
    const initialState = [
      {
        id: 'thread-3',
        title: 'Thread KEtiga',
        body: 'Ini adalah thread Ketiga',
        category: 'General',
        createdAt: '2022-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread:
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          },
      },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with up voted thread when given by UP_VOTE_THREAD action', () => {
    //arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the threads with down voted thread when given by DOWN_VOTE_THREAD action', () => {
    //arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ];
    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with neutralize voted thread when given by NEUTRALIZE_VOTE_THREAD action', () => {
    //arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [
          'users-1'
        ],
        downVotesBy: [],
        totalComments: 0
      }
    ];
    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
      },
    };

    //action
    const nextState = threadsReducer(initialState, action);

    //assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [],
      },
    ]);
  });
});