import React from 'react';

function TableOfContents({ contents }) {
    return (
        <section className="table-of-contents">
            <h2>목차</h2>
            <ul>{contents.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </section>
    );
}

export default TableOfContents;