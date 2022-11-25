import { Button, Typography } from "antd";
import React from "react";
import BgAnimation from "./BgAnimation/BgAnimation";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.svg}>
          <BgAnimation />
        </div>
        <div className={s.content}>
          <Typography.Title style={{ textAlign: "center" }} level={1}>
            Welcome To My Personal Portfolio
          </Typography.Title>
          <Typography.Paragraph
            style={{ marginTop: "2rem", textAlign: "center" }}
          >
            I am a full stack blockchain developer who experienced in building
            web3 or web2 dapp
          </Typography.Paragraph>
          <Button shape="round" style={{ marginTop: "2rem" }}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
