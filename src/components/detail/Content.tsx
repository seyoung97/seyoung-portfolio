import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";

const Content = () => {
  return (
    <Article>
      <h1 className="project_name">사조의 공방 프로젝트</h1>
      <ul className="info_container">
        <li>
          <span>한 줄 소개</span>
          2주일 동안 모두의공방 페이지의 모든 기능을 직접 구현해보는 클론
          프로젝트입니다.
        </li>
        <li>
          <span>진행 기간</span>
        </li>
        <li>
          <span>팀 구성</span>
        </li>
        <li>
          <span>관련 활동</span>
        </li>
      </ul>
      <h2>프로젝트 소개</h2>
      <h3>사조의 공방 프로젝트</h3>
      <h3>개발 기간 및 인원</h3>
      <h2>Links</h2>
      <h2>시연영상</h2>
      <h2>사용 기술 및 라이브러리</h2>
      <h2>프로젝트 구조</h2>
    </Article>
  );
};

const Article = styled.article`
  width: 70%;
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
      border: ${layout};
      span {
        border: ${layout};
        width: 250px;
        font-weight: bold;
      }
    }
  }
`;

export default Content;
