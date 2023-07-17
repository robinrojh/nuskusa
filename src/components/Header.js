import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWeb = styled.div`
    width: 100%;
    display: flex;
    background-color: #0F1F2F;
    flex-direction: row;
    position: sticky;
    top: 0; 
    z-index:100;
    @media only screen and (min-width : 1025px) {
        height: 70px;
    }
    @media only screen and (max-width : 480px) {
        height: 40px;
    }
`

const HeaderName = styled.div`
    margin-left: 15vw;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 35px;
    margin-right: 40vw;
    font-family: "Gill Sans", sans-serif;
    letter-spacing: 2px;
    font-weight: 520;
    color: #B79A50;
    &:hover{
        color: #F3ECDB;
        transition: 200ms ease-in;
    }
    @media only screen and (max-width : 480px) {
        font-size: 20px;
        margin-right: 10vw;
        margin-top: 8px;
    }
`

const HeaderNav = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`

const HeaderOption = styled.div`
    color: #B79A50;
    font-family: 'seoulnamsan-cbl-regular', sans-serif;
    &:hover{
        color: #F3ECDB;
        transition: 200ms ease-in;
    }
    @media only screen and (min-width : 1025px) {
        margin-left: 30px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 550;
    }
    @media only screen and (max-width : 480px) {
        margin-left: 20px;
        font-size: 10px;
        font-weight: 520;
    }
`

function Header(){
    return(
        <HeaderWeb>
            <Link to="/">
                <HeaderName>NUSKS</HeaderName>
            </Link>
            <HeaderNav>
                <Link to="/">
                    <HeaderOption>HOME</HeaderOption>
                </Link>
                <Link to="/freshmen">
                    <HeaderOption>FRESHMEN</HeaderOption>   
                </Link>      
                <Link to="/inquiry">
                    <HeaderOption>INQUIRY</HeaderOption>
                </Link>
            </HeaderNav>
        </HeaderWeb>
    );
}

export default Header;