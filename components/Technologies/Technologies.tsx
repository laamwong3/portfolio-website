import { Typography } from "antd";
import React, { FC } from "react";
import s from "./Technologies.module.scss";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { IconType } from "react-icons";

interface SkillProps {
  Icon: IconType;
  title: string;
  content: string;
}

const Skill: FC<SkillProps> = ({ Icon, content, title }) => {
  return (
    <div className={s.skill_item}>
      <Icon size={50} />
      <Typography.Title>{title}</Typography.Title>
      <Typography.Paragraph>{content}</Typography.Paragraph>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography.Title style={{ textAlign: "center" }}>
          Technologies
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center" }}>
          I've worked with a range a technologies in the web development world.
          From Back-end To Design
        </Typography.Paragraph>
        <div className={s.skills}>
          <Skill
            Icon={DiReact}
            title="Front-End"
            content="Experiece with React.js"
          />
          <Skill
            Icon={DiFirebase}
            title="Back-End"
            content="Experience with Node and Databases"
          />
          <Skill
            Icon={DiZend}
            title="UI/UX"
            content="Experience with tools like Figma"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
