import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // 데이터 처리를 위한 useEffect
    useEffect(() => {
        const altTexts = data.reduce((acc, category) => {
            const itemsAlts = category.items.map(item => item.details.alt);
            return acc.concat(itemsAlts);
        }, []);
        setSuggestions(altTexts);
    }, []);

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

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
        setInputValue(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search here..."/> {
                showSuggestions && (
                    <SuggestionsList>
                        {filteredSuggestions.length
                            ? filteredSuggestions.map((suggestion, index) => (
                                <SuggestionItem key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
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
