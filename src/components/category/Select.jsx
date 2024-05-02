import React, { useState } from 'react';
import '../../assets/Category.css';

const books = {
  '소설': [
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 1',  author: 'Author 1', description: 'Description 1', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 2',  author: 'Author 2', description: 'Description 2', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 3',  author: 'Author 3', description: 'Description 3', link: "https://www.naver.com/" }
  ],
  '경영': [
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 4', author: 'Author 4', description: 'Description 4', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 5', author: 'Author 5', description: 'Description 5', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 6', author: 'Author 6', description: 'Description 6', link: "https://www.naver.com/" }
  ],
  '인문': [
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 7', author: 'Author 7', description: 'Description 7', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 8', author: 'Author 8', description: 'Description 8', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 9', author: 'Author 9', description: 'Description 9', link: "https://www.naver.com/" }
  ],
  '컴퓨터': [
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 10', author: 'Author 10', description: 'Description 10', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 11', author: 'Author 11', description: 'Description 11', link: "https://www.naver.com/" },
    { image: "https://via.placeholder.com/90x110.jpg",  title: 'Book Title 12', author: 'Author 12', description: 'Description 12', link: "https://www.naver.com/" }
  ]
};


function Select() {
  const [selectedCategory, setSelectedCategory] = useState('소설');

  return (
    <div className="container">
      <div className="sidebar">
        <h1 className="sidebar-header">카테고리</h1> {/* 카테고리 제목 추가 */}
        {Object.keys(books).map(category => (
          <div
            key={category}
            className={`category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="books-section">
        <h2 className="category-title">{selectedCategory}</h2>
        <div className="books">
          {books[selectedCategory].map(book => (
            <a href={book.link} key={book.title} className="book"> {/* 링크 오류 수정 */}
              <img src={book.image} alt={`Cover of ${book.title}`} />
              <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-description">{book.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
