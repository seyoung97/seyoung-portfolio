import Intro from "../components/intro/Intro";
import Background from "../components/main/Background";
import Carousel from "../components/main/Carousel";
import AboutMe from "../components/aboutme/AboutMe";
import Projects from "../components/projects/Projects";

const Main = () => {
  return (
    <>
      <Background />
      <Carousel />
      <AboutMe />
      <Projects />
    </>
  );
};

export default Main;
