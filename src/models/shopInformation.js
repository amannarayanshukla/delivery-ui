import { shopInformation } from '@/services/shopInformation';

export default {
  namespace: 'shopInformation',
  state: {},
  effects: {
    *getShopInformation({ shopId, productId }, { call, put }) {
      const shopDetails = yield call(shopInformation, { shopId, productId });
      yield put({
        type: 'setShopDetails',
        payload: shopDetails,
      });
    },
  },
  reducers: {
    setShopDetails(state, { payload }) {
      return {
        ...state,
        shop: payload,
      };
    },
  },
};
