import React, {Component} from 'react';
import {connect} from "umi";
import { Form, Modal, Layout, Menu, Button,Avatar,Input,Card } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, ShopOutlined, QuestionOutlined , LogoutOutlined, ProfileOutlined ,EditOutlined } from '@ant-design/icons';

import styles from './styles.less'

const { Header, Content, Footer, Sider } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

class Profile extends Component {
  state = {
    loading: false,
    visible: false,
  };

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


  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <div className={styles.navigation}>
          <Button className={styles.navButton}>Offer</Button>
          <Button className={styles.navButton}>Need Help</Button>
          <Avatar icon={<UserOutlined />} className={styles.navButton}/>
        </div>
        <Layout>

          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
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
                      <h5>Name  </h5>
                      <Input placeholder="Name" />
                    </div>
                    <div className={styles.userEmail}>
                      <h5>Email  </h5>
                      <Input placeholder="Email" />
                    </div>
                    <Button type="primary" size="large" className={styles.saveButton}>
                      Save
                    </Button>
                  </div>
                </div>
                <div>
                  <h2>Contact Number</h2>
                  <div className={styles.userContactInfo}>
                    <Card title="Primary" >
                      202-555-0191
                    </Card>
                    <Card title="Secondary" >
                      202-555-0192
                    </Card>
                  </div>
                </div>
                <div>
                  <h2>Delivery Address</h2>
                  <div className={styles.userDeliveryAddress}>
                    <Card title="Home" >
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </Card>
                    <Card title="Office" >
                      33 Baker Street, Crescent Road, CA 65746
                    </Card>
                    <Card title="Home" >
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </Card>
                    <Card title="Office" >
                      33 Baker Street, Crescent Road, CA 65746
                    </Card>
                    <Card title="Home" >
                      27 Street, 2569 Heritage Road Visalia, CA 93291
                    </Card>
                    <Card title="Office" >
                      33 Baker Street, Crescent Road, CA 65746
                    </Card>
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
            <Footer style={{ textAlign: 'center' }}>Powered by Company Name</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default connect(()=>({}))(Profile);
