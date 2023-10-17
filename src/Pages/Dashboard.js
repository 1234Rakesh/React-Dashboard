import React from "react";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DollarOutlined,
  BankOutlined,
  OrderedListOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Card,Space, Statistic, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
const Dashboard = () => (
  <Content className="content">
    <Space direction="horizontal">
      <Card style={{alignContent:"center",minWidth:250,borderRadius:10}}>
        <Space direction="horizontal">
          <DollarOutlined style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius:50,
              marginBottom:-15,
              fontSize:30,
              padding:20,
          }}/>
          <small style={{marginLeft:5}}>Earing</small>
        </Space>
        <Typography.Title style={{fontSize:20,marginLeft:80,marginTop:-20,fontFamily:"monospace"}}>$198k</Typography.Title>
        <Typography.Paragraph>
          <Statistic
            value={37.8}
            // precision={2}
            valueStyle={{ color: '#3f8600',
                          fontSize:12,
                          marginLeft:70,
                          marginTop:-10,
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%this mentho"
            />
        </Typography.Paragraph>
      </Card>
      <Card style={{alignContent:"center",minWidth:250,borderRadius:10,marginLeft:35}}>
        <Space direction="horizontal">
          <OrderedListOutlined style={{
              color: "blue",
              backgroundColor: "rgba(0,0,255,0.25)",
              borderRadius:50,
              marginBottom:-15,
              fontSize:30,
              padding:20,
          }}/>
          <small style={{marginLeft:5}}>Orders</small>
        </Space>
        <Typography.Title style={{fontSize:20,marginLeft:80,marginTop:-20,fontFamily:"monospace"}}>$2.4k</Typography.Title>
        <Typography.Paragraph>
          <Statistic
            value={2}
            // precision={2}
            valueStyle={{ color: '#3f8600',
                          fontSize:12,
                          marginLeft:70,
                          marginTop:-10,
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%this mentho"
            />
        </Typography.Paragraph>
      </Card>
      <Card style={{alignContent:"center",minWidth:250,borderRadius:10,marginLeft:35}}>
        <Space direction="horizontal">
          <BankOutlined style={{
              color: "purple",
              backgroundColor: "rgba(0,255,255,0.25)",
              borderRadius:50,
              marginBottom:-15,
              fontSize:30,
              padding:20,
          }}/>
          <small style={{marginLeft:5}}>Balance</small>
        </Space>
        <Typography.Title style={{fontSize:20,marginLeft:80,marginTop:-20,fontFamily:"monospace"}}>$2.4k</Typography.Title>
        <Typography.Paragraph>
          <Statistic
            value={2}
            valueStyle={{ color: '#3f8600',
                          fontSize:12,
                          marginLeft:70,
                          marginTop:-10,
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%this mentho"
            />
        </Typography.Paragraph>
      </Card>
      <Card style={{alignContent:"center",minWidth:250,borderRadius:10,marginLeft:35}}>
        <Space direction="horizontal">
          <ShoppingOutlined style={{
              color: "red",
              backgroundColor: "rgba(255,0,0,0.25)",
              borderRadius:50,
              marginBottom:-15,
              fontSize:30,
              padding:20,
          }}/>
          <small style={{marginLeft:5}}>Total Sale</small>
        </Space>
        <Typography.Title style={{fontSize:20,marginLeft:80,marginTop:-20,fontFamily:"monospace"}}>$89k</Typography.Title>
        <Typography.Paragraph>
          <Statistic
            value={11}
            // precision={2}
            valueStyle={{ color: '#3f8600',
                          fontSize:12,
                          marginLeft:70,
                          marginTop:-10,
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%this week"
            />
        </Typography.Paragraph>
      </Card>
      
      
    </Space>
  </Content>
);
export default Dashboard;
