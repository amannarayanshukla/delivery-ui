import { getCheckoutPage } from '@/services/checkoutPage';

export default {
  namespace: 'checkoutPage',
  state: {},
  effects: {
    *getCheckoutPage({ accessToken, uuid }, { call, put }) {
      const checkoutPage = yield call(getCheckoutPage, { accessToken, uuid });
      // console.log(checkoutPage, " : checkoutPage");
      yield put({
        type: 'setCheckoutPage',
        payload: checkoutPage,
      });
    },
  },
  reducers: {
    setCheckoutPage(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
  },
};
