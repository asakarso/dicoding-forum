import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/actions';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndTalks() {
  return async (dispatch) => {
    try {
      dispatch(showLoading());
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(hideLoading());
    } catch (error) {
      alert(error.message);
    }
  };
}

export { asyncPopulateUsersAndTalks };
