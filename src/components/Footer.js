import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import {GrInstagram} from "react-icons/gr";
import {GrYoutube} from "react-icons/gr"


const FooterWeb = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0F1F2F;
`

const FooterName = styled.h1`
    margin-left: 187px;
    margin-top: 15px;
    font-family: 'seoulnamsan-cbl-regular', sans-serif;
    font-size: 38px;
    letter-spacing: -2px;
    color: #B79A50;
    text-align: left;
`
const FooterEmail = styled.h2`
    margin-left: 187px;
    margin-top: -10px;
    font-family: 'seoulnamsan-cbl-regular', sans-serif;
    font-size: 25px;
    font-weight: 500;
    color: #B79A50;
    text-align: left;
`
const SocialContainer = styled.div`
    display: inline-flex;
    margin-left: 187px;
    justify-content: flex-start;
`

const SocialFrame = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid #B79A50;
    margin-right: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Footer(){
    return(
        <FooterWeb>
            <FooterName>NUS Korea Society</FooterName>
            <FooterEmail>nuskusa@gmail.com</FooterEmail>
            <SocialContainer>
                <SocialFrame>
                    <GrFacebook name="GrFacebook" color="#B79A50" size="35px"></GrFacebook>
                </SocialFrame>
                <SocialFrame>
                    <Link to="https://www.instagram.com/nus__ks/">
                        <GrInstagram name="GrInstagram" color="#B79A50" size="37px"></GrInstagram>
                    </Link>
                </SocialFrame>
                <SocialFrame>
                    <GrYoutube name="GrYoutube" color="#B79A50" size="37px"></GrYoutube>
                </SocialFrame>
            </SocialContainer>
        </FooterWeb>
    );
}

export default Footer;