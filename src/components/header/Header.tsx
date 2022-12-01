import styled from "styled-components";
import { darkGray, butter } from "../../theme";
import github from "../../assets/images/links/github_butter.png";
import blog from "../../assets/images/links/blog_butter.png";
import resume from "../../assets/images/links/resume_butter.png";

const Header = () => {
  return (
    <Section>
      <ul>
        <li className="title">SeYoung</li>
        <li className="navigation">About me</li>
        <li className="navigation">Projects</li>
        <li className="navigation">Internship</li>
      </ul>
      <div className="links_container">
        <a href="https://github.com/seyoung97">
          <img src={github} />
        </a>
        <a href="https://velog.io/@seeyong_0">
          <img src={blog} />
        </a>
        <a href="/src/assets/pdf/resume.pdf">
          <img src={resume}></img>
        </a>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0%;
  z-index: 2;
  background-image: linear-gradient(
    to bottom,
    rgba(33, 32, 33, 1),
    rgba(33, 32, 33, 0)
  );

  ul {
    display: flex;
    align-items: center;
    .title {
      margin: 3.5rem 10rem 2rem 5rem;
      font-size: 2rem;
      color: ${butter};
    }
    .navigation {
      margin: 3.5rem 1rem 2rem 1rem;
      font-size: 1.3rem;
      color: ${butter};
    }
  }

  .links_container {
    margin-right: 5rem;
    img {
      width: 2rem;
      margin: 0px 40px 0px 0px;
    }
  }
`;

export default Header;
