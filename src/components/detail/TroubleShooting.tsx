import styled from "styled-components";
import { darkGray, paragraphFontSize, explainWidth } from "../../theme";
import { ProjectDetailType } from "../../interface";

interface TroubleShootingProps {
  troubleShootingData: ProjectDetailType;
}

const TroubleShooting = ({ troubleShootingData }: TroubleShootingProps) => {
  return (
    <TroubleShootingSection>
      <h2 id="trouble_shooting">Trouble Shooting</h2>
      {troubleShootingData.Trouble_Shooting.map((troubleShooting) => {
        return (
          <>
            <h3 id={troubleShooting.title}>{troubleShooting.title}</h3>
            <ul>
              {troubleShooting.explain.map((paragraph) => {
                return <li>{paragraph}</li>;
              })}
            </ul>
            <h4>{troubleShooting.subtitle}</h4>
            <ul>
              {troubleShooting.figure_out.map((paragraph) => {
                return <li>{paragraph}</li>;
              })}
            </ul>
            <h4>{troubleShooting.subtitle_2}</h4>
            <ul>
              {troubleShooting.problem_solving.map((paragraph) => {
                return <li>{paragraph}</li>;
              })}
            </ul>
            <h4>{troubleShooting.subtitle_3}</h4>
            <ul>
              {troubleShooting.lesson.map((paragraph) => {
                return <li>{paragraph}</li>;
              })}
            </ul>
          </>
        );
      })}
    </TroubleShootingSection>
  );
};

const TroubleShootingSection = styled.section`
  ul {
    width: ${explainWidth};
    margin: 10px 0px 40px 25px;
    li {
      margin-bottom: 15px;
      font-size: ${paragraphFontSize};
    }
  }
`;

export default TroubleShooting;
