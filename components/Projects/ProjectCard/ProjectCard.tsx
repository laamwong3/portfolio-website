import { Button, Col, Row, Tag, Typography } from "antd";
import Image, { StaticImageData } from "next/image";
import React from "react";
import s from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: StaticImageData;
    tags: string[];
    source: string;
    visit: string;
    id: number;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={s.card}>
      <div style={{ width: "100%" }}>
        <Image
          src={project.image}
          alt={project.title}
          className={s.title_img}
        />

        <Typography.Title level={3} className={s.title}>
          {project.title}
        </Typography.Title>
        <Typography.Paragraph className={s.description}>
          {project.description}
        </Typography.Paragraph>

        <Typography.Title level={5}>Stack</Typography.Title>

        <Row gutter={[8, 8]} justify={"space-around"}>
          {project.tags.map((tag, index) => (
            <Col span={8} key={index}>
              <Tag color="blue" className={s.tag}>
                {tag}
              </Tag>
            </Col>
          ))}
        </Row>
      </div>
      <div className={s.button_group}>
        <Button shape="round" type="primary">
          Code
        </Button>
        <Button shape="round" type="primary">
          Source
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
