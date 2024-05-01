import React from 'react';
import styled from 'styled-components';
import data from '../../data.json'; // 경로는 프로젝트 구조에 따라 조정

const Container = styled.div`
  margin: 20px;
`;

const Title = styled.h2`
  font-weight: bold;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // 3열 그리드
  gap: 10px; // 그리드 사이 간격
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
`;

const Rank = styled.div`
  font-size: 20px;
  color: #333;
  width: 30px;
  text-align: center;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 120px;
  object-fit: cover;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

const ItemAuthor = styled.p`
  font-size: 12px;
  color: #666;
  margin: 5px 0;
`;

const ItemRating = styled.p`
  color: #e0a800;
  font-size: 12px;
`;

function Best() {
  const allItems = data.reduce((acc, category) => acc.concat(category.items), []);
  
  return (
    <Container>
      <Title>베스트</Title>
      <Grid>
        {allItems.map((item, index) => (
          <Item key={index}>
            <Rank>{index + 1}</Rank>
            <ItemImage src={item.details.src} alt={item.details.alt} />
            <ItemDetails>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemAuthor>{item.details.author || '저자 정보 없음'}</ItemAuthor>
              <ItemRating>⭐ {item.details.rating}</ItemRating>
            </ItemDetails>
          </Item>
        ))}
      </Grid>
    </Container>
  );
}

export default Best;
