import React from 'react';

function AuthorProfile({ author }) {
    return (
        <section className="author-profile">
            <h2>저자 프로필</h2>
            <p>{author.bio}</p>
        </section>
    );
}

export default AuthorProfile;