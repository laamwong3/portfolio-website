import { Menu, MenuProps, Space } from "antd";
import React from "react";
import s from "./Header.module.scss";
import {
  CopyrightOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const items: MenuProps["items"] = [
  {
    label: (
      <Link href="#project" scroll={false}>
        Projects
      </Link>
    ),
    key: "project",
  },
  {
    label: (
      <Link href="#tech" scroll={false}>
        Technologies
      </Link>
    ),
    key: "technologies",
  },
  {
    label: (
      <Link href="#about" scroll={false}>
        About
      </Link>
    ),
    key: "about",
  },
];

const Header = () => {
  // const isTablet = useMediaQuery({ maxWidth: 1150 });
  // console.log(isTablet);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <CopyrightOutlined className={s.title_icon} />
          Portfolio
        </div>

        <Menu
          items={items}
          mode="horizontal"
          className={s.menu}
          selectedKeys={[]}
        />

        <div className={s.icons}>
          <GithubOutlined className={s.icon} />
          <LinkedinOutlined className={s.icon} />
          <InstagramOutlined className={s.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
