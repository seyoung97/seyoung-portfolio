import styled from "styled-components";
import { Link } from "react-scroll";
import { indexColor } from "../../theme";
import { ProjectDataType } from "../../interface";
import Title from "../title/Title";

interface IndexProps {
  indexData: ProjectDataType;
}

const Index = ({ indexData }: IndexProps) => {
  return (
    <Section>
      <div className="index_box">
        <h1>
          <Link to="project_name" smooth={true}>
            {indexData.project_name}
          </Link>
        </h1>
        <h2>
          <Link to="project_introduction" smooth={true}>
            🎤 프로젝트 소개
          </Link>
        </h2>
        <h2>
          <Link to="project_links" smooth={true}>
            🔗 Links
          </Link>
        </h2>
        <h2>
          <Link to="project_video" smooth={true}>
            🎞 시연 영상
          </Link>
        </h2>
        <h2>
          <Link to="project_skills" smooth={true}>
            🛠️ 사용 기술 및 라이브러리
          </Link>
        </h2>
        <h2>
          <Link to="project_structure" smooth={true}>
            📁 프로젝트 구조
          </Link>
        </h2>
        <h2>
          <Link to="project_cooperation" smooth={true}>
            👥 협업 방식
          </Link>
        </h2>
        {indexData.details.cooperation.map((title) => {
          return (
            <h3 key={title.title}>
              <Link to={title.title} smooth={true}>
                {title.title}
              </Link>
            </h3>
          );
        })}
        <h2>
          <Link to="project_feature" smooth={true}>
            💻 담당한 기능
          </Link>
        </h2>
        {indexData.details.Feature.map((pages) => {
          return (
            <h3 key={pages.page_name}>
              <Link to={pages.page_name} smooth={true}>
                {pages.page_name}
              </Link>
            </h3>
          );
        })}
        <h2>
          <Link to="trouble_shooting" smooth={true}>
            💥 Trouble Shooting
          </Link>
        </h2>
        {indexData.details.Trouble_Shooting.map((title) => {
          return (
            <h3 key={title.title}>
              <Link to={title.title} smooth={true}>
                {title.title}
              </Link>
            </h3>
          );
        })}
        <h2>
          <Link to="project_growth" smooth={true}>
            💪 성장 point
          </Link>
        </h2>
        <h2>
          <Link to="project_review" smooth={true}>
            💡 느낀점
          </Link>
        </h2>
        {indexData.details.review.map((title) => {
          return (
            <h3>
              <Link to={title.sub_titile} smooth={true}>
                {title.sub_titile}
              </Link>
            </h3>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 18%;
  .index_box {
    position: fixed;
    margin-top: 5%;
    padding: 15px 30px 15px 20px;
    border-left: 2px solid #cccc;
    cursor: pointer;
    h1 {
      color: ${indexColor};
      margin-bottom: 7px;
    }
    h2 {
      margin: 0px 0px 5px 10px;
      color: ${indexColor};
    }
    h3 {
      margin: 0px 0px 5px 20px;
      color: ${indexColor};
    }
  }
`;

export default Index;
