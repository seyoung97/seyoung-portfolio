import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import portfoliomain from "../../assets/images/portfoliomain.png";
import github from "../../assets/images/links/github_butter.png";
import network from "../../assets/images/links/network.png";
import blog from "../../assets/images/links/blog_butter.png";

const ProjectCard = () => {
  return (
    <Article>
      <div className="img_box">
        <img src={portfoliomain}></img>
      </div>
      <div className="title">포트폴리오 사이트</div>
      <div className="activity">관련활동: 개인 프로젝트</div>
      <p className="explain">
        React와 TypeScript 기반으로 제작한 포트폴리오 사이트입니다.
      </p>
      <div className="links_container">
        <a href="https://github.com/seyoung97/seyoung-portfolio">
          <img src={github}></img>
        </a>
        <a>
          <img src={network} />
        </a>
        <a>
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
    margin: 15px 15px 10px 10px;
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
    width: 90%;
    margin: 10px 0px 10px 15px;
    color: ${butter};
    font-size: 0.9rem;
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
