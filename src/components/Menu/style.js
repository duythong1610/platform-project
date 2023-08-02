import { Menu } from "antd";
import { styled } from "styled-components";

export const MenuCustom = styled(Menu)`
  &.ant-menu-light {
    color: #333;
  }

  &.ant-menu-light .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: rgb(249 115 22);
  }
`;
