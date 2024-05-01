import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";

const Wrapper = styled.div`
    width: 100%;
    max-height: 500px;
    margin: 0 auto;
    padding: 50px 0;

    .slick-prev:before, .slick-next:before {
        color: #333; // 변경된 색상
        font-size: 30px; // 변경된 크기
        opacity: 0.7; // 추가된 투명도
    }

    .slick-slide {
        padding: 0 40px; // 각 슬라이드 간의 여백
    }
`;

const SlideItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: filter 0.3s ease;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .overlay .title {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        z-index: 1000;
    }
    .overlay .name {
        color: #fff;
        font-size: 16px;
        text-align: center;
        z-index: 1000;
    }

`;

const SlideShow = () => {
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [showId, setShowId] = useState(null);

    const handleMouseEnter = (id) => {
        setShowId(id);
        setOverlayVisible(true);
    };

    const handleMouseLeave = () => {
        setShowId(null);
        setOverlayVisible(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: () => setIsDragging(true),
        afterChange: () => setIsDragging(false)
    };

    const items = data.flatMap(category => category.items.map(item => item.details));

    const handleImageClick = (id) => {
    if (!isDragging) {
        if (id >= 100 && id < 200) { // 예를 들어 아이디가 3의 배수일 경우
            navigate(`/detail/${id}`);
        } else if (id >= 200 && id < 300) {
            navigate(`/detail2/${id}`);
        } else {
            navigate(`/detail3/${id}`);
        }
    }
};


    return (
        <Wrapper>
            <Slider {...settings}>
                {items.map((item) => (
                    <SlideItem
                        key={item.id}
                        onMouseEnter={()=>{handleMouseEnter(item.id)}}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleImageClick(item.id)}
                    >
                        <img src={item.src} alt={item.alt} />
                        <div className="overlay" style={{ opacity: overlayVisible && showId === item.id ? 1 : 0 }}>
                            <div className="title">{item.alt}</div>
                            <div className="name">{item.author}</div>
                        </div>
                    </SlideItem>
                ))}
            </Slider>
        </Wrapper>
    );
}

export default SlideShow;
