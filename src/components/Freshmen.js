import React from "react";
import styled from "styled-components";


const FreshmenWeb = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 187px;
    margin-bottom: 300px; 
` 
const FreshmenTitle = styled.h1`
    color: #050716;
    font-family: 'Happiness-Sans-Regular', sans-serif;
    font-size: 60px;
    text-align: left;
`

const FreshmenDesc = styled.p`
    color: #3C3D43;
    font-family: "Gill Sans", sans-serif;
    font-size: 15px;
    text-align: left;
`

function Freshmen(){
    return(
        <FreshmenWeb>
            <FreshmenTitle>신입생 여러분 환영합니다!</FreshmenTitle>
            <FreshmenDesc>AY23/24 신입생분들은 한인회 공식 신입생 단톡방 초대를 위해 아래 구글폼을 작성하여 주시기를 바랍니다.</FreshmenDesc>
        </FreshmenWeb>
    );
}

export default Freshmen;