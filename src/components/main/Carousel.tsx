import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";

import { Navigation } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { darkGray, butter, layout } from "../../theme";
import lululab from "../../assets/images/lululab5.png";

const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={lululab}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={lululab}></img>
      </SwiperSlide>
    </Swiper>
  );
};

/*const Section = styled.section`
  width: 100%;
  padding: 100px 0px 150px 0px;
  color: #fffef2;
  position: absolute;
  top: 15%;
  div.swiper_container {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;
    .back_box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5rem;
      width: 80px;
      height: 80px;
      border: 1px solid ${butter};
      border-radius: 50%;
      color: ${butter};
      .back {
        font-size: 2rem;
        text-align: center;
      }
    }
    .next_box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5rem;
      width: 80px;
      height: 80px;
      border: 1px solid ${butter};
      border-radius: 50%;
      color: ${butter};
      .next {
        font-size: 2rem;
        text-align: center;
      }
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
`;*/

export default Carousel;
