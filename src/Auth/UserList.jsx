import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ListContainer = styled.div `
  padding: 20px;
  background-color: #f0f0f0;
  border-right: 1px solid #ccc;
`;

const ListItem = styled.div `
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
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
