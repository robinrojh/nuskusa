import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from "react-notion";

const FreshmenWeb = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 187px;
    margin-bottom: 50px;
    @media only screen and (max-width : 480px) {
      margin-left: 30px;
    }
` 
const FreshmenTitle = styled.h1`
    color: #050716;
    font-size: 50px;
    text-align: left;
    @media only screen and (max-width : 480px) {
      font-size: 20px;
    }
`

const FreshmenDesc = styled.p`
    color: #3C3D43;
    font-family: "Gill Sans", sans-serif;
    font-size: 15px;
    text-align: left;
    @media only screen and (max-width : 480px) {
      font-size: 10px;
    }
`

const FreshmenLink = styled.div`
    color: #3C3D43;
    font-family: "Gill Sans", sans-serif;
    font-size: 15px;
    text-align: left;
    @media only screen and (max-width : 480px) {
      font-size: 10px;
    }
`
const NotionWrapper = styled.div`
    width: 80%;
    background-color: #d5ddeb;
    @media only screen and (max-width : 480px) {
      width: 90%;
    }
`

function Freshmen(){
    const [arrivalResponse, setArrivalResponse] = useState({});

    useEffect(() => {
        const NOTION_PAGE_ID = 'de2edbbb41bc4974b41b285359cef8cb';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setArrivalResponse(resJson);
      });
    }, [])

    const [dormResponse, setDormResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '5712118571014caeba43ffd7c89eba64';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setDormResponse(resJson);
      });
    }, [])

    const [lifeResponse, setLifeResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '6c690bc073dd46e1a175f349710cc7b8';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setLifeResponse(resJson);
      });
    }, [])

    const [schoolResponse, setSchoolResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '01b1b662fc574cdcacf3cd9b35a8b19f';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setSchoolResponse(resJson);
      });
    }, [])

    const [sgResponse, setSgResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '43152d21b8ff42278c9100af5c474c6c';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then(res => res.json())
        .then((resJson) => {
        setSgResponse(resJson);
        });
    }, [])

    return(
        <FreshmenWeb>
            <FreshmenTitle>AY23/24 신입생 여러분 환영합니다!</FreshmenTitle>
            <FreshmenDesc>신입생 가이드북와 함께하는 슬기로운 새내기 생활!!</FreshmenDesc>
            <FreshmenLink> 
                <a href='https://nusks.notion.site/e16b18a63fee436aaaf55711155fe96a?v=8e31f7a756fa43d6b10fd6a1881961fb' 
                rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                    <p>가이드북 링크 바로가기</p>
                </a>
            </FreshmenLink>
            <NotionWrapper>
                <NotionRenderer blockMap={arrivalResponse} fullPage={true} />
                <NotionRenderer blockMap={dormResponse} fullPage={true} />
                <NotionRenderer blockMap={lifeResponse} fullPage={true} />
                <NotionRenderer blockMap={sgResponse} fullPage={true} />
            </NotionWrapper>
        </FreshmenWeb>
    );
}

export default Freshmen;