import styled from "styled-components";
import { Link } from "react-scroll";
import { darkGray, butter } from "../../theme";
import github from "../../assets/images/links/github_butter.png";
import blog from "../../assets/images/links/blog_butter.png";
import resume from "../../assets/images/links/resume_butter.png";
import { useEffect } from "react";

const Header = () => {
  const colorChange = () => {
    const headerEl = document.querySelector(".header");
    if (window.scrollY > 100) {
      headerEl?.setAttribute(
        "style",
        "background:rgb(33, 32, 33); transition:0.2s"
      );
    } else {
      headerEl?.setAttribute(
        "style",
        "background:transparent; transition:0.2s"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", colorChange);
    return () => {
      window.removeEventListener("scroll", colorChange);
    };
  }, []);

  return (
    <Section className="header">
      <ul>
        <li className="title">
          <Link to="preview" smooth={true}>
            SeYoung
          </Link>
        </li>
        <li className="navigation">
          <Link to="about" smooth={true}>
            About me
          </Link>
        </li>
        <li className="navigation">
          <Link to="projects" smooth={true}>
            Projects
          </Link>
        </li>
        <li className="navigation">
          <Link to="internship" smooth={true}>
            Internship
          </Link>
        </li>
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

  &.color_change {
    background-color: ${darkGray};
  }

  ul {
    display: flex;
    align-items: center;
    .title {
      margin: 3.5rem 10rem 2rem 5rem;
      font-size: 2rem;
      color: ${butter};
      cursor: pointer;
    }
    .navigation {
      margin: 3.5rem 1rem 2rem 1rem;
      font-size: 1.3rem;
      color: ${butter};
      cursor: pointer;
    }
  }

  .links_container {
    margin-right: 5rem;
    img {
      width: 1.6rem;
      margin: 0px 35px 0px 0px;
    }
  }
`;

export default Header;
