import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import justcode from "../../assets/images/justcode.png";

const Experience = () => {
  return (
    <Article>
      <div className="info_container">
        <img src={justcode}></img>
        <ul className="info_box">
          <li className="course_name">JUSTCODE</li>
          <li className="major">프론트엔드 6기</li>
          <li className="double_major">none</li>
          <li className="period">2022-08 ~ 2022-10</li>
        </ul>
      </div>
      <ul className="explain_container">
        <li>
          JUST CODE는 웹개발의 기초부터 프로젝트 실습까지 경험할 수 있는 코딩
          부트캠프입니다.
        </li>
        <li>
          프론트엔드를 배우고 싶어서 부트캠프를 알아보던 중 JUSTCODE의
          커리큘럼이 JavaScript와 리액트 중심인 점, 오프라인 장소를 제공해
          동료들과 함께 학습할 수 있다는 점, 원티드와 함께 기업 협업의 기회를
          제공한다는 점을 고려해 선택했습니다.
        </li>
        <li>
          Vanilla JavaScript, React를 중점적으로 학습해 팀프로젝트를 진행할 수
          있을 정도로 단기간에 역량을 향상시켰습니다.
        </li>
        <li> 백엔드와 협업하여 두 번의 프로젝트를 진행했습니다.</li>
      </ul>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  width: 100%;
  border: 1px solid rgb(223, 222, 222, 0.3);
  border-radius: 5px;
  background-color: rgb(223, 222, 222, 0.1);

  .info_container {
    width: 20%;
    margin: 30px 0px 30px 60px;
    img {
      width: 150px;
    }
    .info_box {
      margin-top: 10px;
      color: ${butter};
      li {
        margin-bottom: 5px;
      }
      .course_name {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .period {
        margin-top: 30px;
        color: #868686;
      }
    }
  }
  .explain_container {
    /* border: ${layout}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 68%;
    li {
      width: 100%;
      margin-bottom: 20px;
      color: ${butter};
      font-size: 1.1rem;
      line-height: 120%;
    }
  }
`;

export default Experience;
