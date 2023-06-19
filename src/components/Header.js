import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWeb = styled.div`
    height: 70px;
    display: flex;
    background-color: #0F1F2F;
    flex-direction: row;
    position: sticky;
    top: 0; 
`

const HeaderName = styled.div`
    margin-left: 187px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-family: "Gill Sans", sans-serif;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 520;
    color: #B79A50;
    &:hover{
        color: #F3ECDB;
        transition: 200ms ease-in;
    }
`

const HeaderNav = styled.div`
    display: inline-flex;
    margin-left: 590px;
    align-items: center;
`

const HeaderOption = styled.div`
    margin-left: 30px;
    font-size: 20px;
    font-family: 'seoulnamsan-cbl-regular', sans-serif;
    font-weight: 550;
    color: #B79A50;
    margin-bottom: 10px;
    &:hover{
        color: #F3ECDB;
        transition: 200ms ease-in;
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