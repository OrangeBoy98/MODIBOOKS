import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import SlideShow from '../components/SlideShow/SlideShow';
import SignUpPage from './SignUpPage';
import CategoryPage from './CategoryPage';
import BackButton from '../components/common/BackButton';
import DetailPage from './DetailPage';
import styled from 'styled-components';
import Best from '../components/common/Best';
import Footer from '../components/common/Footer';
import Mypage from './Mypage';

const Wrapper = styled.div `
    width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
`;

function MainPage() {
    return (
        <Router>
            <PageLayout />
        </Router>
    );
}

// 별도의 컴포넌트로 레이아웃을 구성하여 useLocation을 사용할 수 있도록 합니다.
function PageLayout() {
    const location = useLocation(); // 현재 경로를 가져옵니다.

    return (
        <Wrapper>
            {/* 메인 페이지가 아닌 경우에만 BackButton을 렌더링합니다. */}
            {location.pathname !== "/" && <BackButton />}
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Navigation />
                        <hr />
                        <SlideShow />
                        <hr />
                        <Best />
                        <hr />
                        <Footer />
                    </>
                } />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/category" element={<CategoryPage />} />
            </Routes>
        </Wrapper>
    );
}

export default MainPage;
