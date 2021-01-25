import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    padding-top: 40px;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 40px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col 1'` : `'col1 col2'`)};

    @media screen and (max-widht: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col 2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
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
    max-widht: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`