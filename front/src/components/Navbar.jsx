import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
    height : 70px;
    margin : 0px;
`;

const Wrapper = styled.div`
    height : 100%;
    padding : 10px 20px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    background-color : black;
`;

const Left = styled.div`
    flex : 1;
`;

const Logo = styled.h1`
    font-weight : bold;
    margin : 0px;
    color : white;
    cursor : pointer;
`;

const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

const MenuItems = styled.div`
    font-size : 15px;
    font-weight : bold;
    cursor : pointer;
    margin-left : 10px;
    padding : 5px;
    color : white;
`;

const LinkStyle ={
    textDecoration : "None",
}

function Navbar() {


    return (
        <Container>
            <Wrapper>
                <Left>
                <Link to={'/'} style={LinkStyle}><Logo> E-HUNT </Logo> </Link>
                </Left>

                <Right>
                    <Link to={'/register'} style={LinkStyle}> <MenuItems>REGISTER</MenuItems> </Link>
                    <Link to={'/signin'} style={LinkStyle}>  <MenuItems>SIGN IN</MenuItems> </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar
