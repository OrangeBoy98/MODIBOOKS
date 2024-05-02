// Header.jsx 파일
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonOutline } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import SearchAutoComplete from '../SearchBar/SearchAutoComplete';
import { useAuth } from '../../Auth/AuthContext';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1000px;
    height: 60px;
    display: flex;
    justify-content: flex-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    z-index: 99999;
`;

// 로고 스타일 정의
const Logo = styled.h1`
    margin: 0;
    margin-right: auto;
    font-size: 1.5rem;
    cursor: pointer;
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
    const { user, logout } = useAuth();  // 로그인 상태 확인

    return (
        <HeaderWrapper>
            <Logo onClick={() => navigate('/')}>RIDIBOOKS</Logo>
            <SearchAutoComplete />
            <IconsWrapper>
                <StyledIcon><PiBooks onClick={() => navigate('/mybook')}/></StyledIcon>
                {user ? (
                    <StyledIcon><IoPersonOutline onClick={() => navigate('/mypage')}/></StyledIcon>
                ) : (
                    <StyledIcon><IoPersonOutline onClick={() => navigate('/signup')}/></StyledIcon>
                )}
                {user ? (
                    <StyledIcon><CiLogout onClick={logout}/></StyledIcon>  // 로그아웃 아이콘 표시
                ) : (
                    <StyledIcon><CiLogin onClick={() => navigate('/signup')}/></StyledIcon>  // 로그인 아이콘 표시
                )}
            </IconsWrapper>
        </HeaderWrapper>
    );
}

export default Header;
