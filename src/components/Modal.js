import React, {useEffect, useState} from "react";
import styled from "styled-components";

function Modal({onClose, maskClosable, closable, visible, image, url }){
    const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie')
    const VISITED_NOW_DATE = Math.floor(new Date().getDate())

    useEffect(() => {
        if (VISITED_BEFORE_DATE !== null) {
            if (VISITED_BEFORE_DATE === VISITED_NOW_DATE) {
                localStorage.removeItem('VisitCookie')
                onClose(true)
            }
            if (VISITED_BEFORE_DATE !== VISITED_NOW_DATE) {
                onClose(false)
            }
        }
    }, [VISITED_BEFORE_DATE])

    
    const Dayclose = (props) => {
        if (onClose) {
            onClose(props)
            const expiry = new Date()
            const expiryDate = expiry.getDate() + 1
            localStorage.setItem('VisitCookie', expiryDate)
        }
    }
    

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    return(
        <ModalWrapper
                tabIndex="-1"
                visible={visible}
            >
                <ModalInner tabIndex="0">
                    <ModalInner2>
                        <Image>
                            <a href={url} rel="noopener noreferrer" target={'_blank'} cursor="pointer">
                                <img src={image} style={{ width: '100%', height: '100%' }} alt="" />
                            </a>
                        </Image>
                        {closable && (
                            <CloseStyle>
                                <Close onClick={Dayclose}>
                                    오늘 하루 닫기
                                </Close>
                                <Close onClick={close}>
                                    닫기
                                </Close>
                            </CloseStyle>
                        )}
                    </ModalInner2>
                </ModalInner>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`
const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 360px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;

`
const ModalInner2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Image = styled.div`
`
const CloseStyle = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #282828;
    width: 290px;
    padding: 15px;
    border-radius: 0 0 15px 15px;
    color: #ffffff;
`
const Close = styled.span`
    cursor: pointer;
`

export default Modal