import Intro from "../components/intro/Intro";
import Background from "../components/main/Background";
import Carousel from "../components/main/Carousel";
import AboutMe from "../components/aboutme/AboutMe";

const Main = () => {
  return (
    <>
      <Background />
      <Carousel />
      <AboutMe />
    </>
  );
};

export default Main;
