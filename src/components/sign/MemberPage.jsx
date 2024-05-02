import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import db from '../../db.json'
const Wrapper = styled.div`
  width: 100%;
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
  border: 1px solid;
  padding: var(--padding);
  font-size:50px;
  background-color:#f9f9f9;
  border-radius:7px;
`;


const Input = styled.input`
  width: 300px;
  height: 48px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const ButtonFind = styled.div`
      font-size:20px;
      color:grey;
      text-align:center;
      cursor:pointer;
      white-space:nowrap;
      display:inline-block; 
      margin-left:20px;
      margin-right:20px;
`;
function MemberPage(){
    const navigate = useNavigate();
    const[id, setId]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[email,setEmail]=useState("");
    const saveId = event =>{
        setId(event.target.value);
    };
    const savePW= event =>{
        setPassword(event.target.value);
    };
    const saveName= event =>{
        setName(event.target.value);
    };
    const saveNumber=event =>{
        setNumber(event.target.value);
    };
    const saveEmail=event=>{
        setEmail(event.target.value);
    }
    const handleCheckDuplicate = () => {
        // db.json 파일에서 사용자 정보를 찾아 로그인합니다.
        const user = db.user.find((user) => user.id === id);
        if (user) {
          // 사용자 정보가 일치하면 로그인 성공 처리
          alert("이미 등록된 사용자입니다.");
          navigate("/");
        }
        else if(!id){
          alert("아이디를 입력하세요");
        } 
        else {
          // 사용자 정보가 일치하지 않으면 로그인 실패 처리
          alert("사용 가능한 아이디입니다.");
        }

        }
    const PutInformation =() =>{
        if(!id||!password||!number||!name||!email){
            alert("정보를 입력하세요");
        }else{
            alert("가입완료!");
            navigate("/");
        }
      };
    const findId=() => {
        navigate('/find-id');
      }
    const findPassword=() =>{
        navigate('/find-password');
      }
    return(
        <Wrapper>
            <h2>회원가입</h2>
            <Container>
              <form>
                <Input type="text" value={id} placeholder="아이디" onChange={saveId}/>
                <button onClick={handleCheckDuplicate} style={{position:"absolute",top:"25px",botton:"30px",right:"50px",backgroundColor:"white",border:"1px solid",height:"50px",cursor:"pointer",backgroundColor: "#007bff",color: "#fff"}}>중복확인</button>
              </form>
                    <br/>
                    <Input 
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={savePW}
                        style={{width:"300px",height:"48px"}}
                        required
                    />     
                    <br/>
                    <Input 
                        type="name"
                        value={name}
                        placeholder="이름"
                        onChange={saveName}
                        style={{width:"300px",height:"48px"}}
                        required
                        />
                     <br/>
                    <Input 
                        type="number"
                        placeholder="전화번호"
                        value={number}
                        onChange={saveNumber}
                        style={{width:"300px",height:"48px"}}
                        required
                    />
                    <br/>
                    <Input 
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={saveEmail}
                        style={{width:"300px",height:"48px"}}
                        required/>
                    <Button
                        title="회원가입"
                        onClick={PutInformation}
                        />
                        <div>
                        <ButtonFind onClick={findPassword}>비밀번호 찾기</ButtonFind>
                        <ButtonFind onClick={findId}>아이디 찾기</ButtonFind>
                        </div>     
            </Container>
        </Wrapper>
    );
  };
export default MemberPage;