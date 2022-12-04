import { useMemo, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
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
  const frontList = useMemo(() => SkillsList["Front-end"], []);
  const communicationList = useMemo(() => SkillsList.communication, []);
  const ExperienceList = useMemo(() => ExperienceData, []);
  const [category, setCategory] = useState("selfIntroduction");

  return (
    <AboutSection id="about">
      <Category category={category} setCategory={setCategory} />
      {category === "selfIntroduction" ? (
        <Fade bottom>
          <IntroductionArticle>
            <div className="img_box">
              <img src={profileimg}></img>
            </div>
            <div className="introduction_container">
              <p className="intro">
                안녕하세요, 남다른 성장곡선을 그리는 개발자
              </p>
              <div className="name_box">
                <span className="name">정세영</span>
                <span className="end">입니다.</span>
              </div>
              <div className="content_box">
                <p>
                  개발자가 되기 전부터 제작하는 것에 큰 기쁨을 느끼며 살다가,{" "}
                </p>
                <p>이제는 웹개발에 푹 빠져있습니다.</p>
                <p>
                  부트캠프를 통해 백엔드와 협업하여 프로젝트를 진행한 경험이
                  있고,
                </p>
                <p>인턴십을 통해 디자이너와 figma로 협업한 경험이있습니다. </p>
                <p>
                  개발자의 생명은 꾸준함이라고 믿고 1일 1커밋과 기술 블로그를
                  운영하고 있습니다.
                </p>
              </div>
            </div>
          </IntroductionArticle>
        </Fade>
      ) : null}

      {category === "techStack" ? (
        <SkillsSection>
          <article>
            <h2>Front-end</h2>
            <div>
              {frontList.map((frontSkills) => {
                return <Skills key={frontSkills.id} content={frontSkills} />;
              })}
            </div>
          </article>
          <article>
            <h2>Communication</h2>
            <div>
              {communicationList.map((communicationSkills) => {
                return (
                  <Skills
                    key={communicationSkills.id}
                    content={communicationSkills}
                  />
                );
              })}
            </div>
          </article>
        </SkillsSection>
      ) : null}
      {category === "education" ? (
        <Fade bottom>
          <EducationSection>
            {ExperienceList.education.map((education) => {
              return <Experience key={education.id} content={education} />;
            })}
          </EducationSection>
        </Fade>
      ) : null}
      {category === "workExperience" ? (
        <Fade bottom>
          <WorkExperienceSection>
            {ExperienceList.work_experience.map((work) => {
              return <Experience key={work.id} content={work} />;
            })}
          </WorkExperienceSection>
        </Fade>
      ) : null}
    </AboutSection>
  );
};

const AboutSection = styled.section`
  width: 100%;
  height: 100vh;
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
      margin-bottom: 20px;
    }
    .name_box {
      margin: 30px 0px 100px 0px;
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
      }
    }
  }
`;

const SkillsSection = styled.section`
  border-radius: 2%;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 70px;
  article {
    width: 48.5%;
    padding-bottom: 20px;
    border-radius: 5px;
    background-color: rgb(211, 211, 211, 0.3);
    h2 {
      text-align: center;
      color: ${darkGray};
      font-size: 2rem;
      font-weight: bold;
      margin: 20px 0px 10px 0px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

const EducationSection = styled.section`
  width: 60%;
  margin: 70px auto 0px auto;
`;

const WorkExperienceSection = styled.section`
  width: 60%;
  margin: 70px auto 0px auto;
`;

export default AboutMe;
