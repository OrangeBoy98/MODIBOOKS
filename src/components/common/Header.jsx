// Header.jsx 파일
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";

const HeaderWrapper = styled.header`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
`;

// 로고 스타일 정의
const Logo = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    cursor: pointer;
`;

// 검색창 스타일 정의
const SearchBar = styled.input`
    width: 500px;
    max-width: 300px;
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid #ccc;
    margin-left: auto;
`;

// 아이콘 버튼들을 위한 컨테이너 스타일 정의
const IconsWrapper = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 20px;
    margin-right: 0;
`;

const StyledIcon = styled.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

function Header() {
    const navigate = useNavigate();

    return (
        <HeaderWrapper>
            <Logo onClick={() => navigate('/')}>RIDIBOOKS</Logo>
            <SearchBar type="text" placeholder="검색" />
            <IconsWrapper>
                <StyledIcon><PiBooks onClick={() => navigate('/mypage')}/></StyledIcon>
                <StyledIcon><IoPersonOutline onClick={() => navigate('/signup')}/></StyledIcon>
            </IconsWrapper>
        </HeaderWrapper>
    );
}

export default Header;
