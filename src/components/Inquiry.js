import React from "react";
import styled from "styled-components";

const InquiryWeb = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 187px;
    margin-bottom: 50px;
    @media only screen and (max-width : 480px) {
        margin-left: 30px;
    }
`
const InquiryTitle = styled.h1`
    color: #050716;
    font-family: "Gill Sans", sans-serif;
    font-size: 60px;
    text-align: left;
    @media only screen and (max-width : 480px) {
        font-size: 30px;
    }
`
const InquiryDesc = styled.p`
    color: #3C3D43;
    font-family: "Gill Sans", sans-serif;
    font-size: 15px;
    text-align: left;
    @media only screen and (max-width : 480px) {
        font-size: 10px;
    }
`

function Inquiry(){
    return(
        <InquiryWeb>
            <InquiryTitle>Inquiry Form</InquiryTitle>
            <InquiryDesc>If you have any inquiry, feel free to fill out this form. Thank you.</InquiryDesc>
            <InquiryDesc>문의 사항이 있으신 분들은 아래 구글 폼을 작성하여 주시기를 바랍니다</InquiryDesc>
            <iframe src="https://forms.gle/TXrPGzD1PbmXyiM26" width="90%" height="1200px"></iframe>
        </InquiryWeb>
    );
}

export default Inquiry;