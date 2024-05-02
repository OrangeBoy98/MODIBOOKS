import React, {useState, useEffect} from 'react';
import UserList from '../Auth/UserList';
import UserDetail from '../Auth/UserDetail';
import styled from 'styled-components';
import {data} from '../db.js';
import BackButton from '../components/common/BackButton.jsx'

const AdminPageContainer = styled.div `
  display: flex;
  height: 100%;
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