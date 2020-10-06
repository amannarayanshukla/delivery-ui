import React, { Component } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'umi';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from './styles.less';

@connect((state) => ({
  shopInformation: state.shopInformation,
}))
class SearchResultCardComponent extends Component {
  render() {
    const { search, dispatch } = this.props.shops;
    const data = JSON.parse(search.product);
    const products = data.data.result;
    // const {nextPage, previousPage} = search;

    const productClick = (product) => () => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { shopId, _id } = product;
      const productId = _id;

      console.log(shopId, 'shop ID');
      console.log(productId, 'product ID');

      dispatch({
        type: 'shopInformation/getShopInformation',
        shopId,
        productId,
      }).then(() => {
        // const {shopInformation, shops} = this.props;
        // console.log(this.props,"shopInformation")
        dispatch(routerRedux.push(`/grocery/shops/${shopId}`));
      });
    };

    return products.map((product) => {
      // console.log(product.shopId, " : PRODUCT")
      return (
        <div className={styles.card} key={product.code} onClick={productClick(product)}>
          <div className={styles.innerCard}>
            <div className={styles.title}>
              <div className={styles.cardTitle}>
                <img className={styles.itemImage} src={product.images[0][0]} alt="item logo" />
                <div className={styles.itemDescription}>
                  <h4 className={styles.product}>{product.productName}</h4>
                  <h6 className={styles.category}>{product.category}</h6>
                </div>
              </div>
              <div className={styles.amount}>
                <h3 className={styles.finalAmount}>₹{product.price}</h3>
                <h4 className={styles.initialAmount}>₹75</h4>
              </div>
            </div>
            <div className={styles.description}>
              <h3 className={styles.storeName}>By: Chandu Kirana Mart</h3>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      );
    });
  }
}
export default connect(() => ({}))(SearchResultCardComponent);
