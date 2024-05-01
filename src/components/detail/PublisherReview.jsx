import React from 'react';

function PublisherReview({ review }) {
    return (
        <section className="publisher-review">
            <h2>출판사 서평</h2>
            <p>{review}</p>
        </section>
    );
}

export default PublisherReview;