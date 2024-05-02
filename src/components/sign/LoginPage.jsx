import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import db from '../../db.json' // db.json 파일을 불러옵니다.
//import DiaryEditor from "../page/DiaryEditor";
import { useAuth } from "../../Auth/AuthContext";

const Wrapper = styled.div`
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
  
`;

const Container = styled.div`
position:relative;
margin: 50px auto;
width: 400px;
height:400px;
border: 1px solid;
padding: var(--padding);
font-size:50px;
background-color:#f9f9f9;
border-radius:7px;
box-shadow:7px 7px 39px rgba(0,104,255,0.25);

`;
const Input = styled.input`
  width: 300px;
  height: 48px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (login(id, password, db.user)) {
      alert("로그인 성공!");
      navigate("/");  // Redirect to home after successful login
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };
  // const handleLogin = () => {
  //   // db.json 파일에서 사용자 정보를 찾아 로그인합니다.
  //   const user = db.user.find((user) => user.id === id&&user.password===password);
  //   if (user) {
  //     // 사용자 정보가 일치하면 로그인 성공 처리
  //     alert("로그인 성공!");
  //     console.log("아이디:" + id);
  //     console.log("비밀번호:" + password);
  //     navigate("/");
  //   } else {
  //     // 사용자 정보가 일치하지 않으면 로그인 실패 처리
  //     alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  //   }
  // };
  return (
    <Wrapper>
        <h2>로그인</h2>
      <Container>
        <Input type="text" value={id} placeholder="아이디" onChange={(e) => setId(e.target.value)} style={{width:"300px",height:"40px"}}/>
        <br />
        <Input type="password" value={password} placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}style={{width:"300px",height:"40px"}} />
        <br/>
        <Button title="로그인" onClick={handleLogin}/>
        <Button title="회원가입" onClick={()=>{navigate("/checkbox")}}/>
      </Container>
    </Wrapper>
  );
}

export default LoginPage;
