import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/sign/Button";
const Wrapper = styled.div`
width: calc(100% - 32px);
padding:16px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
margin: 10px auto;
`;

const Container = styled.div`
width: 100%;
max-width: 720px;
:not(:last-child){
    margin-bottom:16px
}

`;
function SignUpPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
    const navigate= useNavigate();
    return(
        <Wrapper>
            <Container>
                <Button
                    title="회원가입"
                    onClick={()=>{
                        navigate("/member-page")
                    }}
                />
                <Button
                title="로그인"
                onClick={()=>{
                    navigate("/login-page")
                }}
                />
            </Container>
        </Wrapper>
    )
}
export default SignUpPage;