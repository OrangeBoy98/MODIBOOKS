import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    display: flex;
    flex-grow: 2;
    margin: 0 20px;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0 4px 4px 0; // 오른쪽 모서리만 둥글게
    border-left: none; // 오른쪽 테두리 제거
`;

const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #1a73e8;
    color: white;
    border: 1px solid #1a73e8;
    border-radius: 4px 0 0 4px; // 왼쪽 모서리만 둥글게
    cursor: pointer;
    &:hover {
    background-color: #1669c7;
    }
`;

function SearchBar() {
    return (
        <SearchBarWrapper>
            <SearchButton>검색</SearchButton>
            <SearchInput type="text" placeholder="검색" />
        </SearchBarWrapper>
    );
}

export default SearchBar;