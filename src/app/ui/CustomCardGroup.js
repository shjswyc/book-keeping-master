import React from 'react';
import { Col, Row } from 'antd';
import CustomCard from './CustomCard'

class CustomCardGroup extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
          <Col span={4}>
            <CustomCard />
          </Col>
        </Row>
      </>
    );
  }
}


export default CustomCardGroup;