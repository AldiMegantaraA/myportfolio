import React from 'react';
import { FaBehance, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Video from '../../videos/video.mp4';
import { FooterContainer, FooterWrap, SocialMedia,
SocialMediaWrap, SocialIcons, SocialLogo, SocialIconLink, WebsiteRights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer autoPlay loop muted src={Video} type='video/mp4'>
            <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo>
                                aldi.
                            </SocialLogo>
                            <WebsiteRights>aldi © {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
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
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
