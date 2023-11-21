import React from 'react';
import styled from 'styled-components';

//슬라이드에 들어갈 이미지 item

function Slide({ img }) {
    return <IMG src={img}/>;
  }
  
  const IMG = styled.img`
    width: 350px;
    height: 350px;
    @media only screen and (max-width : 480px) {
        width: 110px;
        height: 110px;
    }
  `;
  
  export default Slide