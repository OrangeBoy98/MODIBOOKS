import React, {useState, useEffect} from 'react';
import UserList from '../Auth/UserList';
import UserDetail from '../Auth/UserDetail';
import styled from 'styled-components';
import {data} from '../db.js';
import BackButton from '../components/common/BackButton.jsx'

const AdminPageContainer = styled.div`
  display: flex;
  height: 100%;
  background: #FAFAFA; // 배경색 변경
  box-shadow: 0px 0px 10px #E0E0E0; // 그림자 효과 추가
  border-radius: 10px; // 모서리 둥글게
  padding: 20px;
`;

function AdminPage() {
    const [users, setUsers] = useState(data.user); // 초기값을 data.user로 설정
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <AdminPageContainer>
            <BackButton/>
            <UserList users={users} onSelectUser={setSelectedUser}/>
            <UserDetail user={selectedUser}/>
        </AdminPageContainer>
    );
}

export default AdminPage;