import { Divider, Timeline, Typography } from "antd";
import { type } from "os";
import React from "react";
import { TimeLineData } from "../../constants/projects";
import s from "./About.module.scss";

const About = () => {
  return (
    <div className={s.container} id="about">
      <div className={s.wrapper}>
        <Typography.Title style={{ textAlign: "center" }}>
          About Me
        </Typography.Title>
        <Typography.Paragraph style={{ textAlign: "center" }}>
          I am a full stack blockchain developer who experienced in building
          web3 or web2 dapp
        </Typography.Paragraph>
        <Timeline className={s.timeline} mode="alternate" pending>
          {TimeLineData.map((timeline, index) => (
            <Timeline.Item
              label={timeline.year}
              key={index}
              className={s.timeline_item}
            >
              {timeline.text}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
      {/* <Divider style={{ background: "white" }} /> */}
    </div>
  );
};

export default About;
