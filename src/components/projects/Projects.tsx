import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import { TitleData } from "../../assets/data/Data";
import Title from "../title/Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsTitle = TitleData[1];

  return (
    <Section>
      <Title content={projectsTitle} />
      <div className="projects_container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
};

const Section = styled.section`
  border: ${layout};
  width: 100%;
  margin: auto;
  margin-top: 150px;
  .projects_container {
    border: ${layout};
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
