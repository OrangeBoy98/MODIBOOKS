import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div `
  padding: 20px;
`;

const DetailItem = styled.div `
  margin-bottom: 10px;
`;

function UserDetail({user}) {
    if (!user) 
        return <DetailContainer>Select a user</DetailContainer>;
    
    return (
        <DetailContainer>
            <DetailItem>
                <strong>ID:</strong>
                {user.id}</DetailItem>
            <DetailItem>
                <strong>Name:</strong>
                {user.name}</DetailItem>
            <DetailItem>
                <strong>Number:</strong>
                {user.number}</DetailItem>
            <DetailItem>
                <strong>Email:</strong>
                {user.email}</DetailItem>
        </DetailContainer>
    );
}

export default UserDetail;
