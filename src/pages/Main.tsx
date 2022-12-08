import Intro from "../components/intro/Intro";
import Background from "../components/main/Background";
import Carousel from "../components/main/Carousel";
import AboutMe from "../components/aboutme/AboutMe";
import Projects from "../components/projects/Projects";

import { ProjectsListData } from "../interface";

interface MainProps {
  projectsData: ProjectsListData;
}

const Main = ({ projectsData }: MainProps) => {
  return (
    <>
      <Background />
      <Carousel />
      <AboutMe />
      <Projects projectsData={projectsData} />
    </>
  );
};

export default Main;
