import React from "react";
import {
  TrademarkCircleOutlined,
  DesktopOutlined,
  SettingOutlined,
  ExceptionOutlined,
  PhoneOutlined,
  TeamOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import Dashboard from "../Pages/Dashboard";
import Cheart from "../Pages/Cheart";
import Profile from "../Profile/Profile";
import Tabdata from "../TabData/Tabdata";
import { GoSearch } from "react-icons/go";
import {
  Breadcrumb,
  Layout,
  Menu,
  Input,
} from "antd";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overridden)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});
const items = [
  getItem("Dashboard", "1", <TrademarkCircleOutlined />),
  getItem("Dashboard", "2", <DesktopOutlined />),
  getItem("Product", "sub1", <IconFont type="icon-shoppingcart" />, [
    getItem("Fruits", "sub2", <IconFont type="icon-shoppingcart" />,[
      getItem("Apple", "4"),
      getItem("Banana", "4"),
      getItem("Pomegranate", "5"),
    
    ]),
    getItem("Dress", "sub3", <IconFont type="icon-shoppingcart" />,[
      getItem("Bill", "4"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    
    ]),
    
  ]),
  getItem("Customers", "sub4", <TeamOutlined />, [
    getItem("Product", "sub5", <IconFont type="icon-shoppingcart" />,[
      getItem("Bill", "4"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    
    ]),
    getItem("Product", "sub6", <IconFont type="icon-shoppingcart" />,[
      getItem("Bill", "4"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    
    ]),

  ]),
  getItem("Income", "sub7", <ExceptionOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Promote", "sub8", <SettingOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Help", "sub9", <PhoneOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
];
const MainLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <Profile/>
      </Sider>

      <Layout
        style={{
          marginTop: 25,
          display: "flex",
          marginLeft: 60,
        }}
      >
        <div className="d-flex gap-3 align-items-center">
          <div className="">
            <p
              className="text-dark mb-0"
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                marginLeft: "9px",
              }}
            >
              Hello Rakesh👋
            </p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Input
              style={{ width: 200, marginLeft: "805px" }}
              size="small"
              placeholder="search"
              prefix={<GoSearch />}
            />
          </div>
        </div>
        <Content
          style={{
            padding: 12,
            marginTop: 10,
          }}
        >
          <Breadcrumb
            style={{
              margin: "10px ",
              marginLeft: "-10px",
            }}
            >
          <Dashboard/>
          </Breadcrumb>
          <div
            style={{
              marginTop:-450,
              // background: colorBgContainer,
            }}
          >
            <Cheart/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <Tabdata/>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
