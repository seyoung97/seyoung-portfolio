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
import lululab from "../../assets/images/lululab6.png";
import haii from "../../assets/images/haii.png";
import bitbyte from "../../assets/images/bitbyte.png";
import modu from "../../assets/images/modu.png";
import justmeat from "../../assets/images/justmeat.png";

const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={lululab}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={haii}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={bitbyte}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={modu}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src={justmeat}></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
