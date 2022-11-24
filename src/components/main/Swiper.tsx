import styled from "styled-components";
import { darkGray, butter, layout } from "../../theme";
import lululab from "../../assets/images/lululab2.png";

const Swiper = () => {
  return (
    <Section>
      <div className="swiper_container">
        <div className="prev">이전</div>
        <div className="introduction">
          <h3 className="title">Lululab</h3>
          <h3 className="title_detail">병원예약 서비스</h3>
          <p>기업 룰루랩에서 제공한 기획안을 참고하여 병원예약 시스템을 구축</p>
        </div>
        <div className="image_box">
          <img src={lululab} alt="프로젝트 대표 이미지"></img>
        </div>
        <div className="prev">다음</div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 100px 0px 150px 0px;
  background-color: ${darkGray};
  color: ${butter};
  div.swiper_container {
    display: flex;
    width: fit-content;
    margin: auto;
    div.prev {
      width: 80px;
      height: 80px;
      border: 1px solid ${butter};
      border-radius: 50%;
      color: ${butter};
    }

    div.introduction {
      margin-right: 30px;
      padding-top: 50px;
      h3.title {
        font-size: 2.5rem;
        font-weight: bold;
      }
      h3.title_detail {
        font-size: 2.3rem;
      }
      p {
        width: 310px;
        margin-top: 50px;
        font-size: 1.1rem;
      }
    }
    div.image_box {
      /* border: ${layout}; */
      width: 900px;
      height: 600px;
      border-radius: 10px;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
`;

export default Swiper;
