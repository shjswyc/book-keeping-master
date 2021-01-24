import React from 'react';
import { Layout, Menu, Breadcrumb, Col, Row } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import CustomCard from '../ui/CustomCard'

const { Content, Footer, Sider } = Layout;

class HomeView extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              User
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Ywang</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row>
                <Col span={6}>
                  <CustomCard />
                </Col>
                <Col span={6}>
                  <CustomCard />
                </Col>
                <Col span={6}>
                  <CustomCard />
                </Col>
                <Col span={6}>
                  <CustomCard />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Book-Keeping-Master @2021 Created by Yechen Wang</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default HomeView;
