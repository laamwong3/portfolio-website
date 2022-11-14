import { Menu, MenuProps, Space } from "antd";
import React from "react";
import s from "./Header.module.scss";
import { CopyrightOutlined } from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: (
      <a href="https://www.google.com.au/" target={"_blank"} rel="noreferrer">
        Projects
      </a>
    ),
    key: "project",
  },
  { label: "Technologies", key: "technologies" },
];

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <CopyrightOutlined />
        Portfolio
      </div>
      <div className={s.menu}>
        <Menu items={items} />
      </div>
      <div className={s.icons}></div>
    </div>
  );
};

export default Header;
