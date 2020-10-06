import { login } from '@/services/auth';

export default {
  namespace: 'login',
  state: {},

  effects: {
    *logInUser({ userCredentials }, { call, put }) {
      const userInfo = yield call(login, { userCredentials });
      yield put({
        type: 'updateUserInformation',
        payload: userInfo,
      });
    },
  },

  reducers: {
    updateUserInformation(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
  },
};
