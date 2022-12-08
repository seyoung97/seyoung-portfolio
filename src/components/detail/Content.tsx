import ReactPlayer from "react-player/youtube";
import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import { ProjectDataType } from "../../interface";
import Skills from "../aboutme/Skills";

interface ContentProps {
  projectData: ProjectDataType;
}

const Content = ({ projectData }: ContentProps) => {
  return (
    <Article>
      <h1 className="project_name">{projectData.project_name}</h1>
      <ul className="info_container">
        <li>
          <span>한 줄 소개</span>
          {projectData.details.breif_info.introduction}
        </li>
        <li>
          <span>진행 기간</span>
          {projectData.details.breif_info.period}
        </li>
        <li>
          <span>팀 구성</span>
          {projectData.details.breif_info.team}
        </li>
        <li>
          <span>관련 활동</span>
          {projectData.activity_type}
        </li>
      </ul>
      <section className="content_section">
        <h2>프로젝트 소개</h2>
        <h3>{projectData.project_name}</h3>
        <ul className="introduction_box">
          {projectData.details.project_introduction.map((paragrahp, i) => {
            return <li key={i}>{paragrahp}</li>;
          })}
        </ul>
        <h2>Links</h2>
        <ul className="links_box">
          {projectData.details.links.map((content) => {
            return (
              <li key={content.link_name}>
                <span>{content.link_name}:</span>
                <a href={content.link_url}>🔎자세히 보러가기</a>
              </li>
            );
          })}
        </ul>
        <h2>시연영상</h2>
        <div className="video_box">
          <ReactPlayer
            url={projectData.details.video_url}
            width={"1000px"}
            height={"630px"}
          ></ReactPlayer>
        </div>
        <h2>사용 기술 및 라이브러리</h2>
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
        <h2>프로젝트 구조</h2>
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
        <h2>협업방식</h2>
        <h3>Planning Meeting 1: 주제선정, 범위설정</h3>
        <h3>Planning Meeting 2: 역할 분담, 컨벤션</h3>
        <h3>Planning Meeting 3: 새로운 기획 회의</h3>
        <h4>Daily Stnad-up meeting</h4>
        <h4>Emergency Meeting</h4>
        <h3>Git Flow 방식</h3>
        <h2>담당 기능</h2>
        <h3>메인 페이지</h3>

        <h4>Drop down menu</h4>
        <h4>Carousel 베너 광고</h4>
        <h4>신상품 및 인기상품 리스트</h4>
        <h3>상품 리스트 페이지</h3>
        <h4>정렬기능</h4>
        <h4>무한스크롤 기능</h4>
        <h3>장바구니 페이지</h3>
        <h2>Trouble Shooting</h2>
        <h2>성장 Point</h2>
        <h2>느낀점</h2>
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
    li {
      display: flex;
      margin-bottom: 10px;
      font-size: 1.2rem;
      /* border: ${layout}; */
      span {
        /* border: ${layout}; */
        width: 250px;
        font-weight: bold;
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
      padding: 60px 0px 10px 15px;
      font-size: 1.7rem;
      font-weight: bold;
    }
    h4 {
      padding: 20px 0px 10px 20px;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .introduction_box {
      background-color: #eeee;
      padding: 30px 30px;
      li {
        font-size: 1.1rem;
      }
    }
    .period_personnel_box {
      margin-left: 25px;
      font-size: 1.1rem;
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
        font-size: 1.1rem;
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
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        color: #a02525ec;
        background-color: #eeee;
      }
    }
    .structure_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85%;
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
        }
      }
    }
  }
`;

export default Content;
