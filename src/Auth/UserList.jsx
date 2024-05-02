import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF; // 배경색 조정
  border-right: 2px solid #E0E0E0; // 테두리 스타일 변경
  width: 30%; // 너비 조정
`;

const ListItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #E0E0E0;
  cursor: pointer;
  font-size: 16px; // 폰트 크기 조정
  &:hover {
    background-color: #F5F5F5; // 호버 색상 변경
  }
`;

function UserList({users, onSelectUser}) {
    return (
        <ListContainer>
            {
                users.map(user => (
                    <ListItem key={user.id} onClick={() => onSelectUser(user)}>
                        {user.name}
                    </ListItem>
                ))
            }
        </ListContainer>
    );
}

export default UserList;
