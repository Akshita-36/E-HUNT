import styled from "styled-components"
import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"


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
    width: 550px;
`;

const QuestionContain = styled.div`
    display : flex;
    justify-content : center;
`;

const QuestionText = styled.a`

    flex : 3;
    display : flex;
    justify-content : left;
    align-items : center;
    font-size : 24px;
    text-decoration : none;
    color : black;
`;

const Text = styled.h3`
   margin :0px;
`;

const Image = styled.img`
   margin : 5px;
   padding-top : 5px;
   height : 25px;
   width : 25px;
`;

const HintText = styled.h2`
    flex : 1;
    display : flex;
    cursor : pointer;
    margin : 0;
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
     top: -40%;
    position: relative;
    
`;




function Level3() {

    const [show,setShow] = useState(false);

    const onShow=()=>{ if(!show)setShow(true)
                       else setShow(false);
                    }

    const HiddenHint=()=>(
        <HiddenBox>
           go to manytools.org
        </HiddenBox>
    )

    const level =3;

    useEffect(() => {
        window.localStorage.setItem("level","3");
    }, [])

    const navigate = useNavigate();
    const [answer,setAnswer] = useState("");

     async function handleClick(e){
        e.preventDefault();
        const response = await fetch("/answer/verify",{
            method : 'POST',
            body : JSON.stringify({level,answer}),
            headers : {'Content-Type' : 'application/json'},
        });
        console.log(response);
        if(response.ok){
            return  navigate('/level4')
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
                <QuestionText href="/Level3.rar" download>
                    <Text>download</Text>
                    <Image src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753__340.png"/>
                </QuestionText>
                
                <HintText onClick={onShow}>
                    <h3 style={{margin:"10px 5px",position:"relative" }}>Hint!!</h3>
                    {show ? <HiddenHint/> : null}
                </HintText>
            </QuestionContain>
            <AnswerContain>
                <Answer placeholder="Your Answer"
                onChange={(e) => setAnswer(e.target.value)}/>
            </AnswerContain>
            <Button>Submit</Button>
            </Form>
        </Container>
    )
}


export default Level3
