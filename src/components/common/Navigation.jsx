import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import styled from 'styled-components';

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
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    borderRadius: 5px;
    padding: 10px;
    display: flex;
    flexDirection: column;
    gap: 10px;
    zIndex: 1000;
`;

function Navigation() {
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
                        <IoMenu />
                        <span>메뉴</span>
                    </StyledIcon>
                </div>
                {isOpen && (
                    <DropdownMenu>
                        <Link to="/category" onClick={() => setIsOpen(false)}>카테고리</Link>
                        <Link to="/services" onClick={() => setIsOpen(false)}>고객센터</Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>이름없음</Link>
                    </DropdownMenu>
                )}
            </div>
        </NavWrapper>
    );
}

export default Navigation;
