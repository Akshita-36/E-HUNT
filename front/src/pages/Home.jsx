import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100%;
    padding : 10px;
    height : 80vh;
`;

const WelcomeText = styled.h1`
    font-size : 56px;
    font-weight : bold;
`;

const Button = styled.button`
    font-size : 15px;
    background-color : black;
    color: white;
    width : 120px;
    border-radius : 5%;
    border : none;
    padding : 10px;
    margin : 10px 0px;
    cursor : pointer;

`;

const LinkStyle ={
    textDecoration : "None",
}

function Home() {
    return (
        <>
        <Navbar/>
        <Container>
            <WelcomeText>WELCOME TO E-HUNT</WelcomeText>
            <Link to={'/register'} style={LinkStyle}> <Button>REGISTER</Button></Link>
            <Link to={'/signin'} style={LinkStyle}> <Button>SIGN IN</Button></Link>
        </Container>
        </>
    )
}

export default Home
