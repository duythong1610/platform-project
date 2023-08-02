import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom/dist";
import { MenuCustom } from "./style";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", "sub1", <MailOutlined />, [
    getItem("Option 13", "13"),
    getItem("Option 14", "14"),
    getItem("Option 15", "15"),
    getItem("Option 16", "16"),
  ]),
  getItem("Project Management", "sub2", <PieChartOutlined />, [
    getItem(<Link to="/requirement">Requirement</Link>),
    getItem(<Link to="/process-definition">Process Definition</Link>),
    getItem(<Link to="/project-resource">Project Resource</Link>),
  ]),
  getItem("Biz Modeling", "sub3", <DesktopOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Data Modeling", "sub4", <ContainerOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Admin", "sub5", <AppstoreOutlined />, [
    getItem(<Link to="/meeting-appointment">Meeting Appointment</Link>),
  ]),
];
const MenuComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        width: "auto",
        display: "flex",
        gap: 10,
      }}
    >
      <MenuCustom
        defaultSelectedKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
      <Button
        type="primary"
        onClick={toggleCollapsed}
        className="text-orange-500"
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  );
};
export default MenuComponent;
