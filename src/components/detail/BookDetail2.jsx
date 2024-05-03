import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegListAlt } from 'react-icons/fa';
import { BsBasket } from 'react-icons/bs';
import { SlPresent } from 'react-icons/sl';

function BookDetail2({ book }) {
    const [purchaseComplete, setPurchaseComplete] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);  // 즐겨찾기 상태 추가
    const [showFavoritePopup, setShowFavoritePopup] = useState(false);  // 팝업 상태 추가
    const navigate = useNavigate(); // useNavigate를 사용

    const handlePurchase = () => {
        setPurchaseComplete(true); // 구매 완료 상태를 true로 설정
        setTimeout(() => {
            setPurchaseComplete(false); // 3초 후 팝업을 숨깁니다.
        }, 3000);
    };

    const goToFavorite = () => {
        setIsFavorited(!isFavorited);  // 즐겨찾기 상태 토글
        setShowFavoritePopup(true);  // 팝업 표시
        setTimeout(() => {
            setShowFavoritePopup(false);  // 3초 후 팝업 숨기기
        }, 3000);
    };
    const confirmAndNavigate = () => {
        setShowFavoritePopup(false);
        navigate('/mybook');
    };
    const closePopup = () => {
        setShowFavoritePopup(false);
    };

    const goToWishlist = () => {
        navigate('/category'); // 'wishlist' 페이지로 이동
    };


    return (
        <div className="book-detail-container">
            <div className="book-image">
                <img src={book.src} alt={book.title} />
                <button className="preview-button">미리보기</button>
            </div>
            <div className="book-info">
                <div className="favorite-actions">
                <button className="f-icon-button" onClick={goToFavorite}>
                        {isFavorited ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <button className="f-icon-button" onClick={goToWishlist}>
                        <FaRegListAlt />
                    </button>
                </div>
                <div className="book-meta">
                    <small>소설 > 영미 소설 > 해외 판타지 소설</small>
                    <h1>{book.title}</h1>
                    <div className="rating">★★★★★ 4.7점 (1307명)</div>
                    <p className="author">저자: {book.author}</p>
                    <p className="publisher">출판사: {book.publisher}</p>
                    <div className="book-event">[EVENT] 단 3일! 캐시 충전시 포인트 두배 적립!</div>
                    <div className="book-pricing">
                        <div className="price-item">
                            <span>종이책 정가:</span>
                            <span className="price">₩10,500</span>
                        </div>
                        <div className="price-item">
                            <span>전자책 정가:</span>
                            <span className="price">₩9,050</span>
                        </div>
                        <div className="price-item">
                            <span>판매가:</span>
                            <span className="price">₩10,500</span>
                        </div>
                    </div>
                    <div className="book-actions">
                        <button className="icon-button">
                            <BsBasket />
                        </button>
                        <button className="icon-button">
                            <SlPresent />
                        </button>
                        <button className="buy-button" onClick={handlePurchase}>구매하기</button>
                    </div>
                </div>
                <div className="book-details-box">
                    <p>
                        출간 정보: 2020.03.25
                        <span className="detail-separator" />
                        파일 정보: EPUB 3.1MB |  약 20.2만 자
                    </p>
                    <p>
                        ISBN: 9788954442303
                        <span className="detail-separator2" />
                        듣기 기능: 듣기 가능
                    </p>
                    <p>지원 기기: PAPER, iOS, Android, PC, Mac</p>
                </div>
            </div>
            {purchaseComplete && <div className="purchase-popup">구매가 완료되었습니다.</div>}
            {showFavoritePopup && (
    <div className="favorite-popup">
        <div className="popup-message">즐겨찾기에 추가되었습니다.</div>
        <div className="popup-buttons">
            <button className="confirm-button" onClick={confirmAndNavigate}>확인</button>
            <button className="cancel-button" onClick={closePopup}>취소</button>
        </div>
    </div>
)}

        </div>
    );
}

export default BookDetail2;
