import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';

/**
 * skenario test:
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
*/

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    //arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    //action
    const nextState = usersReducer(initialState, action);

    //assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    //arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg'
          },
          {
            id: 'user-2',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg'
          },
          {
            id: 'user-3',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg'
          },
        ]
      },
    };

    //action
    const nextState = usersReducer(initialState, action);

    //assert
    expect(nextState).toEqual(action.payload.users);
  });
});