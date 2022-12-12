import styled from "styled-components";
import { darkGray, paragraphFontSize, explainWidth } from "../../theme";
import { ContentPropsType } from "../../interface";

const LevelUp = ({ Data }: ContentPropsType) => {
  return (
    <LevelUpSection>
      <h2 id="project_growth">성장 Point</h2>
      <ul>
        {Data.Level_up.map((paragraph, i) => {
          return <li key={i}>{paragraph}</li>;
        })}
      </ul>
    </LevelUpSection>
  );
};

const LevelUpSection = styled.section`
  ul {
    margin: 30px 0px 0px 25px;
    li {
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
  }
`;

export default LevelUp;
