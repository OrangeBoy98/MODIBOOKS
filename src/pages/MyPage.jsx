import Header from '../components/common/Header';
import styled from 'styled-components';

const MyPageWrapper = styled.div`
    padding-top: 60px;
`;

function MyPage(){
    return (
        <MyPageWrapper>
            <Header />
            <h1>MyPage</h1>
        </MyPageWrapper>
    )
}

export default MyPage;
