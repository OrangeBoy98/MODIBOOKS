import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import 합니다.
import data from '../../data.json';  // data.json을 직접 import합니다.

const Input = styled.input`
  width: 300px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-left: auto;
  outline: none;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  list-style: none;
  margin-top: 0;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 100;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchAutoComplete = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // 데이터 처리를 위한 useEffect
    useEffect(() => {
        const altTexts = data.reduce((acc, category) => {
            const itemsAlts = category.items.map(item => ({
                alt: item.details.alt, // 텍스트
                id: item.details.id // 고유 ID
            }));
            return acc.concat(itemsAlts);
        }, []);
        setSuggestions(altTexts);
    }, []);

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (inputValue) {
            const filtered = suggestions.filter(
                suggestion => suggestion.alt.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [inputValue, suggestions]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.alt);
        setShowSuggestions(false);
        navigateBasedOnId(suggestion.id);
    };

    const navigateBasedOnId = (id) => {
        if (id >= 100 && id < 200) {
            navigate(`/detail/${id}`);
        } else if (id >= 200 && id < 300) {
            navigate(`/detail2/${id}`);
        } else {
            navigate(`/detail3/${id}`);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && filteredSuggestions.length > 0) {
            handleSuggestionClick(filteredSuggestions[0]);
        }
    };

    return (
        <div>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Search here..."/> {
                showSuggestions && (
                    <SuggestionsList>
                        {filteredSuggestions.length
                            ? filteredSuggestions.map((suggestion, index) => (
                                <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion.alt}
                                </SuggestionItem>
                            ))
                            : <SuggestionItem></SuggestionItem>
                        }
                    </SuggestionsList>
                )
            }
        </div>
    );
};

export default SearchAutoComplete;
