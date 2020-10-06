import React, { Component } from 'react';
import { connect } from 'umi';
import { Button, Input } from 'antd';
import SearchResultCardComponent from '../../../components/SearchResultCard';
import styles from './style.less';
// import {routerRedux} from "dva/router";

const { Search } = Input;

@connect((state) => ({
  search: state.search,
}))
class AllShops extends Component {
  searchProduct = (value) => {
    const { dispatch } = this.props;
    const text = value;
    const page = 1;
    const limit = 5;

    dispatch({
      type: 'search/searchProduct',
      text,
      page,
      limit,
    }).then(() => {
      const { search } = this.props;
      console.log(search, 'PROPS');
    });
  };

  render() {
    console.log(this.props, 'PROPS in all_shops');

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            <img
              className={styles.image}
              src="http://localhost:8000/company.png"
              alt="company logo"
            />
          </div>
          <Search
            className={styles.search}
            placeholder="search product"
            onSearch={(value) => this.searchProduct(value)}
            enterButton="Search"
            size="large"
          />
          <div className={styles.buttonContainer}>
            <Button type="primary" size="large" className={`${styles.button}  ${styles.help}`}>
              Help
            </Button>
            <Button type="primary" size="large" className={`${styles.button} ${styles.join}`}>
              Join
            </Button>
          </div>
        </div>
        <div className={styles.result}>
          <div className={styles.heading}>
            {/* TODO: the props value is not updating */}
            <h4 className={styles.subHeader}>
              Showing all results for{' '}
              <span className={styles.resultText}>
                {JSON.parse(this.props.search.product).data.text}
              </span>
            </h4>
          </div>
          <div>
            <SearchResultCardComponent shops={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(AllShops);
