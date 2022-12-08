import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import portfoliomain from "../../assets/images/portfoliomain.png";
import github from "../../assets/images/links/github_butter.png";
import network from "../../assets/images/links/network.png";
import blog from "../../assets/images/links/blog_butter.png";
import { ProjectDataType } from "../../interface";

interface ProjectCardProps {
  content: ProjectDataType;
}

const ProjectCard = ({ content }: ProjectCardProps) => {
  return (
    <Article>
      <div className="img_box">
        <img src={content.img_url}></img>
      </div>
      <div className="title">{content.project_name}</div>
      <div className="activity">관련활동: {content.activity_type}</div>
      <p className="explain">{content.project_introduction}</p>
      <div className="links_container">
        <a href={content.github_url}>
          <img src={github}></img>
        </a>
        <a href={content.distribute_url}>
          <img src={network} />
        </a>
        <a href={content.blog_url}>
          <img src={blog}></img>
        </a>
      </div>
    </Article>
  );
};

const Article = styled.article`
  width: 450px;
  margin: 0px 50px 50px 0px;
  border: 1px solid rgb(223, 222, 222, 0.3);
  border-radius: 5px;
  background-color: rgb(223, 222, 222, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: 0.5s;
  }
  .img_box {
    width: 449px;
    height: 250px;
    margin-top: 10px;
    padding: 0px 2px 0px 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    margin: 20px 15px 10px 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgb(223, 222, 222, 0.3);
    color: ${butter};
    font-size: 1.3rem;
  }
  .activity {
    margin-left: 15px;
    color: ${butter};
    font-size: 0.9rem;
  }
  .explain {
    width: 85%;
    margin: 10px 0px 10px 15px;
    color: ${butter};
    font-size: 0.9rem;
    line-height: 120%;
  }
  .links_container {
    margin-left: 15px;
    img {
      width: 30px;
      margin: 10px 15px 15px 0px;
    }
  }
`;

export default ProjectCard;
