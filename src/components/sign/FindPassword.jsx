import React, { useState } from "react";
import db from '../../db.json'
import Button from "./Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper=styled.div`
position: relative;
margin: 50px auto;
width: 90%;
max-width: 400px;
height: 200px;
padding: 20px;
font-size: 15px;
background-color: #f9f9f9;
border-radius: 7px;
box-shadow: 0 2px 15px rgba(0, 104, 255, 0.2);
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

function FindPassword(props) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const[email,setEmail]=useState("")
  const handleFindPassword = () => {
    const user = db.user.find((user) => user.id === id&&user.email === email);
    if (user) {
      alert("비밀번호:" + user.password);
      navigate('/signup');
    }else{
      alert("일치하는 아이디가 없습니다.");
    }
  };

  return (
    <Wrapper>
    <div className="search_div">
      <div>
        <label>아이디</label>
        <Input title="아이디" type="text" name="id" onChange={(e) => setId(e.target.value)}/>
        <br/>
        <label>이메일</label>
        <Input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        <Button
          type="submit"
          input
          name="search_pw_submit"
          onClick={handleFindPassword} title="제출"/>
          </div>
        </div>
        </Wrapper>
  );
}
export default FindPassword;
