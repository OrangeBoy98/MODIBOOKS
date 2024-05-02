import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import styled from 'styled-components';
import { useAuth } from '../../Auth/AuthContext';

// 기존 NavWrapper와 StyledIcon
const NavWrapper = styled.nav`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    paddingRight: 20px;
    fontSize: 16px;
    fontFamily: 'Arial, sans-serif';
    padding-top: 60px;
`;

const StyledIcon = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

// 드롭다운 메뉴 스타일을 별도로 정의
const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    width: 270px;
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    borderRadius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: row; /* 변경된 부분 */
    justify-content: space-between;
    gap: 10px;
    zIndex: 1000;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333; /* 링크 색상 설정 */
`;

function Navigation() {
    const { user, isAdmin } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggleContainer = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (toggleContainer.current && !toggleContainer.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <NavWrapper ref={toggleContainer}>
            <div style={{ position: 'relative' }}>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <StyledIcon>
                        {isOpen ? <FaAngleDown /> : <IoMenu />}
                        <span>메뉴</span>
                    </StyledIcon>
                </div>
                {isOpen && (
                    <DropdownMenu>
                        <StyledLink to="/category" onClick={() => setIsOpen(false)}>카테고리</StyledLink>
                        <StyledLink to="/services" onClick={() => setIsOpen(false)}>고객센터</StyledLink>
                        {isAdmin ? (
                            <StyledLink to="/admin-page" onClick={() => setIsOpen(false)}>회원정보관리</StyledLink>
                        ) : (
                            <div onClick={(e) => e.preventDefault()}>접근권한없음</div> // 관리자가 아니면 클릭 불가
                        )}
                    </DropdownMenu>
                )}
            </div>
        </NavWrapper>
    );
}

export default Navigation;
