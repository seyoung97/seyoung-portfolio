import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import background from "../../assets/videos/background.mp4";

const Background = () => {
  return (
    <>
      <Section>
        <video muted={true} autoPlay={true} loop={true} className="video">
          <source src={background} type="video/mp4"></source>
        </video>
      </Section>
      <Filter></Filter>
    </>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .video {
    width: 100%;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0%;
  background-color: ${darkGray};
  opacity: 0.6;
`;
export default Background;
