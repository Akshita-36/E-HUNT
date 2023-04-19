import styled from "styled-components"
import {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"


const Container = styled.div`
    width : 100%;
    padding : 10px;
    height : 80vh;
    display : flex;
    align-items : center;
    justify-content : Center;
`;
const WelcomeText = styled.h1`
   font-size : 40px;
   font-weight : bold;
`;

const Form = styled.form`

`;

const InputContain = styled.div`
    padding : 5px 0px;
`;

const InputText = styled.h4`
    margin : 5px 0px;
`;

const Input = styled.input`
    padding : 5px;
    width : 250px;
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

const ToResis = styled.div`
    margin-top:5px;
    color : black;
    font-size : 14px;
    font-weight : bold;
`;

const LinkStyle = {
    textDecoration : "none",
    color : "black",
}

function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();
    
    async function handleClick(e){
        e.preventDefault();
        const response = await fetch("/auth/register",{
            method : 'POST',
            body : JSON.stringify({username,email,password}),
            headers : {'Content-Type' : 'application/json'},

        });


        if(response.status === 200){
            alert('registration successful')
            Navigate('/signin');
        }
        else{
            alert('User exists')
        }
    }
    

    return (
        <Container>
            <Form onSubmit={handleClick}>
                <WelcomeText> WELCOME TO E-HUNT </WelcomeText>
                <InputContain>
                    <InputText>Username</InputText>
                    <Input placeholder="Username" type="text"
                    value={username} required
                    onChange={(e) => setUsername(e.target.value)}></Input>
                </InputContain>
                <InputContain>
                    <InputText>Email</InputText>
                    <Input placeholder="Email" type="email"
                    value={email} required
                    onChange={(e) => setEmail(e.target.value)}></Input>
                </InputContain>
                <InputContain>
                    <InputText>Password</InputText>
                    <Input placeholder="Password" type="password"
                    value={password} required
                    onChange={(e) => setPassword(e.target.value)}></Input>
                </InputContain>
                <Button type="submit">REGISTER</Button>
                <ToResis><Link to="/signin" style={LinkStyle}>To SignIn</Link></ToResis>
            </Form>
        </Container>
    )
}


export default Register
