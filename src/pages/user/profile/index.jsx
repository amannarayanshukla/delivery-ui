import React, { Component } from 'react';
import { connect } from 'umi';
import { Form, Modal, Layout, Menu, Button, Avatar, Input, Card, Dropdown } from 'antd';
import {
  UserOutlined,
  ShopOutlined,
  QuestionOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

import styles from './styles.less';
import { routerRedux } from 'dva/router';

const { Content, Footer, Sider } = Layout;

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
  userInformation: state.userInformation,
}))
class Profile extends Component {
  state = {
    loading: false,
    visible: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    const accessToken = localStorage.getItem('accessToken');
    const uuid = localStorage.getItem('uuid');

    dispatch({
      type: 'userInformation/fetchUserInformation',
      accessToken,
      uuid,
    }).then(() => {
      console.log(this.props, ' : fetchUserInformation props');
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
    let name;
    let email;
    let primaryContact;
    let secondaryContact;
    let addresses;
    let { payload } = this.props.userInformation;
    if (typeof payload === 'string') {
      payload = JSON.parse(payload);
    }
    if (payload) {
      name = payload.data.user.name;
      email = payload.data.user.email;
      primaryContact = payload.data.user.primaryContact;
      secondaryContact = payload.data.user.secondaryContact;
      addresses = payload.data.address;
    }

    console.log(payload, 'PAYLOAD profile page');
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
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            theme="light"
          >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['3']}>
              <Menu.Item key="1" icon={<ShopOutlined />}>
                Your Order
              </Menu.Item>
              <Menu.Item key="2" icon={<QuestionOutlined />}>
                Need Help
              </Menu.Item>
              <Menu.Item key="3" icon={<ProfileOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="4" icon={<LogoutOutlined />}>
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div>
                  <h2>Your profile</h2>
                  <div className={styles.userBasicInfo}>
                    <div className={styles.userName}>
                      <h5>Name </h5>
                      <Input placeholder="Name" value={name} />
                    </div>
                    <div className={styles.userEmail}>
                      <h5>Email </h5>
                      <Input placeholder="Email" value={email} />
                    </div>
                    <Button type="primary" size="large" className={styles.saveButton}>
                      Save
                    </Button>
                  </div>
                </div>
                <div>
                  <h2>Contact Number</h2>
                  <div className={styles.userContactInfo}>
                    <Card title="Primary" style={{ display: primaryContact ? 'block' : 'none' }}>
                      {primaryContact}
                    </Card>
                    <Card
                      title="Secondary"
                      style={{ display: secondaryContact ? 'block' : 'none' }}
                    >
                      {secondaryContact}
                    </Card>
                  </div>
                </div>
                <div>
                  <h2>Delivery Address</h2>
                  <div className={styles.userDeliveryAddress}>
                    {addresses
                      ? addresses.map((address) => {
                          const {
                            flatNo,
                            houseNo,
                            apartmentName,
                            street,
                            area,
                            landmark,
                            pinCode,
                            city,
                            state,
                          } = address.value[0];
                          const { nickname, contactNumber } = address.value[0].delivery;
                          return (
                            <Card title={nickname}>
                              <p>Contact number {contactNumber}</p>
                              {flatNo} {houseNo} {apartmentName} {street} {area} {landmark}{' '}
                              {pinCode} {city} {state}
                            </Card>
                          );
                        })
                      : ''}

                    <p className={styles.addAddress} onClick={this.showModal}>
                      Add Address
                    </p>
                  </div>
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
            </Content>
            <Footer style={{ textAlign: 'center' }}>Powered by Motabhaai</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default connect(() => ({}))(Profile);
