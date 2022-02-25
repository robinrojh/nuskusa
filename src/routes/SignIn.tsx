import React from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../utils/firebaseFunctions';
import firebase from 'firebase';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import CSS from 'csstype';

type UserProps = {
    history: any,
    location: any,
    match: any,
}

type UserObject = {
    email: string,
    password: string,
    failed: boolean,
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
const EmailInput = styled.input`
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    width: 60%;
    height: 45px;
    font-family: var(--font-family-roboto);
    font-weight: 700;
    font-size: 18px;
    outline: none;
`
const PasswordInput = styled.input`
    border: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    margin-top: 110px;
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
const ToSignUp = styled(Link)`
    margin-top: 20px;
    width: 60%;
    color: #808080;
    font-size: 12px;
    font-weight: 700;
`
const ToPassWord = styled.a`
    margin-top: 50px;
    width: 60%;
    color: #808080;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
`
const FailMessage = styled.span`
    color: red;
    position: absolute;
    left: 20%;
    top: ${(height * 0.1) + (19 * margin) + 65}px;
`

class SignIn extends React.Component<UserProps, UserObject> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            failed: false,
        }
    }
    handleChange = (event: any) => {
        if (event.target.name === 'email') {
            this.setState({
                email: event.target.value
            })
        }
        else if (event.target.name === 'password') {
            this.setState({
                password: event.target.value
            })
        }
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        authService.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(async () => {
                return await authService.signInWithEmailAndPassword(this.state.email, this.state.password)
                    .then(() => {
                        window.history.back()
                    })
                    .catch((error) => {
                        console.error(error);
                        this.setState({
                            failed: true,
                        })
                    });
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    failed: true,
                })
            });
    }

    handleMouseEnter = (e: any) => {
        e.preventDefault();
        e.target.style.textDecoration = 'underline';
    }
    handleMouseLeave = (e: any) => {
        e.preventDefault();
        e.target.style.textDecoration = 'none';
    }
    handleBackClick = (event: any) => {
        event.preventDefault();
        window.history.back();
    }
    arrowStyle: CSS.Properties = {
        height: '40%',
        marginRight: '5px',
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
                        <Back onClick={this.handleBackClick}><img style={this.arrowStyle} src='https://firebasestorage.googleapis.com/v0/b/nus-kusa-website.appspot.com/o/source%2FwhiteArrow.png?alt=media&token=efa6ec9b-d260-464e-bf3a-77a73193055f' /><BackText>Back</BackText></Back>
                        <img src='https://firebasestorage.googleapis.com/v0/b/nus-kusa-website.appspot.com/o/source%2F8.png?alt=media&token=21e952d4-00f1-4a92-b0d2-28868e45e64f' style={this.imgStyle} />
                        <Title>Log In</Title>
                        <Explanation>환영합니다! 기존 이메일로 로그인 할 수 있습니다.</Explanation>
                    </Inner> 
                    
                </Container>
                <Form onSubmit={this.handleSubmit}>
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
                    />
                    <SubmitButton type="submit" value="Submit" />
                    {this.state.failed ? <FailMessage>Login failed. Please check your ID and Password.</FailMessage> : <></>}
                    <ToPassWord onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Forgot Password?</ToPassWord>
                    <ToSignUp to='/signup' href="/#/signup" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Don't have an account? Click here to create an account!</ToSignUp>
                    
                </Form>
            </Screen>
        )
    }
}

export default SignIn;