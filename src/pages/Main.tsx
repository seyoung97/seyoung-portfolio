import Intro from "../components/intro/Intro";
import Background from "../components/main/Background";
import Header from "../components/header/Header";
import Carousel from "../components/main/Carousel";
import AboutMe from "../components/aboutme/AboutMe";

const Main = () => {
  return (
    <>
      <Background />
      <Carousel />
      <Header />
      <AboutMe />
    </>
  );
};

export default Main;
