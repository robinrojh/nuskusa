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
    const [utransferResponse, setUtransferResponse] = useState({});

    useEffect(() => {
        const NOTION_PAGE_ID = '9162aefe317d441fada73d36235022c0';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setUtransferResponse(resJson);
      });
    }, [])

    const [arrivalResponse, setArrivalResponse] = useState({});

    useEffect(() => {
        const NOTION_PAGE_ID = 'd60562eb3b704e29b578e1be38c811af';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setArrivalResponse(resJson);
      });
    }, [])

    const [dormResponse, setDormResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = 'f184a475ccf74f67a4a3e9bc9085a9b0';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setDormResponse(resJson);
      });
    }, [])

    const [lifeResponse, setLifeResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '7e6d96fdc5d04320a95b3e8077dd0759';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setLifeResponse(resJson);
      });
    }, [])

    const [schoolResponse, setSchoolResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = 'b3d1dca47e2c4844b016e3b6e4fcda20';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(res => res.json())
      .then((resJson) => {
        setSchoolResponse(resJson);
      });
    }, [])

    const [sgResponse, setSgResponse] = useState({});
    useEffect(() => {
        const NOTION_PAGE_ID = '3bdd26a479434f2486d874ffdb086f14';
        fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
        .then(res => res.json())
        .then((resJson) => {
        setSgResponse(resJson);
        });
    }, [])

    return(
        <FreshmenWeb>
            <FreshmenTitle>AY24/25 신입생 여러분 환영합니다!</FreshmenTitle>
            <FreshmenDesc>AY24/25 신입생 단톡방 가입하기!!</FreshmenDesc>
            <FreshmenLink> 
                <a href='https://forms.gle/K2ypGctxbzRqMyt78' 
                rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                    <p>단톡방 가입 구글폼</p>
                </a>
            </FreshmenLink>
            <FreshmenDesc>신입생 가이드북와 함께하는 슬기로운 새내기 생활!!</FreshmenDesc>
            <FreshmenLink> 
                <a href='https://peat-cymbal-9ed.notion.site/3cecfab5d83440d8930d2b42eee75072?v=2e71df7f9c54439691a4c6b75c1d9ef2' 
                rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                    <p>가이드북 링크 바로가기</p>
                </a>
            </FreshmenLink>
            <NotionWrapper>
                <NotionRenderer blockMap={utransferResponse} fullPage={true} />
                <NotionRenderer blockMap={arrivalResponse} fullPage={true} />
                <NotionRenderer blockMap={dormResponse} fullPage={true} />
                <NotionRenderer blockMap={lifeResponse} fullPage={true} />
                <NotionRenderer blockMap={sgResponse} fullPage={true} />
            </NotionWrapper>
        </FreshmenWeb>
    );
}

export default Freshmen;