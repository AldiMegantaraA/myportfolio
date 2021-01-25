import React from 'react'
import { Button } from '../ButtonElements';
import img from '../../images/svg-1.svg';

import { InfoContainer, InfoWrapper, InfoRow, Column,
TextWrapper, TopLine, Heading, Subtitle, BtnWrap,
ImgWrap, Img} from './InfoElements';

const InfoSection = ({ lightBg, lightText, id, topLine, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='portfolio'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column>
                        <Column>
                            <ImgWrap>
                                <Img src={img} alt={alt} width="100%" margin="0 0 10px 0" padding-right={0}/>
                            </ImgWrap>
                        </Column>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
