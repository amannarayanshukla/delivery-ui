import React, {Component} from 'react';
import {connect} from "umi";
import {Layout, Menu, Button, Avatar, Card, Steps, Table} from 'antd';
import { UserOutlined, ShopOutlined, QuestionOutlined , LogoutOutlined, ProfileOutlined  } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroller';

import styles from './styles.less'

const { Content, Sider } = Layout;
const { Step } = Steps;

const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
  },
];

const data = [
  {
    key: '1',
    item: 'Banana',
    quantity: 2,
    cost: '$10',
  },
  {
    key: '2',
    item: 'Watermelon',
    quantity: 2,
    cost: '$15',
  },
  {
    key: '3',
    item: 'Orange',
    quantity: 2,
    cost: '$20',
  },
];

class Profile extends Component {
  render() {

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
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
                <div className={styles.order}>
                  <h2 className={styles.heading}>My Orders</h2>
                  <div style={{height:"700px",overflow:"auto"}}>
                    <InfiniteScroll
                      pageStart={0}
                      // loadMore={loadFunc}
                      hasMore={true || false}
                      loader={<div className="loader" key={0}>Loading ...</div>}
                      useWindow={false}
                    >
                      <Card title="Order #1">
                        <div className={styles.orderCard}>
                          <p>Order Date:</p>
                          <p>7th April 2019 </p>
                        </div>
                        <div className={styles.orderCard}>
                          <p>Delivery Time:</p>
                          <p>13th April</p>
                        </div>
                        <div className={`${styles.orderCard} ${styles.totalPrice}`}>
                          <p>Total Price:</p>
                          <p>$249.7</p>
                        </div>
                      </Card>
                      <Card title="Order #2">
                        <div className={styles.orderCard}>
                          <p>Order Date:</p>
                          <p>7th April 2019 </p>
                        </div>
                        <div className={styles.orderCard}>
                          <p>Delivery Time:</p>
                          <p>13th April</p>
                        </div>
                        <div className={`${styles.orderCard} ${styles.totalPrice}`}>
                          <p>Total Price:</p>
                          <p>$249.7</p>
                        </div>
                      </Card>
                      <Card title="Order #3">
                        <div className={styles.orderCard}>
                          <p>Order Date:</p>
                          <p>7th April 2019 </p>
                        </div>
                        <div className={styles.orderCard}>
                          <p>Delivery Time:</p>
                          <p>13th April</p>
                        </div>
                        <div className={`${styles.orderCard} ${styles.totalPrice}`}>
                          <p>Total Price:</p>
                          <p>$249.7</p>
                        </div>
                      </Card>
                      <Card title="Order #4">
                        <div className={styles.orderCard}>
                          <p>Order Date:</p>
                          <p>7th April 2019 </p>
                        </div>
                        <div className={styles.orderCard}>
                          <p>Delivery Time:</p>
                          <p>13th April</p>
                        </div>
                        <div className={`${styles.orderCard} ${styles.totalPrice}`}>
                          <p>Total Price:</p>
                          <p>$249.7</p>
                        </div>
                      </Card>
                    </InfiniteScroll>
                  </div>
                </div>
                <div className={styles.orderDetails}>
                  <h2 className={styles.heading}>Order Details</h2>
                  <div className={styles.orderDetailsContainer}>
                    <div className={styles.orderDetailsDelivery}>
                      <div>
                        <h3>Delivery Address</h3>
                        <p>1756 Roy Alley, GIRARDVILLE, Pennsylvania</p>
                      </div>
                      <div className={styles.orderAmountContainer}>
                        <div className={styles.orderDetailsAmount}>
                          <h3>Sub Total</h3>
                          <h3>$200</h3>
                        </div>
                        <div className={styles.orderDetailsAmount}>
                          <p>Discount</p>
                          <p>$0</p>
                        </div>
                        <div className={styles.orderDetailsAmount}>
                          <p>Delivery Fee</p>
                          <p>$49.7</p>
                        </div>
                        <div className={styles.orderDetailsAmount}>
                          <p>Total</p>
                          <p>$249.7</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Steps current={2}>
                        <Step title="Order received"/>
                        <Step title="Order on the way"/>
                        <Step title="Order delivered" />
                      </Steps>
                    </div>
                    <div>
                      <Table columns={columns} dataSource={data}/>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default connect(()=>({}))(Profile);
