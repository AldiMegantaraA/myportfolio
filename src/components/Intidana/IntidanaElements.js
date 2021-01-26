import styled from 'styled-components';
// import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #010606;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    height: 500px;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`


export const ProjectWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding: 40px 20px;

    @media screen and (max-width: 786px) {
        margin-bottom: 12px;
    }
`

export const SectionTitle = styled.h1`
    color: #fff;
    padding-bottom: 44px;
`


export const ProjectTitle = styled.h2`
    // font-size: 40px;
    color: #fff;
    margin-bottom: 8px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
        margin-bottom: 24px
    }
`

export const ProjectP = styled.p`
    color: #fff;
    font-size: 18px;
    line-height: 24px;

    @media screen and (max-width: 786px) {
        font-size: 14px;
    }
`

export const HeroBg = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
`

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 24px;

    @media screen and (max-width: 786px) {
        margin-top: 8px;
    }
`

