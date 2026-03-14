import { describe, expect, it } from 'vitest';
import detailThreadReducer from './reducer';

/**
 * skenario test:
 * - detailThreadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the detail thread when given by RECEIVE_THREAD_DETAIL action
 *  - should return the detail thread with up voted thread when given by UP_VOTE_THREAD_DETAIL action
 *  - should return the detail thread with down voted thread when given by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the detail thread with neutralize voted thread when given by NEUTRALIZE_VOTE_THREAD_DETAIL action
 *  - should return the comments with the new comment when given by ADD_COMMENT action
 *  - should return the detail thread with up voted comment when given by UP_VOTE_COMMENT action
 *  - should return the detail thread with down voted comment when given by DOWN_VOTE_COMMENT action
 *  - should return the detail thread with neutralize voted comment when given by NEUTRALIZE_VOTE_COMMENT action
*/

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    //arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detail thread when given by RECEIVE_THREAD_DETAIL action', () => {
    //arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        detailThread:
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            owner: {
              id: 'users-1',
              name: 'John Doe',
              avatar: 'https://generated-image-url.jpg'
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
                  avatar: 'https://generated-image-url.jpg'
                },
                upVotesBy: [],
                downVotesBy: []
              }
            ]
          }
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return the detail thread with up voted thread when given by UP_VOTE_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        'userId': 'users-1',
        'threadId': 'thread-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      });
  });

  it('should return the detail thread with down voted thread when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        'userId': 'users-1',
        'threadId': 'thread-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      });
  });

  it('should return the detail thread with neutralize voted thread when given by NEUTRALIZE_VOTE_THREAD_DETAIL action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
      payload: {
        'userId': 'users-1',
        'threadId': 'thread-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [],
        downVotesBy: [],
      });
  });

  it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment:
          {
            id: 'comment-4',
            content: 'Ini adalah komentar keempat',
            createdAt: '2022-06-21T07:00:00.000Z',
            upVotesBy: [],
            downVotesBy: [],
            owner: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com'
            }
          },
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [...initialState.comments, action.payload.comment]
      }
    );
  });

  it('should return the detail thread with up voted comment when given by UP_VOTE_COMMENT action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'UP_VOTE_COMMENT',
      payload: {
        'userId': 'users-1',
        'commentId': 'comment-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [{
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
          downVotesBy: [],
        }]
      });
  });

  it('should return the detail thread with down voted comment when given by DOWN_VOTE_COMMENT action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'DOWN_VOTE_COMMENT',
      payload: {
        'userId': 'users-1',
        'commentId': 'comment-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [{
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [action.payload.userId],
        }]
      });
  });

  it('should return the detail thread with neutralize voted comment when given by NEUTRALIZE_VOTE_COMMENT action', () => {
    //arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg'
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
            avatar: 'https://generated-image-url.jpg'
          },
          upVotesBy: [],
          downVotesBy: []
        }
      ]
    };

    const action = {
      type: 'NEUTRALIZE_VOTE_COMMENT',
      payload: {
        'userId': 'users-1',
        'commentId': 'comment-1',
      },
    };

    //action
    const nextState = detailThreadReducer(initialState, action);

    //assert
    expect(nextState).toEqual(
      {
        ...initialState,
        comments: [{
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: [],
        }]
      });
  });
});