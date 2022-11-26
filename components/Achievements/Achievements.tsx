import { Col, Row, Typography } from "antd";
import React, { FC } from "react";
import { achievements } from "../../constants/projects";
import s from "./Achievements.module.scss";

interface AchievementCardProps {
  achievement: {
    number: number;
    text: string;
  };
}

const AchievementCard: FC<AchievementCardProps> = ({ achievement }) => {
  return (
    <div className={s.card}>
      <Typography.Title level={2}>{achievement.number}+</Typography.Title>
      <Typography.Paragraph>{achievement.text}</Typography.Paragraph>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography.Title style={{ textAlign: "center" }}>
          Personal Achievements
        </Typography.Title>
        <div className={s.achievement_cards}>
          <Row gutter={[32, 32]} justify={"space-between"}>
            {achievements.map((achievement, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                <AchievementCard achievement={achievement} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
