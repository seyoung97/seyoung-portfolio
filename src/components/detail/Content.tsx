import ReactPlayer from "react-player/youtube";
import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";

const Content = () => {
  return (
    <Article>
      <h1 className="project_name">사조의 공방 프로젝트</h1>
      <ul className="info_container">
        <li>
          <span>한 줄 소개</span>
          2주일 동안 모두의공방 페이지의 모든 기능을 직접 구현한 클론
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
      <section className="content_section">
        <h2>프로젝트 소개</h2>
        <h3>사조의 공방 프로젝트</h3>
        <ul className="introduction_box">
          <li>
            모두의 공방은 원하는 공방을 쉽고 빠르게 찾을 수 있는 맞춤 제작 전문
            플랫폼입니다.
          </li>
          <li>
            모두의 공방에서 제공하는 주요 기능은 맞춤 제작을 문의할 수 있는 맞춤
            제작소와 이미 만들어진 제품을 옵션에 따라 구매할 수 있는
            디자인마켓으로 이루어져있습니다.
          </li>
          <li>
            저희는 디자인마켓의 다양한 옵션 선택 기능과 필터링 기능을 구현해보고
            싶어서 모두의 공방을 선택했습니다.
          </li>
        </ul>
        <h2>Links</h2>
        <ul className="links_box">
          <li>
            <span>프론트 엔드 레포:</span>
            <a href="https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team4-front">
              🔎자세히 보러가기
            </a>
          </li>
        </ul>
        <h2>시연영상</h2>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=0NputbNx3_s&t=3s"
          width={"1000px"}
          height={"630px"}
        ></ReactPlayer>
        <h2>사용 기술 및 라이브러리</h2>
        <ul className="tech_stack">
          <li>Front End</li>
          <div>
            <span>HTML</span>
          </div>
          <li>Back End</li>
          <li>Communication</li>
        </ul>
        <h2>프로젝트 구조</h2>
        <img src="/public/images/projects/structure/cart_structure.png"></img>
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
      border: ${layout};
      span {
        border: ${layout};
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
      margin: 20px 0px 0px 25px;
      li {
        font-size: 1.1rem;
        span {
          font-weight: bold;
        }
      }
    }
    .video_player {
      margin: 40px auto;
      width: 800px;
    }
    .tech_stack {
      margin: 40px 0px 0px 20px;
      li {
        margin: 20px 0px 10px 0px;
        font-size: 1.3rem;
        font-weight: bold;
      }
      div {
        span {
          margin: 10px 10px 30px 5px;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          color: #a02525ec;
          background-color: #eeee;
        }
      }
    }
  }
`;

export default Content;
