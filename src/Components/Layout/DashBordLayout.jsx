import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  BookOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
const { Header, Sider, Content } = Layout;

const DashBordLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ textAlign: "center", padding: "16px" }}>
          <img
            src="/assets/amasoftit-high-resolution-logo1.png"
            alt="Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined style={{ fontSize: "18px" }} />,
              label: "Dashboard",
              style: { fontSize: "18px" },
            },
            {
              key: "2",
              icon: <TeamOutlined style={{ fontSize: "18px" }} />,
              label: "Students",
              children: [
                { key: "2.1", label: "View Students" },
                { key: "2.2", label: "Add Student" },
                { key: "2.3", label: "Attendance" },
                { key: "2.4", label: "Grades" },
              ],
              style: { fontSize: "18px" },
            },
            {
              key: "6",
              icon: <UserOutlined style={{ fontSize: "18px" }} />,
              label: "Fees Management",
              style: { fontSize: "18px" },
            },
            {
              key: "7",
              icon: <BookOutlined style={{ fontSize: "18px" }} />,
              label: "Library",
              style: { fontSize: "18px" },
            },
            {
              key: "8",
              icon: <SettingOutlined style={{ fontSize: "18px" }} />,
              label: "Settings",
              style: { fontSize: "18px" },
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
        <Footer
          style={{ textAlign: "center", padding: "10px 50px", height: "100px" }}
        >
          Footer Content
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBordLayout;
