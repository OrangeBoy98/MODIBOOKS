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
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
    cursor: pointer;

    &:hover .overlay {
        opacity: 1; // 마우스 호버 시 오버레이 표시
    }

    img {
        width: 100%;
        height: auto;
        max-height: 100%; // 이미지 최대 높이 설정
        object-fit: contain; // 변경된 object-fit 스타일
        transition: filter 0.3s ease; // 마우스 호버 시 효과 적용
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // 투명도 조절 가능한 배경
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0; // 초기에는 숨김
        transition: opacity 0.3s ease; // 투명도 변화 효과
    }

    .title {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
`;

const SlideShow = () => {
    const navigate = useNavigate();
    const [isDragging, setIsDragging] = useState(false);

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

    const images = data.flatMap(category => category.items.map(item => item.details));

    const handleImageClick = (id) => {
        if (!isDragging) {
            navigate(`/detail/${id}`);
        }
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                {images.map((image) => (
                    <SlideItem key={image.id} onClick={() => handleImageClick(image.id)}>
                        <img src={image.src} alt={image.alt} /> 
                        <div className="overlay">
                            <div className="title">{image.title}</div>
                        </div>
                    </SlideItem>
                ))}
            </Slider>
        </Wrapper>
    );
}

export default SlideShow;
