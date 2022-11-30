import { useMemo } from "react";
import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import profileimg from "../../assets/images/profile.png";
import Title from "../title/Title";
import { TitleData } from "../../assets/data/Data";
import Skills from "./Skills";
import SkillsList from "../../assets/data/skillsList.json";

const AboutMe = () => {
  const skillsTitle = TitleData[0];
  const frontList = useMemo(() => SkillsList["Front-end"], []);
  const communicationList = useMemo(() => SkillsList.communication, []);

  return (
    <>
      <Section>
        <div className="img_box">
          <img src={profileimg}></img>
        </div>
        <div className="introduction_container">
          <p className="intro">안녕하세요, 남다른 성장곡선을 그리는 개발자</p>
          <div className="name_box">
            <span className="name">정세영</span>
            <span className="end">입니다.</span>
          </div>
          <div className="content_box">
            <p>개발자가 되기 전부터 제작하는 것에 큰 기쁨을 느끼며 살다가, </p>
            <p>이제는 웹개발에 푹 빠져있습니다.</p>
            <p>
              부트캠프를 통해 백엔드와 협업하여 프로젝트를 진행한 경험이 있고,
            </p>
            <p>인턴십을 통해 디자이너와 figma로 협업한 경험이있습니다. </p>
            <p>
              개발자의 생명은 꾸준함이라고 믿고 1일 1커밋과 기술 블로그를
              운영하고 있습니다.
            </p>
          </div>
        </div>
      </Section>
      <Title content={skillsTitle} />
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
    </>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .img_box {
    width: 500px;
    height: 500px;
    margin: 200px 0px 200px 0px;
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

export default AboutMe;
