import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade'
import Modal from './Modal';
import Carousel from './Carousel';

function Home(){
    const [modalVisible, setModalVisible] = useState(true)  //팝업창 추가시 이미지와 url 변경 후 useState를 true로 바꿔주기
    const closeModal = () => {
        setModalVisible(false)
    }

    return(
        <HomeWeb>
            {modalVisible && (
                    <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal} 
                    image={require('../Events/2425 신입생.png')} url={'https://forms.gle/K2ypGctxbzRqMyt78'}></Modal>
            )}
            <HomeTitle>
                <Fade duration={3000}>
                    <Name>
                        <Name1>National University of Singapore Korea Society</Name1>
                        <Name2>싱가포르 국립대학 한인 학부 학생회 공식 웹사이트 입니다</Name2>
                    </Name>
                    <Logo src={require('../photos/NUS logo gray.png')}/>
                </Fade>
            </HomeTitle>
            <HomeTitle2></HomeTitle2>
            <Updates>
                <UpdatesWrapper>
                    <UpdatesTitle>Youtube</UpdatesTitle>
                    <YoutubeWrapper>
                        <iframe width="100%" height="100%" src="https://youtu.be/0f8PL-p57E8?si=3mIqU0cb1KwDUswZ" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            >
                        </iframe>
                    </YoutubeWrapper>
                </UpdatesWrapper>
                <UpdatesWrapper>
                    <UpdatesTitle>Events</UpdatesTitle>
                    <EventWrapper>
                        <Carousel></Carousel>
                    </EventWrapper>
                </UpdatesWrapper>
            </Updates>
            <TeamHeader>Our Team</TeamHeader>
            <TeamTitle>President</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic2 src={require('../photos/하아연.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>하아연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
           
            <TeamTitle>Student Life</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/손성연.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>손성연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/이채연.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>이채연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/김성준.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>김성준</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic ></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>이태윤</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/조현아.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>조현아</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
            <TeamTitle>Media & Design</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/고선민.jpeg')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>고선민</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/노주빈.jpeg')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>노주빈</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/배유민.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>배유민</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/홍하람.png')}/>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>홍하람</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
        </HomeWeb>
    );
}

const HomeWeb = styled.div`
    background-color: #FFFFFF;
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
`

const HomeTitle = styled.div`
    background: #0F1F2F;
    width: 100%;
    justify-content: flex-start;
    display: flex;
    @media only screen and (max-width : 480px) {
        flex-direction: column;
    }
`

const HomeTitle2 = styled.div`
    border-left: 100vw solid #0F1F2F;
    border-bottom: 200px solid transparent;
`

const Name = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3vw;
    margin-left: 15vw;
    justify-content: flex-start;
    @media only screen and (min-width : 1025px) {
        width: 705px;
    }
    @media only screen and (max-width : 480px) {
        width: 70%;
    }
`

const Name1 = styled.h1`
    color: #ACADAB;
    font-family: 'Optima','sans-serif';
    text-align: left;
    @media only screen and (min-width : 1025px) {
        font-size: 50px;
        font-weight: 400;
        line-height: 60px;
        margin-top: 55px;
    }
    @media only screen and (max-width : 480px) {
        font-size: 25px;
        line-height: 30px;
    }
`

const Name2 = styled.h1`
    color: #ACADAB;
    text-align: left;
    @media only screen and (min-width : 1025px) {
        font-size: 20px;
        line-height: 10px;
    }
    @media only screen and (max-width : 480px) {
        font-size: 12px;
        line-height: 15px;
    }
`

const Logo = styled.img`
    height: 260px;
    margin-top: 10px;
    margin-bottom: 40px;
    justify-content: center;
    mix-blend-mode: screen;
    margin-left: 3vw;
    opacity: 0.7;
    @media only screen and (max-width : 480px) {
        height: 150px;
    }
`

const Updates = styled.div`
    margin-top: 30px;
    margin-left: 140px;
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width : 480px) {
        margin-left: 15px; 
        margin-right: 0px;
    }
`

const UpdatesWrapper = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    border: 3px solid #B79A50;
    margin-bottom: 30px;
    margin-left: 50px;
    @media only screen and (max-width : 480px) {
        height: 130px;
        margin-bottom: 15px;
        margin-left: 10px;
        border: 2px solid #B79A50;
    }
`

const UpdatesTitle = styled.h2`
    color: #050716;
    font-size: 35px;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    text-align: left;
    @media only screen and (max-width : 480px) {
        font-size: 15px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`

const YoutubeWrapper = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    width: 560px;
    height: 315px;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width : 480px) {
        margin-left: 5px;
        margin-right: 5px;
        width: 180px;
        height: 100px;
    }
`
const EventWrapper = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width : 480px) {
        margin-left: 5px;
        margin-right: 5px;
    }
`

const TeamHeader = styled.h1`
    color: #050716;
    font-size: 45px;
    margin-left: 187px;
    margin-top: 50px;
    text-align: left;
    @media only screen and (max-width : 480px) {
        font-size: 20px;
        margin-left: 30px;
    }
`
const TeamTitle = styled.h2`
    color: #050716;
    font-size: 35px;
    margin-top: 30px;
    margin-left: 187px;
    text-align: left;
    @media only screen and (max-width : 480px) {
        font-size: 15px;
        margin-left: 30px;
    }
`

const Members = styled.div`
    margin-left: 187px; 
    margin-right: 187px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    @media only screen and (max-width : 480px) {
        margin-left: 30px; 
        margin-right: 30px;
    }
`

const MemberProfile = styled.div`
    width: 225px;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-right: 30px;
    margin-bottom: 22.5px;
    @media only screen and (max-width : 480px) {
        width: 75px;
        height: 100px;
        margin-right: 15px;
        border-radius: 7.5px;
    }
`

const ProfileHeader = styled.div`
    width: 225px;
    height: 247.5px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width : 480px) {
        width: 75px;
        height: 82px;
    }
`
const ProfileFooter = styled.div`
    background: #232A62;
    width: 225px;
    height: 52.5px;
    border-radius: 0px 0px 25px 25px;
    display: flex;
    justify-content: flex-start;
    @media only screen and (max-width : 480px) {
        width: 75px;
        height: 17.5px;
        border-radius: 0px 0px 10px 10px;
    }
`

const MemberPic = styled.img`
    width: 80%;
    display: block;
    align-self: flex-end;
`

const MemberPic2 = styled.img`
    align-self: flex-end;
    width: 110%;
    display: block;
`

const MemberName = styled.h3`
    color: white;
    font-size:18px;
    margin-left: 20px;
    align-self: center;
    @media only screen and (max-width : 480px) {
        font-size: 10px;
        margin-left: 10px;
    }
`

export default Home;