import React  from 'react';
import {connect} from 'umi';
import {Button,Input,Layout, Menu,Tree,Card} from "antd";
import {DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from './style.less';

const { Search } = Input;
const { TreeNode } = Tree;
const {Content, Footer, Sider } = Layout;
const { Meta } = Card;




const Shops = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  return (
    <div>
      <div className={styles.header}>
        <h5>Powered by <span className={styles.company}>MOTABHAAI</span></h5>
          <div className={styles.buttonContainer}>
            <Button type="primary" size="large" className={`${styles.button}  ${styles.help}`}>
              Help
            </Button>
            <Button type="primary" size="large" className={`${styles.button}  ${styles.join}`}>
              Join
            </Button>
          </div>
      </div>
    <div className={styles.inputBox}>
      <div className={styles.storeInfo}>
        <h3 className={styles.product}>Chandu Kirana Mart</h3>
        <h4 className={styles.productAddress}>Naigaon (E)</h4>
        <p className={styles.storeType}>General Store</p>
      </div>
      <Search
        className={styles.search}
        placeholder="search product"
        onSearch={value => console.log(value)}
        enterButton="Search"
        size="large"
      />
    </div>
      <div className={styles.shoppingCart}>
        <div className={styles.shoppingCartItemsBox}>
          <ShoppingCartOutlined/>
          <h5 className={styles.shoppingCartItems}>0 items</h5>
        </div>
        <div className={styles.shoppingCartTotalBox}>
          <h5 className={styles.shoppingCartTotal}>₹0.00</h5>
        </div>
      </div>
      <Layout>
        <Content theme="light" style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: "auto" }}
              >
                <div className={styles.categories}>
                  <h3 className={styles.navHeader}>Categories</h3>
                  <Tree
                    switcherIcon={<DownOutlined />}
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={onSelect}
                  >
                      <TreeNode title="Pulses" key="0-0-0">
                        <TreeNode title="leaf" key="0-0-0-0" />
                        <TreeNode title="leaf" key="0-0-0-1" />
                        <TreeNode title="leaf" key="0-0-0-2" />
                      </TreeNode>
                      <TreeNode title="Rice" key="0-0-1">
                        <TreeNode title="leaf" key="0-0-1-0" />
                      </TreeNode>
                      <TreeNode title="Milk & Products" key="0-0-2">
                        <TreeNode title="leaf" key="0-0-2-0" />
                        <TreeNode title="leaf" key="0-0-2-1" />
                      </TreeNode>
                    <TreeNode title="Vegetables" key="0-0-3">
                      <TreeNode title="leaf" key="0-0-3-0" />
                      <TreeNode title="leaf" key="0-0-3-1" />
                    </TreeNode>
                    <TreeNode title="Packed foods" key="0-0-4">
                      <TreeNode title="chocolates" key="0-0-4-0" />
                      <TreeNode title="Pasta, vermicelli" key="0-0-4-1" />
                      <TreeNode title="Snacks, Namkeen" key="0-0-4-2" />
                      <TreeNode title="Ready-to-eat" key="0-0-4-3" />
                    </TreeNode>
                    <TreeNode title="Beverages" key="0-0-5">
                      <TreeNode title="cold drink" key="0-0-5-0" />
                      <TreeNode title="energy drink" key="0-0-5-1" />
                    </TreeNode>
                    <TreeNode title="Personal care" key="0-0-6">
                      <TreeNode title="Body" key="0-0-6-0" />
                      <TreeNode title="Hair" key="0-0-6-1" />
                      <TreeNode title="Oral" key="0-0-6-2" />
                    </TreeNode>
                    <TreeNode title="Home care" key="0-0-7">
                      <TreeNode title="cleaning" key="0-0-7-0" />
                    </TreeNode>
                    <TreeNode title="Baby care" key="0-0-8">
                      <TreeNode title="lotion" key="0-0-8-0" />
                      <TreeNode title="baby food" key="0-0-8-1" />
                    </TreeNode>
                  </Tree>
                </div>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className={styles.filter}>
                <h4>Sort by:</h4>
                <Button className={styles.sort}>Price</Button>
                <Button className={styles.sort}>Offers</Button>
                <Button className={styles.sort}>Combos</Button>
              </div>
              <Card
                className={styles.card}
                cover={
                  <img
                    alt="example"
                    src="https://i.pinimg.com/474x/c3/0c/87/c30c87b7f1aa868c03489c053c3cc50f.jpg"
                    className={styles.image}
                  />
                }
              >
                <Meta
                  title="Card title"
                  description="This is the description"
                  className={styles.cardMeta}
                />
                <Button>Add to cart</Button>
              </Card>
            </Content>
          </Layout>
        </Content>
      </Layout>,
    </div>
  );
};

export default connect(() => ({}))(Shops);
