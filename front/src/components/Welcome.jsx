import styled from "styled-components"
import {Link} from "react-router-dom"

const Container = styled.div`
    width : 100%;
    padding : 10px;
    height : 80vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : Center;
`;

const Text = styled.h1`
    
`;

const Button = styled.button`
font-size : 16px;
font- weight : bold;
color : white;
margin : 5px 0px;
padding : 10px;
background-color : black;
border : 1px solid black;
border-radius : 5%;
cursor : pointer;
    
`;

const LinkStyle ={
    textDecoration : "None",
}

function Welcome() {
    return (
        <Container>
            <Text>WELCOME TO TREASURE HUNT</Text>
            <Link to={'/level1'} style={LinkStyle}><Button>PLAY</Button></Link>
        </Container>
    )
}

export default Welcome
