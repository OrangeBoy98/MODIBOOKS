import React from 'react';

function BookIntroduction({ introduction }) {
    return (
        <section className="book-introduction">
            <h2>작품 소개</h2>
            <p>{introduction}</p>
        </section>
    );
}

export default BookIntroduction;