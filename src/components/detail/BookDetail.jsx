import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaRegListAlt } from 'react-icons/fa';
import { BsBasket } from 'react-icons/bs';
import { SlPresent } from 'react-icons/sl';

function BookDetail({ book }) {
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
        console.log('Favoriting:', !isFavorited);  // 상태 토글 확인
        setIsFavorited(!isFavorited);
        setShowFavoritePopup(true);
        console.log('Popup should show');  // 팝업 상태 확인
        setTimeout(() => {
            setShowFavoritePopup(false);
            console.log('Popup should hide');  // 팝업 숨기기 확인
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
                    <small>소설 > 중국 소설 > SF 소설</small>
                    <h1>{book.title}</h1>
                    <div className="rating">★★★★★ 4.6점 (232평)</div>
                    <p className="author">저자: {book.author}</p>
                    <p className="publisher">출판사: {book.publisher}</p>
                    <div className="book-event">[EVENT] 신규 회원 대상 이벤트 정보</div>
                    <div className="book-pricing">
                        <div className="price-item">
                            <span>종이책 정가:</span>
                            <span className="price">₩17,000</span>
                        </div>
                        <div className="price-item">
                            <span>전자책 정가:</span>
                            <span className="price">₩10,710</span>
                        </div>
                        <div className="price-item">
                            <span>판매가:</span>
                            <span className="price">₩11,900</span>
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
                        출간 정보: 2020.07.06
                        <span className="detail-separator" />
                        파일 정보: EPUB 12.7MB
                    </p>
                    <p>
                        ISBN: 9788954442695
                        <span className="detail-separator2" />
                        듣기 기능: 지원
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

export default BookDetail;
