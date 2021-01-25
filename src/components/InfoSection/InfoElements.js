import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
`

export const InfoWrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    position: absloute;
    padding: 40px 20px;

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
    }
`


export const Column = styled.div`
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`

export const TopLine = styled.p`
    color: #8A2387;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 786px) {
        font-size: 14px;
        width: 500px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`

export const Img = styled.img`
    widht: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 786px) {
        width: 300px;
    }
`