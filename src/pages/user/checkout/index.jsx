import React, {Component} from 'react';
import {connect} from "umi";
import {Layout, Menu, Button, Avatar, Card, Steps, Table} from 'antd';
import { UserOutlined, ShopOutlined, QuestionOutlined , LogoutOutlined, ProfileOutlined, PlusOutlined  } from '@ant-design/icons';


import styles from './styles.less'

const { Content } = Layout;

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
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className={styles.order}>
                  <div>
                    <div className={styles.deliveryContainer}>
                      <h2>Delivery Address</h2>
                      <div className={styles.addButton} onClick={this.showModal}>
                        <PlusOutlined/><span>Add New</span>
                      </div>
                    </div>
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
    )
  }
}

export default connect(()=>({}))(Profile);
