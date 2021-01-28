import React from 'react';
import { Card, Col, Row, Tooltip, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, ShopOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;
const text = <span>Wechat Pay</span>;

class CustomCard extends React.Component {
  render() {
    return (
      <>
        <Card
          style={{ marginTop: 10, marginRight: 10 }}
          actions={[
            <EditOutlined key="edit" />,
            <DeleteOutlined />,
            <StarOutlined />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Row>
            <Col span={16}>
              <Meta
                avatar={
                  <ShopOutlined style={{ fontSize: '32px', marginTop: 10 }} />
                }
                title="Food"
                description="Description"
              />
            </Col>
            <Col span={8}>
              <Tooltip placement="top" title={text}>
                <Button style={{ fontSize: '8px', marginTop: 5, marginRight: 5, padding: 5 }}>¥1838.99</Button>
              </Tooltip>
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}


export default CustomCard;