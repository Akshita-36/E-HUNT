import styled from "styled-components"
import {useState} from "react";
import {Link, Navigate} from "react-router-dom"



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
    font-size : 15px;
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

function SignIn() { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const [redirect, setRedirect] = useState(false);
  
    async function handleClick (e){
        e.preventDefault();
        const response = await fetch("/auth/signin",{
            method : 'POST',
            body : JSON.stringify({email,password}),
            headers : {'Content-Type' : 'application/json'},
            credentials : 'include',
        });

        if(response.ok){
            response.json().then(userInfo =>{
         
                setRedirect(true);
               
            })
        }
        else{
            alert('wrong Credentials')
        }
       
    }

    if (redirect){
        return <Navigate to="/welcome"></Navigate>
    }

    else
    return (
        
        <Container>
            <Form action="POST" onSubmit={handleClick}>
                <WelcomeText> WELCOME TO E-HUNT </WelcomeText>
                <InputContain>
                    <InputText>Email</InputText>
                    <Input placeholder="Email" 
                    type ="email" value={email} required
                    onChange={(e)=>setEmail(e.target.value)}></Input>
                </InputContain>
                <InputContain>
                    <InputText>Password</InputText>
                    <Input placeholder="Password" 
                    type="password" value={password} required
                    onChange={(e)=>setPassword(e.target.value)}></Input>
                </InputContain>
                <Button type="submit">SIGN IN</Button>
                <ToResis><Link to="/register" style={LinkStyle}>To Register</Link></ToResis>
            </Form>
        </Container>
    )
}

export default SignIn
