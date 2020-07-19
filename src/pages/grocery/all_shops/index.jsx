import React  from 'react';
import {connect} from 'umi';
import {Button,Input,Card, Avatar} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import styles from './style.less'

const { Search } = Input;
const { Meta } = Card;

const AllShops = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <img
            className={styles.image}
            src="https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png"
            alt="company logo"
          />
        </div>
        <Search
          className={styles.search}
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton="Search"
          size="large"
        />
        <div className={styles.buttonContainer}>
          <Button type="primary" size="large" className={`${styles.button}  ${styles.help}`}>
            Help
          </Button>
          <Button type="primary" size="large" className={styles.button}>
            Join
          </Button>
        </div>
      </div>
      <div className={styles.result}>
        <div>
          <h4 className={styles.subHeader}>Showing all results for <span className={styles.resultText}>chawal</span></h4>
        </div>
        <div>
          <div className={styles.card}>
            <div className={styles.innerCard}>
              <div className={styles.title}>
                <div className={styles.cardTitle}>
                  <img
                    className={styles.itemImage}
                    src="https://freeiconshop.com/wp-content/uploads/edd/image-solid.png"
                    alt="item logo"
                  />
                  <div className={styles.itemDescription}>
                    <h4>Chawal</h4>
                    <h6>rice</h6>
                  </div>
                </div>
                <div className={styles.amount}>
                  <h3>final amount</h3>
                  <h4 className={styles.initialAmount}>initial amount</h4>
                </div>
              </div>
              <div className={styles.description}>
                <h3>
                  By: Store name
                </h3>
                <h4>
                  Add to cart
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}))(AllShops);
