// Comments.jsx
import React, { useState } from 'react';

function Comments({ comments }) {
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const submitComment = () => {
        console.log("Comment Submitted:", newComment);
        setNewComment('');
    };

    return (
        <div className="comments">
            {comments.map((comment, index) => (
                <p key={index}>{comment}</p>
            ))}
            <textarea value={newComment} onChange={handleCommentChange} />
            <button onClick={submitComment}>댓글 추가</button>
        </div>
    );
}

export default Comments;
