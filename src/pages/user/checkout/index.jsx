import React, { Component } from 'react';
import { connect } from 'umi';
import { Layout, Menu, Button, Avatar, Card, Form, Input, Modal, Dropdown } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { routerRedux } from 'dva/router';

import styles from './styles.less';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

@connect((state) => ({
  checkoutPage: state.checkoutPage,
}))
class Checkout extends Component {
  state = {
    loading: false,
    visible: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    const accessToken = localStorage.getItem('accessToken');
    const uuid = localStorage.getItem('uuid');

    dispatch({
      type: 'checkoutPage/getCheckoutPage',
      accessToken,
      uuid,
    }).then(() => {
      console.log(this.props, ' : setCheckoutPage props');
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
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
    const { visible, loading } = this.state;
    const { payload } = this.props.checkoutPage;
    let data;
    if (typeof payload === 'string') {
      data = JSON.parse(payload).data;
    }

    console.log(payload, ' : payload DATA ');
    console.log(data, ' : payload DATA 2 ');

    return (
      <div>
        <div className={styles.navigation}>
          <Button className={styles.navButton}>Offer</Button>
          <Button className={styles.navButton}>Need Help</Button>
          <Dropdown overlay={this.menu}>
            <a className={styles.navButton} onClick={(e) => e.preventDefault()}>
              <Avatar icon={<UserOutlined />} />
            </a>
          </Dropdown>
        </div>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background-checkout"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div className={styles.order}>
                <div>
                  <div className={styles.deliveryContainer}>
                    <h2>Delivery Address</h2>
                    <div className={styles.addButton} onClick={this.showModal}>
                      <PlusOutlined />
                      <span>Add New</span>
                    </div>
                  </div>
                  <div className={styles.userDeliveryAddress}>
                    <Card title="Home">27 Street, 2569 Heritage Road Visalia, CA 93291</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                    <Card title="Home">27 Street, 2569 Heritage Road Visalia, CA 93291</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                    <Card title="Home">27 Street, 2569 Heritage Road Visalia, CA 93291</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                  </div>
                  <Modal
                    visible={visible}
                    title="New address"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        Return
                      </Button>,
                      <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        Submit
                      </Button>,
                    ]}
                  >
                    <Form
                      {...layout}
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="Full name"
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your full name!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Contact Number"
                        name="contact-number"
                        rules={[{ required: true, message: 'Please input your contact number!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Pin code"
                        name="pincode"
                        rules={[{ required: true, message: 'Please input your PIN code!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Flat, House no., Building, Company, Apartment"
                        name="house"
                        rules={[{ required: true, message: 'Please input your address!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Full name"
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Area"
                        name="area"
                        rules={[{ required: true, message: 'Please input your area!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Landmark"
                        name="lankmark"
                        rules={[{ required: true, message: 'Please input your landmark!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Town"
                        name="town"
                        rules={[{ required: true, message: 'Please input your town!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="State"
                        name="state"
                        rules={[{ required: true, message: 'Please input your state!' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
                <div>
                  <div className={styles.deliveryContainer}>
                    <h2>Delivery Schedule</h2>
                    <div className={styles.addButton} onClick={this.showModal}>
                      <PlusOutlined />
                      <span>Add New</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.userDeliveryAddress}>
                    <Card title="Express delivery">90 min express delivery</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                    <Card title="Home">27 Street, 2569 Heritage Road Visalia, CA 93291</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                    <Card title="Home">27 Street, 2569 Heritage Road Visalia, CA 93291</Card>
                    <Card title="Office">33 Baker Street, Crescent Road, CA 65746</Card>
                  </div>
                </div>
              </div>
              <div className={styles.orderDetails}>
                <h2 className={styles.heading}>Order Details</h2>
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect(() => ({}))(Checkout);
