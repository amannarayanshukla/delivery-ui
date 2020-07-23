import React  from 'react';
import {connect} from 'umi';
import {Button,Input} from "antd";
import { ShoppingCartOutlined  } from '@ant-design/icons';
import styles from './style.less'

const { Search } = Input;

const AllShops = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <img
            className={styles.image}
            src='http://localhost:8000/company.png'
            alt="company logo"
          />
        </div>
        <Search
          className={styles.search}
          placeholder="search product"
          onSearch={value => console.log(value)}
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
          <h4 className={styles.subHeader}>Showing all results for <span className={styles.resultText}>chawal</span></h4>
        </div>
        <div>
          <div className={styles.card}>
            <div className={styles.innerCard}>
              <div className={styles.title}>
                <div className={styles.cardTitle}>
                  <img
                    className={styles.itemImage}
                    src="https://i.pinimg.com/564x/c9/12/bd/c912bded9c1049f57c68516b41dd6cd1.jpg"
                    alt="item logo"
                  />
                  <div className={styles.itemDescription}>
                    <h4 className={styles.product}>Chawal Kolum 1kg</h4>
                    <h6 className={styles.category}>rice</h6>
                  </div>
                </div>
                <div className={styles.amount}>
                  <h3 className={styles.finalAmount}>₹61</h3>
                  <h4 className={styles.initialAmount}>₹75</h4>
                </div>
              </div>
              <div className={styles.description}>
                <h3 className={styles.storeName}>
                  By: Chandu Kirana Mart
                </h3>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  // loading={loadings[2]}
                  // onClick={() => this.enterLoading(2)}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.innerCard}>
              <div className={styles.title}>
                <div className={styles.cardTitle}>
                  <img
                    className={styles.itemImage}
                    src="https://i.pinimg.com/564x/ad/06/3d/ad063d5bc4866133a522fc6542758cf4.jpg"
                    alt="item logo"
                  />
                  <div className={styles.itemDescription}>
                    <h4 className={styles.product}>Chawal Majestic 1kg</h4>
                    <h6 className={styles.category}>rice</h6>
                  </div>
                </div>
                <div className={styles.amount}>
                  <h3 className={styles.finalAmount}>₹61</h3>
                  <h4 className={styles.initialAmount}>₹75</h4>
                </div>
              </div>
              <div className={styles.description}>
                <h3 className={styles.storeName}>
                  By: DEF Kirana Store
                </h3>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  // loading={loadings[2]}
                  // onClick={() => this.enterLoading(2)}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}))(AllShops);
