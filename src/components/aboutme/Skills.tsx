import { Link } from "react-router-dom";
import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import { SkillsInfo } from "../../interface";

interface SkillsProps {
  content: SkillsInfo;
}

const Skills = ({ content }: SkillsProps) => {
  return (
    <Container>
      <div className="skill_type">{content.skill_type}</div>
      <div className="img_name_box">
        <div>
          <img src={content.imgUrl}></img>
        </div>
        <span>{content.skillName}</span>
      </div>
      <div className="projects_box">
        <span className="projects">projects:</span>
        {content.projects.map((project) => {
          return (
            <Link to={project.link} key={project.project_name}>
              <span className="project_name">{project.project_name},</span>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.ul`
  border: ${layout};
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  .skill_type {
    width: 100%;
    padding: 5px 15px;
    justify-content: flex-start;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #333;
    color: ${butter};
  }
  .img_name_box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    background-color: ${butter};
    color: ${darkGray};
    div {
      width: 45px;
      height: 45px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      margin-left: 20px;
      font-size: 1rem;
      font-weight: bold;
      color: ${darkGray};
    }
  }
  .projects_box {
    justify-content: flex-start;
    width: 100%;
    height: 55px;
    padding: 10px 5px 10px 15px;
    border-top: 1px solid grey;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${butter};
    font-size: 0.7rem;
    color: grey;
    .projects {
      margin: 10px 5px 10px 0px;
    }
    .project_name {
      margin: 10px 5px 10px 0px;
      color: grey;
      cursor: pointer;
      :hover {
        color: ${darkGray};
      }
    }
  }
`;

export default Skills;
