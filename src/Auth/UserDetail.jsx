import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  padding: 20px;
  background-color: #FFFFFF; // 배경색 변경
  width: 70%; // 너비 조정
  border-radius: 10px; // 모서리 둥글게
`;

const DetailItem = styled.div`
  margin-bottom: 15px; // 마진 조정
  font-size: 16px; // 폰트 크기 변경
  display: flex;
  justify-content: space-between; // 내용 사이 간격 조정
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
