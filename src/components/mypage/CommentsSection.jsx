import React from 'react';


const CommentsSection = ({ comments, onDeleteComment }) => {
    return (
        <div className="section">
            <h2 className="section-title">내 리뷰 관리</h2>
            <ul className="comment-list">
                {comments.map(comment => (
                    <li className="comment-item" key={comment.id}>
                        <div className="comment-content">{comment.content}</div>
                        <button className="delete-button comment-delete-button" onClick={() => onDeleteComment(comment.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsSection;