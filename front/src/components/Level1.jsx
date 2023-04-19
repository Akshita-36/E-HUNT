import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react';

const Container = styled.div`
    width : 100%;
    padding : 10px;
    height : 80vh;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : Center;
`;

const Form = styled.form`
   width : 550px;
`;

const QuestionContain = styled.div`
    display : flex;
    justify-content : center;
`;

const QuestionText = styled.h2`
    flex :3;
  
`;

const HintText = styled.h2`
    flex : 1;
    cursor : pointer;
    margin: 0px;
`;

const AnswerContain = styled.div`
    margin : 10px 0px;
`;

const Answer = styled.input`
    font-size : 16px;
    padding : 5px;
`;

const Button = styled.button`
font-size : 16px;
font- weight : bold;
width : 100px;
color : white;
margin : 10px 0px;
padding : 10px;
background-color : black;
border : 1px solid black;
border-radius : 5%;
cursor : pointer;
`;

const HiddenBox = styled.table`
     font-size : 10px;
     height : 10px;
     background-color : black;
     color : white;
     padding : 3px;
     border-radius:5%;
     top: -80%;
    position: relative;
    right: -50%;
`;



// const navigate = useNavigate();

function Level1() {
    const navigate = useNavigate();
    const [answer,setAnswer] = useState("");

    const [show,setShow] = useState(false);

    const onShow=()=>{ if(!show)setShow(true)
                       else setShow(false);
                    }

    const HiddenHint=()=>(
        <HiddenBox>
           try inspecting this page
        </HiddenBox>
    )

    const level =1;

    useEffect(() => {
        window.localStorage.setItem("level","1");
    }, [])

     async function handleClick(e){
        e.preventDefault();
        const response = await fetch("/answer/verify",{
            method : 'POST',
            body : JSON.stringify({level,answer, user: window.localStorage.getItem("userId")}),
            headers : {'Content-Type' : 'application/json'},
        });
        console.log(response);
        if(response.ok){
            return  navigate('/level2')
        }
        else{
            alert("Nice try");
        }
        return;
    }

    return (
        <Container>
            <Form onSubmit={handleClick}>
            <QuestionContain>
                <QuestionText>
                    The Answer is somewhere here!!!
                </QuestionText>
                <HintText onClick={onShow}>
                    <h3 style={{margin:"10px 5px",position:"relative" }}>Hint!!</h3>
                    {show ? <HiddenHint/> : null}
                </HintText>
            </QuestionContain>
            <AnswerContain>
                <div style={{display:"none"}}> Answer : "Welcome to Treasure Hunt"</div>
                <Answer placeholder="Your Answer"
                onChange={(e) => setAnswer(e.target.value)}/>
            </AnswerContain>
            <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default Level1
