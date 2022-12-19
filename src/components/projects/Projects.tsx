import { useMemo } from "react";
import styled from "styled-components";

import { TitleData } from "../../assets/data/Data";
import Title from "../title/Title";
import ProjectCard from "./ProjectCard";

import { ProjectsListData } from "../../interface";

interface ProjectsProps {
  projectsData: ProjectsListData;
}

const Projects = ({ projectsData }: ProjectsProps) => {
  const projectsTitle = TitleData[1];
  const internshipTitle = TitleData[2];

  return (
    <Section id="projects">
      <Title content={projectsTitle} />
      <div className="projects_container">
        {projectsData.projects_list.map((projects, i) => {
          return (
            <ProjectCard
              key={projects.id}
              content={projects}
              type={"P"}
              index={i}
            />
          );
        })}
      </div>
      <Title content={internshipTitle} />
      <div id="internship" className="projects_container">
        {projectsData.internship_list.map((projects, i) => {
          return (
            <ProjectCard
              key={projects.id}
              content={projects}
              type={"I"}
              index={i}
            />
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin: 200px auto 0px;
  padding: 30px 0px 70px 0px;
  background-color: rgb(223, 222, 222, 0.1);
  .projects_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 70px;
  }
`;

export default Projects;
