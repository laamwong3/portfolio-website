import { Col, Row, Typography } from "antd";
import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import s from "./Projects.module.scss";

const Projects = () => {
  return (
    <div id="project" className={s.container}>
      <div className={s.wrapper}>
        <Typography.Title
          level={1}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          Projects
        </Typography.Title>
        <div className={s.project_cards}>
          <Row gutter={[32, 32]} justify="space-between">
            {projects.map((project, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
