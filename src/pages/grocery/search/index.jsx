import React  from 'react';
import {connect} from 'umi';
import {Button,Input} from "antd";
import styles from './style.less'

const { Search } = Input;

const SearchInput = () => {
  console.log(styles.container)
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
        <div className={styles.buttonContainer}>
        <Button type="primary" size="large" className={`${styles.button}  ${styles.help}`}>
          Help
        </Button>
        <Button type="primary" size="large" className={styles.button}>
          Join
        </Button>
      </div>
      </div>
      <div className={styles.mainBlock}>
        <span className={styles.header}>
          Delivers to your doorstep in minutes.
        </span>
        <span className={styles.subHeader}>
          From the nearest company name!
        </span>
        <Search
          className={styles.search}
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton="Search"
          size="large"
        />
      </div>
    </div>
  );
};

export default connect(() => ({}))(SearchInput);
