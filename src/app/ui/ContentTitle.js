import React from 'react';
import { Breadcrumb, Row, Col } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

class ContentTitle extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={20}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Ywang</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col span={4}>
            <QuestionCircleOutlined style={{ fontSize: '32px', marginTop: 10, marginLeft: 200 }} />
          </Col >
        </Row>
      </>
    );
  }
}

export default ContentTitle;