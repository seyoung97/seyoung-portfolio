import styled from "styled-components";
import { darkGray, paragraphFontSize, explainWidth } from "../../theme";
import { ProjectDetailType } from "../../interface";

interface FeatureProps {
  featureData: ProjectDetailType;
}

const Feature = ({ featureData }: FeatureProps) => {
  return (
    <FeatureSection>
      <h2 id="project_feature">담당 기능</h2>
      {featureData.Feature.map((page) => {
        return (
          <>
            <h3 className="page_name" id={page.page_name}>
              {page.page_name}
            </h3>
            <img
              src={page.page_gif}
              alt={page.page_name}
              className="page_gif"
            ></img>
            {page.features.map((feature) => {
              return (
                <>
                  <h4>{feature.feature_name}</h4>
                  {feature.code_img.map((image) => {
                    return (
                      <img
                        src={image}
                        alt="코드 이미지"
                        className="code_img"
                      ></img>
                    );
                  })}
                  <ul>
                    {feature.explain.map((content) => {
                      return <li>{content}</li>;
                    })}
                  </ul>
                </>
              );
            })}
          </>
        );
      })}
    </FeatureSection>
  );
};

const FeatureSection = styled.section`
  .page_name {
    padding: 15px 0px 10px 20px;
    background-color: #eeee;
  }
  .page_gif {
    margin: 20px 0px 50px 25px;
  }
  .code_img {
    width: 800px;
    margin: 20px 0px 30px 25px;
  }
  ul {
    width: ${explainWidth};
    margin: 0px 0px 50px 25px;
    li {
      margin-bottom: 15px;
      font-size: ${paragraphFontSize};
    }
  }
`;

export default Feature;
