import ReactPlayer from "react-player";
import styled from "styled-components";
import { darkGray, butter, layout, paragraphFontSize } from "../../theme";
import { ProjectDataType } from "../../interface";
import Feature from "./Feature";
import TroubleShooting from "./TroubleShooting";
import LevelUp from "./LevelUp";
import Review from "./Review";
import { useEffect, useState } from "react";

interface ContentProps {
  projectData: ProjectDataType;
}

const Content = ({ projectData }: ContentProps) => {
  const [cooperation, setCooperation] = useState(true);

  useEffect(() => {
    if (
      projectData.project_name === "포트폴리오 사이트" ||
      projectData.project_name === "lululab 병원 예약 서비스"
    ) {
      setCooperation(false);
    } else {
      setCooperation(true);
    }
  }, [cooperation]);

  return (
    <Article>
      <h1 id="project_name" className="project_name">
        {projectData.project_name}
      </h1>
      <ul className="info_container">
        <li>
          <span className="name">한 줄 소개</span>
          <span className="content">
            {projectData.details.breif_info.introduction}
          </span>
        </li>
        <li>
          <span className="name">진행 기간</span>
          <span className="content">
            {projectData.details.breif_info.period}
          </span>
        </li>
        <li>
          <span className="name">팀 구성</span>
          <span className="content">{projectData.details.breif_info.team}</span>
        </li>
        <li>
          <span className="name">관련 활동</span>
          <span className="content"> {projectData.activity_type}</span>
        </li>
      </ul>
      <section className="content_section">
        <h2 id="project_introduction">프로젝트 소개</h2>
        <h3>{projectData.project_name}</h3>
        <ul className="introduction_box">
          {projectData.details.project_introduction.map((paragrahp, i) => {
            return <li key={i}>{paragrahp}</li>;
          })}
        </ul>
        <h2 id="project_links">Links</h2>
        <ul className="links_box">
          {projectData.details.links.map((content) => {
            return (
              <li key={content.link_name}>
                <span>{content.link_name}:</span>
                <a href={content.link_url} target="_blank">
                  🔎자세히 보러가기
                </a>
              </li>
            );
          })}
        </ul>
        <h2 id="project_video">시연영상</h2>
        <div className="video_box">
          <ReactPlayer url={projectData.details.video_url}></ReactPlayer>
        </div>
        <h2 id="project_skills">사용 기술 및 라이브러리</h2>
        <ul className="tech_stack">
          {projectData.details.tech_stack.map((positions) => {
            return (
              <>
                <li key={positions.position} className="position">
                  {positions.position}
                </li>
                {positions.skills.map((el) => {
                  return (
                    <li key={el} className="skills">
                      {el}
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
        <h2 id="project_structure">프로젝트 구조</h2>
        <div className="structure_container">
          <div className="structure_imgbox">
            {projectData.details.structure.img_url.map((image, i) => {
              return <img key={i} src={image}></img>;
            })}
          </div>
          <ul className="structure_explain">
            {projectData.details.structure.explain.map((content, i) => {
              return <li key={i}>{content}</li>;
            })}
          </ul>
        </div>
        {cooperation && (
          <div>
            <h2 id="project_cooperation">협업방식</h2>
            {projectData.details.cooperation.map((content, i) => {
              return (
                <div key={i}>
                  <h3 key={content.title} id={content.title}>
                    {content.title}
                  </h3>
                  <ul className="cooperation_explain">
                    {content.content.map((paragraph, i) => {
                      return <li key={i}>{paragraph}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        <Feature featureData={projectData.details} />
        <TroubleShooting troubleShootingData={projectData.details} />
        <LevelUp Data={projectData.details} />
        <Review Data={projectData.details} />
      </section>
    </Article>
  );
};

const Article = styled.article`
  width: 55%;
  margin: 100px auto;
  color: ${darkGray};
  .project_name {
    margin-bottom: 30px;
    font-size: 3rem;
    font-weight: bold;
  }
  .info_container {
    margin: 60px 0px 0px 10px;
    li {
      display: flex;
      margin-bottom: 10px;
      font-size: 1.1rem;
      .name {
        width: 25%;
        font-weight: bold;
      }
      .content {
        width: 75%;
      }
    }
  }
  .content_section {
    margin-top: 50px;
    h2 {
      border-bottom: 1px solid lightgray;
      padding: 80px 0px 7px 10px;
      font-size: 2rem;
      font-weight: bold;
    }
    h3 {
      margin: 40px 0px 10px 15px;
      font-size: 1.7rem;
      font-weight: bold;
    }
    h4 {
      margin: 20px 0px 10px 20px;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .introduction_box {
      background-color: #eeee;
      padding: 30px 30px;
      li {
        font-size: ${paragraphFontSize};
      }
    }
    .period_personnel_box {
      margin-left: 25px;
      font-size: ${paragraphFontSize};
      li {
        span {
          font-weight: bold;
        }
      }
    }
    .links_box {
      margin: 30px 0px 0px 25px;
      li {
        margin-bottom: 20px;
        font-size: ${paragraphFontSize};
        span {
          font-weight: bold;
        }
      }
    }
    .video_box {
      width: fit-content;
      margin: 50px auto;
    }
    .tech_stack {
      margin: 40px 0px 0px 20px;
      .position {
        margin: 20px 0px 10px 0px;
        font-size: 1.3rem;
        font-weight: bold;
      }
      .skills {
        display: inline;
        margin: 10px 10px 30px 5px;
        padding: 5px 10px;
        line-height: 230%;
        border-radius: 5px;
        font-size: ${paragraphFontSize};
        font-weight: bold;
        color: #a02525ec;
        background-color: #eeee;
      }
    }
    .structure_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 30px auto;
      .structure_imgbox {
        width: fit-content;
        img {
          display: block;
          width: 500px;
        }
      }
      .structure_explain {
        border: 1px solid lightgray;
        width: 500px;
        padding: 100px 50px;
        li {
          margin-bottom: 20px;
          font-size: ${paragraphFontSize};
        }
      }
    }
    .cooperation_explain {
      width: 85%;
      margin: 10px 0px 0px 25px;
      li {
        margin-bottom: 20px;
        font-size: ${paragraphFontSize};
      }
    }
  }

  @media (max-width: 1520px) {
    div.structure_container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Content;
