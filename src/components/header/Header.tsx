import styled from "styled-components";
import { Link } from "react-scroll";
import { darkGray, butter } from "../../theme";
import github from "../../assets/images/links/github_butter.png";
import blog from "../../assets/images/links/blog_butter.png";
import resume from "../../assets/images/links/resume_butter.png";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  const colorChange = () => {
    const headerEl = document.querySelector(".header");
    if (window.scrollY > 50) {
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
    <Nav className="header">
      <ul>
        <Link to="preview" smooth={true}>
          <li className="title" onClick={goMain}>
            SeYoung
          </li>
        </Link>
        <Link to="about" smooth={true} offset={-104}>
          <li className="navigation" onClick={goMain}>
            About me
          </li>
        </Link>
        <Link to="projects" smooth={true} offset={-120}>
          <li className="navigation" onClick={goMain}>
            Projects
          </li>
        </Link>
        <Link to="internship" smooth={true} offset={-260}>
          <li className="navigation" onClick={goMain}>
            Internship
          </li>
        </Link>
      </ul>
      <div className="links_container">
        <a href="https://github.com/seyoung97" target="_blank">
          <img src={github} />
        </a>
        <a href="https://velog.io/@seeyong_0" target="_blank">
          <img src={blog} />
        </a>
        <a href="../pdf/resume.pdf">
          <img src={resume}></img>
        </a>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0%;
  z-index: 2;

  ul {
    display: flex;
    align-items: center;
    .title {
      margin: 40px 200px 20px 100px;
      font-size: 2rem;
      color: ${butter};
      cursor: pointer;
    }
    .navigation {
      margin: 40px 20px 20px 20px;
      font-size: 1.3rem;
      color: ${butter};
      cursor: pointer;
    }
  }

  .links_container {
    margin-right: 100px;
    img {
      width: 1.6rem;
      margin: 0px 35px 0px 0px;
    }
  }
  @media (max-width: 1280px) {
    li.title {
      margin: 40px 100px 20px 100px;
    }

    div.links_container {
      margin-right: 50px;
    }
  }
`;

export default Header;
