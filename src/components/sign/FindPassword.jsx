import React, { useState } from "react";
import db from "../../db.json";

function FindPassword(props) {
  const [id, setId] = useState("");

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleFindPassword = () => {
    const user = db.user.find((user) => user.id === id);
    if (user) {
      alert("비밀번호:" + user.password);
    }
  };

  return (
    <div className="search_div">
      <div>
        <h5>아이디</h5>
        <input type="text" name="search_pw_id" onChange={handleChangeId} />
      </div>
      <div>
        <h5>이메일</h5>
        <input type="text" name="search_pw_email" />
        <div id="search_id_email_div">
          @
          <input type="text" name="search_pw_write_email" />
        </div>
      </div>
      <div>
        <input
          type="button"
          valu="submit"
          name="search_pw_submit"
          onClick={handleFindPassword}
        />
      </div>
    </div>
  );
}
export default FindPassword;
