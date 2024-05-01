import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Navigation from '../components/common/Navigation';
import SlideShow from '../components/SlideShow/SlideShow';
import SignUpPage from './SignUpPage';
import CategoryPage from './CategoryPage';
import BackButton from '../components/common/BackButton';
import DetailPage from './DetailPage';
import DetailPage2 from './DetailPage2';
import DetailPage3 from './DetailPage3';
import styled from 'styled-components';
import Best from '../components/common/Best';
import Footer from '../components/common/Footer';
import MyPage from './MyPage';
import Services from '../components/support/Services';

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

    return (
        <Wrapper>
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
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/detail2/:id" element={<DetailPage2 />} />
                <Route path="/detail3/:id" element={<DetailPage3 />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Wrapper>
    );
}

export default MainPage;
