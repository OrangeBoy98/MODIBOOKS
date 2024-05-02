import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import db from '../../db.json';
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

const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Container = styled.div`
  position: relative;
  margin: 50px auto;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const InputFieldContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px; // 변경된 margin-bottom
`;

const Input = styled.input`
  width: calc(100% - 20px); // 버튼이 내부에 있기 때문에 조정된 너비
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const InlineButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%); // 수정된 transform 값
  padding: 5px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function MemberPage() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleCheckDuplicate = () => {
        const user = db.user.find(user => user.id === id);
        if (user) {
            alert("이미 등록된 사용자입니다.");
        } else if (!id) {
            alert("아이디를 입력하세요");
        } else {
            alert("사용 가능한 아이디입니다.");
        }
    };

    return (
        <Wrapper>
          <StyledBackButton />
            <h2>회원가입</h2>
            <Container>
                <InputFieldContainer>
                    <Input type="text" value={id} placeholder="아이디" onChange={e => setId(e.target.value)} />
                    <InlineButton onClick={handleCheckDuplicate}>중복확인</InlineButton>
                </InputFieldContainer>
                <InputFieldContainer>
                    <Input type="password" value={password} placeholder="비밀번호" onChange={e => setPassword(e.target.value)} />
                </InputFieldContainer>
                <InputFieldContainer>
                    <Input type="text" value={name} placeholder="이름" onChange={e => setName(e.target.value)} />
                </InputFieldContainer>
                <InputFieldContainer>
                    <Input type="text" value={number} placeholder="전화번호" onChange={e => setNumber(e.target.value)} />
                </InputFieldContainer>
                <InputFieldContainer>
                    <Input type="email" value={email} placeholder="이메일" onChange={e => setEmail(e.target.value)} />
                </InputFieldContainer>
                <Button title="회원가입" onClick={() => {
                    if (!id || !password || !number || !name || !email) {
                        alert("정보를 입력하세요");
                    } else {
                        alert("가입완료!");
                        navigate("/");
                    }
                }} />
            </Container>
        </Wrapper>
    );
};

export default MemberPage;
