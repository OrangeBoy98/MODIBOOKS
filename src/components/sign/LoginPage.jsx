import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import db from '../../db.json';
import { useAuth } from "../../Auth/AuthContext";
import BackButton from "../common/BackButton";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  margin: 50px auto;
  width: 90%;
  max-width: 400px;
  height: auto;
  padding: 20px;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 7px;
  box-shadow: 0 2px 15px rgba(0, 104, 255, 0.2);
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonStyled = styled(Button)`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const HelpLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const LinkButton = styled.div`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (login(id, password, db.user)) {
      alert("로그인 성공!");
      navigate("/");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <Wrapper>
      <StyledBackButton />
      <h2>로그인</h2>
      <Container>
        <Input type="text" value={id} placeholder="아이디" onChange={(e) => setId(e.target.value)} />
        <Input type="password" value={password} placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
        <ButtonStyled title="로그인" onClick={handleLogin} />
        <ButtonStyled title="회원가입" onClick={() => navigate("/member-page")} />
        <HelpLinks>
          <LinkButton onClick={() => navigate("/find-password")}>비밀번호 찾기</LinkButton>
          <LinkButton onClick={() => navigate("/find-id")}>아이디 찾기</LinkButton>
        </HelpLinks>
      </Container>
    </Wrapper>
  );
}

export default LoginPage;
