import React, {useState} from 'react';
import Video from '../../images/bg1.gif';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} />
            </HeroBg>
            <HeroContent>
                <HeroP>Hey I'm Aldi,</HeroP>
                <HeroH1>I am an UI/UX Designer and Front-End Developer based in Jakarta.</HeroH1>
                <HeroBtnWrapper>
                    <Button to="portfolio" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Recent Project {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
