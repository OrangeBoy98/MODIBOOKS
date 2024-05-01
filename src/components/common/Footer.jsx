import styled from 'styled-components';

const FooterWrapper = styled.footer`
    width: 100%;
    max-width: 1000px;
    padding: 20px 0;
    background-color: #fff;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    margin: 0 auto;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            © 2024 RIDIBOOKS. All rights reserved.
        </FooterWrapper>
    );
}

export default Footer;
