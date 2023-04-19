import styled from "styled-components"
import {Link} from "react-router-dom"

const Container = styled.div`
    width : 100%;
    padding : 10px;
    height : 80vh;
    display : flex;
    align-items : center;
    justify-content : Center;
`;

const Text = styled.h1`
    font-size : 36px;
    padding : 50px;
`;

const Break = styled.br`
   
`;


function Welcome() {
    return (
        <Container>
            <Text>CONGRATULATIONS !!!!   <Break/><Break/> YOU FOUND THE TREASURE</Text>
        </Container>
    )
}

export default Welcome
