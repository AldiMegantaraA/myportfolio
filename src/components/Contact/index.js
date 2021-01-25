import React from 'react'
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { Column1, Column2, Heading, Img, ImgWrap, TextWrapper, TopLine } from '../InfoSection/InfoElements'
import { ContactContainer, ContactRow, ContactWrapper, ContactSub } from './ContactElements'
import { SocialIconLink, SocialIcons } from '../Footer/FooterElements';
import img from '../../images/svg-4.svg';

const Contact = ({ top, email, number, id, headline, lightText, darkText }) => {
    return (
        <>
            <ContactContainer id={id}>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{top}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <ContactSub href="https://mail.google.com/mail/?view=cm&fs=1&to=aldimegantaraa@gmail.com" target="_blank"
                                darkText={darkText}><FaMailBulk />    {email}</ContactSub><br></br>
                                <ContactSub href="https://wa.me/081335085063" target="_blank" darkText={darkText}><FaWhatsapp />    {number}</ContactSub><br></br><br></br>
                                <SocialIcons>
                                    <SocialIconLink href="https://id.linkedin.com/in/aldi-megantara-arifin" target="_blank"
                                    aria-label="Linkedin"><FaLinkedin />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://www.instagram.com/aldimegantaraarifin/" target="_blank"
                                    aria-label="Instagram"><FaInstagram />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://twitter.com/aldimegaan" target="_blank"
                                    aria-label="Github"><FaGithub />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://www.behance.net/aldimegantaraa" target="_blank"
                                    aria-label="Behance"><FaBehance />
                                    </SocialIconLink>
                                </SocialIcons>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} width="100%" margin="0 0 10px 0" padding-right={0}/>
                            </ImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact
