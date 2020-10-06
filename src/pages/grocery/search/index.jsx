import React, { Component } from 'react';
import { connect } from 'umi';
import { routerRedux } from 'dva/router';
import { Modal, Button, Input, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import LoginComponent from '../../../components/Login/Login';

import styles from './style.less';

const { Search } = Input;

@connect((state) => ({
  search: state.search,
}))
class SearchInput extends Component {
  state = { visible: false };

  userDetail = (value) => {
    // console.log(value, "VALUE in userDetails search")
    /*
    * email: "aman@gmail.com"
name: "aman"
password: "$2b$10$0eWp7sUo2HE27JBaeC8KoOzY2eeFrA5xTBU9rm7nAAKeoaiYDYKqu"
primaryContact: "9611775637"
updatedAt: "2020-08-06T13:13:00.780Z"
uuid: "57e672c9-bc31-4920-84e8-6031b9c4b225"
__v: 0
_id: "5f2aaa9d0dad8f0d61522761"
    * */
    this.setState({
      // uuid: value.uuid,
      email: value.email,
      // name: value.name,
      // primaryContact: value.primaryContact,
      // secondaryContact: value.secondaryContact || '',
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

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
      // console.log(search, "PROPS");
      // search.resultText = value;
      dispatch(routerRedux.push(`/grocery/shops`, { search }));
    });
  };

  changePage = (path) => () => {
    const { dispatch } = this.props;
    dispatch(routerRedux.push(`${path}`));
  };

  menu = (
    <Menu>
      <Menu.Item>
        <a rel="profile page" onClick={this.changePage('/user/profile')}>
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="profile page" onClick={this.changePage('/user/checkout')}>
          Checkout
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="profile page" onClick={this.changePage('/user/order')}>
          Your Order
        </a>
      </Menu.Item>
      {/* //  TODO: terms and services pages */}
      <Menu.Item>
        <a>Terms and Services</a>
      </Menu.Item>
      {/* //  TODO: privacy policy page */}
      <Menu.Item>
        <a>Privacy policy</a>
      </Menu.Item>
      {/* //  TODO: logout API and show join button again */}
      <Menu.Item>
        <a>Logout</a>
      </Menu.Item>
    </Menu>
  );

  render() {
    console.log(this.props, 'PROPS');
    return (
      <div className={styles.container}>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <LoginComponent handleOk={this.handleOk} userDetail={this.userDetail} />
        </Modal>

        <div className={styles.innerContainer}>
          <div>
            <img
              className={styles.image}
              src="http://localhost:8000/company.png"
              alt="motabhaai company logo"
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button type="primary" size="large" className={`${styles.button}  ${styles.help}`}>
              Help
            </Button>
            {this.state && this.state.email ? (
              <Dropdown overlay={this.menu}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  <Avatar icon={<UserOutlined />} />
                </a>
              </Dropdown>
            ) : (
              <Button
                type="primary"
                size="large"
                className={styles.button}
                onClick={this.showModal}
              >
                Join
              </Button>
            )}
          </div>
        </div>
        <div className={styles.mainBlock}>
          <span className={styles.header}>Delivers to your doorstep in minutes.</span>
          <span className={styles.subHeader}>From your nearest Motabhaai!</span>
          <Search
            className={styles.search}
            placeholder="enter product name here"
            onSearch={(value) => this.searchProduct(value)}
            enterButton="Search"
            size="large"
          />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}))(SearchInput);
