import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import justcode from "../../assets/images/justcode.png";
import { EducationType } from "../../interface";

interface ExperienceProps {
  content: EducationType;
}

const Experience = ({ content }: ExperienceProps) => {
  return (
    <Article>
      <div className="info_container">
        <img src={content.img_url}></img>
        <ul className="info_box">
          <li className="course_name">{content.course_name}</li>
          <li className="major">{content.major}</li>
          {content.double_major === "none" ? null : (
            <li className="double_major">{content.double_major}</li>
          )}
          <li className="period">{content.period}</li>
        </ul>
      </div>
      <ul className="explain_container">
        {content.explain.map((explain, i) => {
          return <li key={i}>{explain}</li>;
        })}
      </ul>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 68%;
    margin: 30px 0px;
    border-left: 2px solid rgb(223, 222, 222, 0.3);
    li {
      width: 100%;
      margin-bottom: 20px;
      padding-left: 40px;
      color: ${butter};
      font-size: 1.1rem;
      line-height: 120%;
    }
  }
`;

export default Experience;
