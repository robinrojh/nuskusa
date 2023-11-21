import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import Slider from "react-slick";
import img1 from '../Events/신입생 단톡방.png'; 
import img2 from '../Events/할로윈 포토부스.png'; 
import img3 from '../Events/Halloween.png';

//이벤트 슬라이드 Function

function Carousel() {
  const settings = {
    slide: <Slide />, // slide 해주고 싶은 단위
    infinite: true, //무한 슬라이더로 할지
    speed: 500, //넘기는 속도
    arrows: false, //화살표 (양옆 버튼) 구현할 것인지
    autoplay: true, //자동 재생 할 것인지
    autoplaySpeed: 3000, //넘기는 주기
    slidesToShow: 1, // 한번에 몇개 슬라이드 보여줄 것인지
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
  };

   return (
    <Container>
      <StyledSlide {...settings}>
        <Slide img={img1}/>
        <Slide img={img2}/>
        <Slide img={img3}/>
      </StyledSlide>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 350px;
  overflow: hidden;
  @media only screen and (max-width : 480px) {
    width: 110px;
    height: 110px;
  }
`;


const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 10px;
  margin-bottom: -10px;
  width: 100%;
  @media only screen and (max-width : 480px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .slick-list {
    position: absolute;
    width: 350px;
    height: 350px;
    margin: 0 auto;
    overflow: hidden;
    top: -30px;
    @media only screen and (max-width : 480px) {
      width: 110px;
      height: 110px;
      top: -10px;
    }
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    display: none !important;
  }`
;


export default Carousel;