import React,{useState} from "react";
import db from "../../db.json"
function FindId(props){
    const [name,setName]=useState("");
    const handleChangeId=(event)=>{
        setName(event.target.value);
    };
     const user=db.user.find((user)=> user.name === name);
        if(user){
            alert("아이디:"+user.id);
        }
    return(
    <div>
        <input type="text" value={name} onChange={handleChangeId}
        width="400" height="380"
        effect="fadeInDown"
        />
        <button type="submit">제출</button>
        </div>
    ); 
}
export default FindId;