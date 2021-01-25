import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 1100px) {
        height: 1100px;
        padding-top: 100px;
    }

    @media screen and (max-width: 786px) {
        height: 1300px;
        padding-top: 200px;
    }
`

export const PortfolioH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`


export const PortfolioWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    position: absloute;
    padding: 0;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const PortfolioCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 50px;
    height: 400px;
    padding: 30px;
    align-items: center;

    &:hover {
        transform: scale(1.02);
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        background: #8a23874f;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 786px) {
        height: 300px;
        padding: 20px;
    }
`

export const PortfolioIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
    
    @media screen and (max-width: 786px) {
        height: 150px;
        width: 150px;
    }
`

export const PortfolioH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #fff;
    display: flex;
`
export const PortfolioP = styled.p`
    text-align: center;
    color: #fff;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 786px) {
        font-size: 14px;
    }
`