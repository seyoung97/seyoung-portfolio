import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  h1Style,
  h1FocusedStyle,
  h2Style,
  h2FocusedStyle,
  h3Style,
  h3FocusedStyle,
} from "../../theme";
import { ProjectDataType } from "../../interface";
import Title from "../title/Title";

interface IndexProps {
  indexData: ProjectDataType;
}

const Index = ({ indexData }: IndexProps) => {
  const [styleName, setStyleName] = useState("");

  console.log(styleName);

  return (
    <Section>
      <div className="index_box">
        <Link to="project_name" smooth={true}>
          <h1
            onClick={() => {
              setStyleName("name_focused");
            }}
            style={styleName === "name_focused" ? h1FocusedStyle : h1Style}
          >
            {indexData.project_name}
          </h1>
        </Link>
        <Link to="project_introduction" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_introduction");
            }}
            style={
              styleName === "project_introduction" ? h2FocusedStyle : h2Style
            }
          >
            🎤 프로젝트 소개
          </h2>
        </Link>
        <Link to="project_links" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_links");
            }}
            style={styleName === "project_links" ? h2FocusedStyle : h2Style}
          >
            🔗 Links
          </h2>
        </Link>
        <Link to="project_video" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_video");
            }}
            style={styleName === "project_video" ? h2FocusedStyle : h2Style}
          >
            🎞 시연 영상
          </h2>
        </Link>
        <Link to="project_skills" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_skills");
            }}
            style={styleName === "project_skills" ? h2FocusedStyle : h2Style}
          >
            🛠️ 사용 기술 및 라이브러리
          </h2>
        </Link>
        <Link to="project_structure" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_structure");
            }}
            style={styleName === "project_structure" ? h2FocusedStyle : h2Style}
          >
            📁 프로젝트 구조
          </h2>
        </Link>
        <Link to="project_cooperation" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_cooperation");
            }}
            style={
              styleName === "project_cooperation" ? h2FocusedStyle : h2Style
            }
          >
            👥 협업 방식
          </h2>
        </Link>
        {indexData.details.cooperation.map((title, i) => {
          return (
            <Link to={title.title} smooth={true}>
              <h3
                key={title.title}
                onClick={() => {
                  setStyleName(title.title);
                }}
                style={styleName === title.title ? h3FocusedStyle : h3Style}
              >
                {title.title}
              </h3>
            </Link>
          );
        })}
        <Link to="project_feature" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_feature");
            }}
            style={styleName === "project_feature" ? h2FocusedStyle : h2Style}
          >
            💻 담당한 기능
          </h2>
        </Link>
        {indexData.details.Feature.map((pages) => {
          return (
            <Link to={pages.page_name} smooth={true}>
              <h3
                key={pages.page_name}
                onClick={() => {
                  setStyleName(pages.page_name);
                }}
                style={styleName === pages.page_name ? h3FocusedStyle : h3Style}
              >
                {pages.page_name}
              </h3>
            </Link>
          );
        })}
        <Link to="trouble_shooting" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("trouble_shooting");
            }}
            style={styleName === "trouble_shooting" ? h2FocusedStyle : h2Style}
          >
            💥 Trouble Shooting
          </h2>
        </Link>
        {indexData.details.Trouble_Shooting.map((title) => {
          return (
            <Link to={title.title} smooth={true}>
              <h3
                key={title.title}
                onClick={() => {
                  setStyleName(title.title);
                }}
                style={styleName === title.title ? h3FocusedStyle : h3Style}
              >
                {title.title}
              </h3>
            </Link>
          );
        })}
        <Link to="project_growth" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_growth");
            }}
            style={styleName === "project_growth" ? h2FocusedStyle : h2Style}
          >
            💪 성장 point
          </h2>
        </Link>
        <Link to="project_review" smooth={true}>
          <h2
            onClick={() => {
              setStyleName("project_review");
            }}
            style={styleName === "project_review" ? h2FocusedStyle : h2Style}
          >
            💡 느낀점
          </h2>
        </Link>
        {indexData.details.review.map((title) => {
          return (
            <Link to={title.sub_titile} smooth={true}>
              <h3
                onClick={() => {
                  setStyleName(title.sub_titile);
                }}
                style={
                  styleName === title.sub_titile ? h3FocusedStyle : h3Style
                }
              >
                {title.sub_titile}
              </h3>
            </Link>
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
  }
`;

export default Index;
