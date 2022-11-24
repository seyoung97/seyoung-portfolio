import styled from "styled-components";

const Intro = () => {
  return (
    <Section>
      <h2 className="intro__title hidden">Not everything is black and white</h2>
      <div className="intro__background intro__background--left"></div>
      <div className="intro__background intro__background--right"></div>
    </Section>
  );
};

const Section = styled.section`
  position: fixed;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
  z-index: 5;

  &__title {
    color: white;
    max-width: 45%;
    text-align: center;
    mix-blend-mode: difference;
    z-index: 2;
    transform: translateY(40px);
  }

  &__background {
    position: absolute;
    top: 0;
    background-color: black;
    width: 50%;
    height: 100%;
    transform: scaleX(0);

    &--left {
      left: 0;
      transform-origin: left center;
    }

    &--right {
      left: 50%;
      transform-origin: right center;
    }
  }
`;
export default Intro;
