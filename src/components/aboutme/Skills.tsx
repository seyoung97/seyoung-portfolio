import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import html from "../../assets/images/skills/html-5.png";

const Skills = () => {
  return (
    <Container>
      <div>
        <img src={html}></img>
      </div>
      <span>HTML5</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  padding: 10px 0px 8px 0px;
  margin: 10px;
  border-radius: 5%;
  background-color: rgb(255, 254, 242, 0.6);
  box-shadow: 0px -1px 4px 0px rgb(0 0 0 / 8%);
  div {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  span {
    color: ${darkGray};
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export default Skills;
