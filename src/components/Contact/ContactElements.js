import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding-top: 20px;
    }
`

export const ContactWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    position: absloute;
    z-index: 1;
    padding: 40px 20px;

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
    }
`

export const ContactSub = styled.a`
    max-width: 340px;
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 786px) {
        font-size: 14px;
    }

    &:hover {
        color: #8A2387;
    }
`