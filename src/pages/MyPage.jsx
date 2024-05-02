import React, { useState } from 'react';
import LibrarySection from '../components/mypage/LibrarySection';
import CommentsSection from '../components/mypage/CommentsSection';
import Modal from 'react-modal';
import '../assets/Mypage.css'; 
import Header from '../components/common/Header';

const MyPage = () => {
    const [favoriteBooks, setFavoriteBooks] = useState([
        { id: 1, title: '총균쇠', author: '재레드 다이아몬드', image: '/images/book1.jpg' },
        { id: 2, title: '나는 읽고 쓰고 버린다', author: '손웅정', image: '/images/book2.jpg' },
        { id: 3, title: '불변의 법칙', author: '모건 하우절', image: '/images/book3.jpg' },
        { id: 4, title: '꽃길이 따로 있나, 내 삶이 꽃인 것을', author: '오평선', image: '/images/book4.jpg' },
        { id: 5, title: '일류의 조건', author: '사이토 다카시', image: '/images/book5.jpg' }
    ]);
    const [comments, setComments] = useState([
        { id: 1, content: '여기저기서 많이 거론되는 유명한 책이라서 한 번 읽어보았습니다. 매우 흥미진진한 책입니다.' },
        { id: 2, content: '살면서 가장 재미있게 읽은 책!..' },
        { id: 3, content: '생각보다 별로...' },
        { id: 4, content: '너무 좋은 책!! 강추합니다' }
    ]);
    //모달
    const [showModal, setShowModal] = useState(false);  
    const [popupMessage, setPopupMessage] = useState(''); 

    // 삭제 함수 
    const handleDeleteBook = (bookId) => {
        setFavoriteBooks(favoriteBooks.filter(book => book.id !== bookId));
        setPopupMessage('삭제되었습니다'); 
        setShowModal(true); 
    };

    const handleDeleteComment = (commentId) => {
        setComments(comments.filter(comment => comment.id !== commentId));
        setPopupMessage('삭제되었습니다'); 
        setShowModal(true); 
    };
    //모덜 덛기
    const handleCloseModal = () => {
        setShowModal(false); 
    };

    return (
        <div>
            <Header />
            <div className='mypage-container'>
            <h1 className='mypage-heading'>마이페이지</h1>
            <div className='library-section'>
                <LibrarySection books={favoriteBooks} onDeleteBook={handleDeleteBook} />
            </div>

            <div className="comments-section">
                <CommentsSection comments={comments} onDeleteComment={handleDeleteComment} />
            </div>
            <Modal
                className="modal"
                isOpen={showModal}
                onRequestClose={handleCloseModal}
                contentLabel="Delete Popup"
            >
                <div>
                    <p>{popupMessage}</p>
                    <button onClick={handleCloseModal}>닫기</button>
                </div>
            </Modal>
        </div>
        </div>
    );
};

export default MyPage;
