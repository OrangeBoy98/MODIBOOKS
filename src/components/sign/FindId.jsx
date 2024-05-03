import React,{useState} from "react";
import db from "../../db.json"
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Wrapper=styled.div`
width: 200px;
padding:16px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
margin: 10px auto;
border:1px solid;
border-radius:10px;
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
function FindId(props){
    const navigate = useNavigate();
    const [name,setName]=useState("");
    const handleFindId = () => {
        const user = db.user.find((user) => user.name === name);
        if (user) {
          alert("아이디:"+ user.id);
          navigate('/signup');
        }else{
          alert("일치하는 아이디가 없습니다.");
        }
    };
    return(
    <Wrapper>
    <div>
        <label>이름:</label>
        <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        width="400" height="380"/>
        <Button 
            type="submit" 
            input
            style={{width:"100px",height:"30px"}} 
            onClick={handleFindId} title="제출"></Button>
        </div>
    </Wrapper>
    ); 
};
export default FindId;