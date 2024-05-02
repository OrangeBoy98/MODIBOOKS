import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import data from '../../data.json';

const Input = styled.input `
  width: 300px;
  padding: 8px 16px;  // 내부 패딩
  border-radius: 20px;  // 테두리 둥글기
  border: 1px solid #ccc;  // 테두리 스타일
  margin-left: auto;  // 왼쪽 여백 자동으로 설정하여 오른쪽에 붙게 함
  outline: none;  // 포커스시 테두리 없애기
`;

const SuggestionsList = styled.ul `
  position: absolute;
  width: 300px;  // 부모 컨테이너 대비 너비 설정
  background-color: #fff;  // 배경색
  border: 1px solid #ccc;  // 테두리 스타일
  border-top: none;  // 상단 테두리 없애기
  list-style: none;  // 리스트 스타일 없애기
  margin-top: 0;  // 상단 여백 없애기
  padding: 0;  // 패딩 없애기
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);  // 그림자 효과
  z-index: 100;  // z-index 설정
`;

const SuggestionItem = styled.li `
  padding: 10px;  // 내부 패딩
  cursor: pointer;  // 커서 포인터로 변경
  &:hover {
    background-color: #f0f0f0;  // 호버 시 배경색 변경
  }
`;

const SearchAutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        fetch(data) // 파일의 위치에 따라 경로 수정 필요
            .then(response => response.json())
            .then(data => {
                const altTexts = data.reduce((acc, category) => {
                    const itemsAlts = category
                        .items
                        .map(item => item.details.alt);
                    return acc.concat(itemsAlts);
                }, []);
                setSuggestions(altTexts);
            })
            .catch(error => console.error('Error loading the data:', error));
    }, []);

    useEffect(() => {
        if (inputValue) {
            const filtered = suggestions.filter(
                suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [inputValue, suggestions]);

    const handleInputChange = (event) => {
        console.log('Input changed:', event.target.value); // 입력 변경 로그
        setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };
    useEffect(() => {
        console.log('Data loaded:', suggestions); // 데이터 로딩 확인
    }, [suggestions]);
    
    useEffect(() => {
        console.log('Filtered suggestions:', filteredSuggestions); // 필터링된 제안 확인
    }, [filteredSuggestions]);

    return (
        <div>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search here..."/> {
                showSuggestions && (
                    <SuggestionsList>
                        {
                            filteredSuggestions.length
                                ? (filteredSuggestions.map((suggestion, index) => (
                                    <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </SuggestionItem>
                                )))
                                : (<SuggestionItem></SuggestionItem>)
                        }
                    </SuggestionsList>
                )
            }
        </div>
    );
};

export default SearchAutoComplete;
