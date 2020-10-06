import { getUserInformation } from '@/services/userInformation';

export default {
  namespace: 'userInformation',
  state: {},
  effects: {
    *fetchUserInformation({ accessToken, uuid }, { call, put }) {
      const userDetails = yield call(getUserInformation, { accessToken, uuid });
      yield put({
        type: 'setUserInformation',
        payload: userDetails,
      });
    },
  },
  reducers: {
    setUserInformation(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
  },
};
