import { useMemo, useState } from "react";
import styled from "styled-components";

import { darkGray, butter, layout } from "../../theme";
import profileimg from "../../assets/images/profile.png";
import Title from "../title/Title";
import { TitleData } from "../../assets/data/Data";
import Skills from "./Skills";
import SkillsList from "../../assets/data/skillsList.json";
import Category from "./Category";
import Experience from "./Experience";
import ExperienceData from "../../assets/data/education.json";

const AboutMe = () => {
  const skillsTitle = TitleData[0];
  const techStack = useMemo(() => SkillsList["tech_stack"], []);
  const ExperienceList = useMemo(() => ExperienceData, []);
  const [category, setCategory] = useState("selfIntroduction");

  return (
    <AboutSection id="about">
      <Category category={category} setCategory={setCategory} />
      {category === "selfIntroduction" ? (
        <IntroductionArticle>
          <div className="img_box">
            <img src={profileimg}></img>
          </div>
          <div className="introduction_container">
            <p className="intro">안녕하세요, 가파른 성장곡선을 그리는 개발자</p>
            <div className="name_box">
              <span className="name">정세영</span>
              <span className="end">입니다.</span>
            </div>
            <div className="content_box">
              <p>
                IT회사에서의 인턴십을 계기로 코딩에 관심을 갖게 되었습니다.{" "}
              </p>
              <p>
                공부하면서 상상한 것을 직접 구현할 수 있는 개발의 매력에
                매료되었고 개발자로 진로를 전향했습니다.
              </p>
              <p>
                비록 개발을 전공하지는 않았지만 개발자가 되기로 마음먹고 5개월
                간 열정을 쏟아 공부했습니다. 부트캠프에 참여해 하루에 10시간
                이상 코딩 공부에 매진했고 백엔드와 협업하여 두 번의 프로젝트를
                진행했습니다. 인턴십을 통해 예약 기능, 음성 녹음 기능 등 다양한
                기능들을 구현하면서 실력을 쌓았습니다.
              </p>
              <p>
                개발자의 생명은 꾸준함이라고 믿고 1일 1커밋과 기술 블로그를
                운영하고 있습니다.
              </p>
            </div>
          </div>
        </IntroductionArticle>
      ) : null}

      {category === "techStack" ? (
        <SkillsSection>
          <ol>
            {techStack.map((frontSkills) => {
              return (
                <li>
                  <Skills key={frontSkills.id} content={frontSkills} />
                </li>
              );
            })}
          </ol>
        </SkillsSection>
      ) : null}
      {category === "education" ? (
        <EducationSection>
          {ExperienceList.education.map((education) => {
            return <Experience key={education.id} content={education} />;
          })}
        </EducationSection>
      ) : null}
      {category === "workExperience" ? (
        <WorkExperienceSection>
          {ExperienceList.work_experience.map((work) => {
            return <Experience key={work.id} content={work} />;
          })}
        </WorkExperienceSection>
      ) : null}
    </AboutSection>
  );
};

const AboutSection = styled.section`
  width: 100%;
  height: 100%;
`;

const IntroductionArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .img_box {
    width: 500px;
    height: 500px;
    margin: 100px 0px 200px 0px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .introduction_container {
    width: 700px;
    margin-left: 200px;
    color: ${butter};
    .intro {
      font-size: 1.3rem;
    }
    .name_box {
      margin: 30px 0px 50px 0px;
      .name {
        font-size: 4rem;
        font-weight: bold;
        background-color: ${butter};
        color: ${darkGray};
        padding: 10px 10px 0px 10px;
      }
      span.end {
        font-size: 2rem;
        margin-left: 10px;
      }
    }
    .content_box {
      p {
        margin-bottom: 10px;
        line-height: 120%;
      }
    }
  }
  @media (max-width: 1520px) {
    div.img_box {
      width: 400px;
      height: 400px;
      margin: 80px 0px 200px 0px;
    }
  }

  @media (max-width: 1280px) {
    div.img_box {
      width: 350px;
      height: 350px;
      margin: 80px 0px 200px 0px;
    }

    .introduction_container {
      width: 550px;
      margin-left: 120px;
    }
  }
`;

const SkillsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ol {
    width: 80%;
    margin: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: calc(100% / 5);
      margin: 10px;
    }
  }
  @media (max-width: 1520px) {
    ol {
      li {
        width: calc(100% / 4);
      }
    }
  }
`;

const EducationSection = styled.section`
  width: 59%;
  margin: 70px auto 0px auto;
`;

const WorkExperienceSection = styled.section`
  width: 60%;
  margin: 70px auto 0px auto;
`;

export default AboutMe;
