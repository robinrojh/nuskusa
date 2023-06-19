import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'
import logo from '../photos/NUS logo gray.png'

const HomeWeb = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

const HomeTitle = styled.div`
    justify-content: flex-start;
    display: inline-flex;
    background: #0F1F2F;
    height: 360px;
`

const HomeTitle2 = styled.div`
    border-left: 1420px solid #0F1F2F;
    border-bottom: 200px solid transparent;
`

const Name = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 230px; 
    justify-content: flex-start;
    width: 450px;
`

const Name1 = styled.h1`
    color: #ACADAB;
    font-size: 60px;
    font-weight: 400;
    font-family: 'Optima','sans-serif';
    line-height: 60px;
    text-align: left;
`

const Name2 = styled.h1`
    color: #ACADAB;
    font-size: 20px;
    text-align: left;
    line-height: 10px;
`

const Logo = styled.img`
    height: 310px;
    margin-left: 150px; 
    margin-top: 40px;
    mix-blend-mode: screen;
    opacity: 0.7;
`

const TeamHeader = styled.h1`
    color: #050716;
    font-size: 45px;
    font-family: 'Optima','sans-serif';
    margin-left: 187px;
    margin-top: 50px;
    text-align: left;
`
const TeamTitle = styled.h2`
    color: #050716;
    font-size: 35px;
    margin-top: 30px;
    margin-left: 187px;
    text-align: left;
`

const Members = styled.div`
    margin-left: 187px; 
    margin-right: 187px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`

const MemberProfile = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin-right: 40px;
    margin-bottom: 30px;
`

const ProfileHeader = styled.div`
    width: 300px;
    height: 330px;
    display: flex;
    justify-content: center;
`
const ProfileFooter = styled.div`
    background: #232A62;
    width: 300px;
    height: 70px;
    border-radius: 0px 0px 25px 25px;
    display: flex;
    justify-content: flex-start;
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
    font-size: 22px;
    margin-left: 25px;
    align-self: center;
`

function Home(){
    return(
        <HomeWeb>
            <HomeTitle>
                <Fade duration={3000}>
                    <Name>
                        <Name1>National University of Singapore Korea Society</Name1>
                        <Name2>싱가포르 국립대학 한인 학부 학생회 공식 웹사이트 입니다</Name2>
                    </Name>
                    <Logo src={require('../photos/NUS logo gray.png')}></Logo>
                </Fade>
            </HomeTitle>
            <HomeTitle2></HomeTitle2>
            <TeamHeader>Our Team</TeamHeader>
            <TeamTitle>President</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic2 src={require('../photos/유다현.png')}></MemberPic2>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>유다현</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
            <TeamTitle>IR</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/하아연.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>하아연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic2 src={require('../photos/이채연.png')}></MemberPic2>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>이채연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/김의성.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>김의성</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
            <TeamTitle>PR&M</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/고선민.jpeg')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>고선민</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/노주빈.jpeg')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>노주빈</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/사공민승.jpeg')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>사공민승</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
            <TeamTitle>Student Life</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/권두현.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>권두현</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/이서형.jpeg')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>이서형</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/손성연.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>손성연</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
            <TeamTitle>IT</TeamTitle>
            <Members>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/신진.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>신진</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/정성윤.jpeg')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>정성윤</MemberName>
                    </ProfileFooter>
                </MemberProfile>
                <MemberProfile>
                    <ProfileHeader>
                        <MemberPic src={require('../photos/권순형.png')}></MemberPic>
                    </ProfileHeader>
                    <ProfileFooter>
                        <MemberName>권순형</MemberName>
                    </ProfileFooter>
                </MemberProfile>
            </Members>
        </HomeWeb>
    );
}

export default Home;