// LibrarySection.jsx

import React from 'react';

const LibrarySection = ({ books, onDeleteBook }) => {
    return (
        <div className="library-section">
            <h2 className="section-title">내 서재</h2>
            {books.map(book => (
                <div key={book.id} className="book">
                    <img src={book.image} alt={book.title} />
                    <div className="book-details">

                        <p className="book-title">{book.title}</p>
                        <p className="book-author">{book.author}</p>
                        <button className="delete-button" onClick={() => onDeleteBook(book.id)}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LibrarySection;
