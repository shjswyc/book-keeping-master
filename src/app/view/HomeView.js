import React from 'react';
import { Layout } from 'antd';
import CustomCardGroup from '../ui/CustomCardGroup'
import SideBar from '../ui/SideBar'
import ContentTitle from '../ui/ContentTitle'

const { Content, Footer } = Layout;

class HomeView extends React.Component {
  render() {
    return (
      <>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar></SideBar>
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <ContentTitle></ContentTitle>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <CustomCardGroup></CustomCardGroup>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Book-Keeping-Master @2021 Created by Yechen Wang</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default HomeView;
