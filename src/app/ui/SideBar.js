import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

class SideBar extends React.Component {
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
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            User
            </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} onClick={() => { alert("switch") }}>
            Option
            </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}


export default SideBar;