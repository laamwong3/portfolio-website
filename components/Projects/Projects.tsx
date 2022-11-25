import { Col, Row, Typography } from "antd";
import React from "react";
import { projects } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";
import s from "./Projects.module.scss";

const Projects = () => {
  return (
    <div id="project" className={s.container}>
      <div className={s.wrapper}>
        <Typography.Title level={1} style={{ textAlign: "center" }}>
          Projects
        </Typography.Title>
        <div className={s.project_cards}>
          <Row>
            {projects.map((project, index) => (
              <Col key={index}>
                <ProjectCard />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
