import React from 'react';
import { Link } from 'react-router-dom';
import CSS from 'csstype';
import Navbar from '../components/Navbar';
import { authService, dbService } from '../utils/firebaseFunctions';
import styled from 'styled-components'

type UserProps = {
    history: any,
    location: any,
}

type UserState = {
    email: string,
    password: string,
    username: string
}

const height = window.innerHeight;
const width = window.innerWidth;
const margin = 15;
let linkMouseEnter = false;
const Screen = styled.div`
    display: flex;
    flex-direction: row;
    width: ${width}px;
    height: ${height}px;
`
const Container = styled.div`
    width: 40%;
    height: 100%;
    background-color: #0B121C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Inner = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
const Back = styled.button`
    :hover {
        border: 2px solid white;
    }

    width: 95px;
    height: 50px;
    max-height: 60px;
    border: 2px solid transparent;
    color: #969696;
    background-color: #0B121C;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const BackText = styled.span`
    height: 60px;
    width: 30px;
    line-height: 60px;
    padding-top: 2px;
`
const Title = styled.span`
    width: 100%;
    font-weight: 700;
    font-family: var(--font-family-roboto);
    color: white;
    font-size: 40px;
    text-align: center;
    z-index: 1;
`
const Explanation = styled.span`
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-weight: 800;
    font-size: 13px;
    color: #808080;
    z-index: 1;
`
const Form = styled.form`
    width: 60%;
    height: 100%;
    background-color: white;
    z-index: 0; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const NameInput = styled.input`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    width: 60%;
    height: 45px;
    font-family: var(--font-family-roboto);
    font-weight: 700;
    font-size: 18px;
    outline: none;
`
const EmailInput = styled.input`
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    width: 60%;
    height: 45px;
    font-family: var(--font-family-roboto);
    font-weight: 700;
    font-size: 18px;
    outline: none;
    margin-top: 90px;
`
const PasswordInput = styled.input`
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    margin-top: 90px;
    width: 60%;
    height: 45px;
    font-family: var(--font-family-roboto);
    font-weight: 700;
    font-size: 18px;
    outline: none;
`
const SubmitButton = styled.input`
    margin-top: 70px;
    width: 60%;
    height: 63px;
    border: none;
    background-color: #BDA06D;
    color: white;
    font-weight: 700;
    font-size: 18px;
    font-family: var(--font-family-roboto);
    cursor: pointer;
`
const ToSignIn = styled(Link)`
    margin-top: 20px;
    width: 60%;
    color: #808080;
    font-size: 12px;
    font-weight: 700;
`
class SignUp extends React.Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
        }
    }
    handleChange = (event: any) => {
        const value = event.target.value;
        if (event.target.name === 'email') {
            this.setState({
                email: value
            })
        }
        else if (event.target.name === 'password') {
            this.setState({
                password: value
            })
        }
        else if (event.target.name === 'username') {
            this.setState({
                username: value
            })
        }
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        await authService.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(async (userCredential) => {
                const userObject = {
                    email: this.state.email,
                    username: this.state.username,
                    userId: userCredential.user?.uid,
                    isVerified: false,
                    role: 'User'
                }
                await dbService.collection('users').doc(userCredential.user?.uid).set(userObject);
                window.history.back();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Sign up failed. Please try again later.")
            });
    }
    
    handleBackClick = (event: any) => {
        event.preventDefault();
        window.history.back();
    }
    handleMouseEnter = (e: any) => {
        e.preventDefault();
        e.target.style.textDecoration = 'underline';
    }
    handleMouseLeave = (e: any) => {
        e.preventDefault();
        e.target.style.textDecoration = 'none';
    }
    arrowStyle: CSS.Properties = {
        height: '20px',
    }
    imgStyle: CSS.Properties = {
        width: '100%',
        marginTop: '20px',
    }
    render() {
        

        return (
            <Screen>
                <Container>
                    <Inner>
                        <Back onClick={this.handleBackClick}><img style={this.arrowStyle} src='https://firebasestorage.googleapis.com/v0/b/nus-kusa-website.appspot.com/o/source%2FwhiteArrow.png?alt=media&token=efa6ec9b-d260-464e-bf3a-77a73193055f'/><BackText>Back</BackText></Back>
                        <img src='https://firebasestorage.googleapis.com/v0/b/nus-kusa-website.appspot.com/o/source%2F8.png?alt=media&token=21e952d4-00f1-4a92-b0d2-28868e45e64f' style={this.imgStyle}/>
                        <Title>Sign Up to Join!</Title>
                        <Explanation>NUS 한인회 사이트에 가입하시고 승인 받으시면 게시판의 더 많은 정보에 접속할 수 있습니다.</Explanation>
                        
                    </Inner>
                    
                </Container>
                <Form onSubmit={this.handleSubmit}>
                    <NameInput
                        name="username"
                        type="string"
                        placeholder="이름 (영어로, 성 먼저) / Name (Last name first)"
                        required
                        value={this.state.username}
                        onChange={this.handleChange}
                    >
                    </NameInput>
                    <EmailInput
                        name="email"
                        type="email"
                        placeholder="이메일 / Email"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                    ></EmailInput>
                    <PasswordInput
                        name="password"
                        type="password"
                        placeholder="비밀번호 / Password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    ></PasswordInput>
                    
                    {/* Will be adding name, nickname, etc. */}
                    <SubmitButton type="submit" value="Submit"/>
                    <ToSignIn to="/signin"  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Already have an account? Click here to Log in.</ToSignIn>
                </Form>
            </Screen>
        )
    }
}

export default SignUp;