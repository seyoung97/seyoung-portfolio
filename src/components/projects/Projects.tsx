import { useMemo } from "react";
import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import { TitleData } from "../../assets/data/Data";
import Title from "../title/Title";
import ProjectCard from "./ProjectCard";
import ProjectsList from "../../assets/data/projectsList.json";
import { ProjectsListData } from "../../interface";

const Projects = () => {
  const projectsTitle = TitleData[1];
  const internshipTitle = TitleData[2];
  const ProjectsData: ProjectsListData = useMemo(() => ProjectsList, []);

  return (
    <Section id="projects">
      <Title content={projectsTitle} />
      <div className="projects_container">
        {ProjectsData.projects_list.map((projects) => {
          return <ProjectCard content={projects} />;
        })}
      </div>
      <Title content={internshipTitle} />
      <div id="internship" className="projects_container">
        {ProjectsData.internship_list.map((projects) => {
          return <ProjectCard content={projects} />;
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin: auto;
  margin-top: 150px;
  .projects_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    margin-top: 70px;
    margin-bottom: 100px;
  }
`;

export default Projects;
