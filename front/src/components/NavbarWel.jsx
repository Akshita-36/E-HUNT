import styled from 'styled-components';
import {useNavigate, Link} from "react-router-dom";
import {useState} from "react";

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


function NavbarWel() {
    const Navigate = useNavigate();
    const [status,setStatus] = useState(false);

    function signout(){
        fetch('https://localhost:5000/auth/signout',{
            method:'POST',
        });
        setStatus(true);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                <Link to={'/welcome'} style={LinkStyle}><Logo> E-HUNT </Logo></Link>
                </Left>

                <Right>
                {!status &&<MenuItems onClick={signout}>SIGN OUT</MenuItems>}
                    { status && Navigate('/')}
                    
                </Right>

            </Wrapper>
        </Container>
    )
}

export default NavbarWel
