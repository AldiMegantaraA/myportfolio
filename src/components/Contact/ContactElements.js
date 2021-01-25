import styled from 'styled-components';

export const ContactContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 200px 0 0 0;
    }
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 786px) {
        height: 400px;
    }
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-widht: 786px) {
        grid-template-columns: 1fr;
    }
`

export const ContactSub = styled.a`
    max-width: 240px;
    margin-bottom: 8px;
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 786px) {
        font-size: 14px;
    }

    &:hover {
        color: #8A2387
    }
`