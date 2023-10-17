import React from 'react';
import Bar from '../Bar/Dstore';
import Piechart from '../Piechart/Piechart';
import { Card, Col, Row } from 'antd';
const Cheart = () => (
  <Row gutter={8}>
    <Col span={14}>
    <Card
    style={{
      width: 800,
    }}
  >
    <Bar/>
  </Card>
    </Col>
    <Col span={8}>
      <div style={{marginLeft:"120px", 
                  alignContent:"revert-layer", 
                  width:"300px",
                  //  height:"30px",
                   borderRadius:"20px",
                   padding:"2px",
                   marginTop:"-5px"
                   }}>
      </div>
    <Card
    style={{
      width: 300,
      height:400,
      marginLeft:"125px",
      marginTop:"-5px"
    }}
    >
    <Piechart/>
  </Card>
    </Col>
  </Row>
);
export default Cheart;
