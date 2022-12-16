import Background from "../components/main/Background";
import Carousel from "../components/main/Carousel";
import AboutMe from "../components/aboutme/AboutMe";
import Projects from "../components/projects/Projects";

import { ProjectsListData } from "../interface";
import styled from "styled-components";

interface MainProps {
  projectsData: ProjectsListData;
}

const Main = ({ projectsData }: MainProps) => {
  return (
    <Wrap>
      <Background />
      <Carousel />
      <AboutMe />
      <Projects projectsData={projectsData} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  @media (max-width: 1280) {
    width: 100%;
  }
`;

export default Main;
