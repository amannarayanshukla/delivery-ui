import { search } from '@/services/search';

export default {
  namespace: 'search',
  state: {},

  effects: {
    *searchProduct({ text, page, limit }, { call, put }) {
      const products = yield call(search, { text, page, limit });
      yield put({
        type: 'matchedProduct',
        payload: products,
      });
    },
  },
  reducers: {
    matchedProduct(state, { payload }) {
      return {
        ...state,
        product: payload,
      };
    },
  },
};
