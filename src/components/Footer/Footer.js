import React from 'react';
import { Button } from '../../globalStyles';
import { FooterC, FooLink, FooLnksCont, FooterLnksIts, FooLnksWrap, FooLTitle, FooterSHead, FooterSub, FooSubText, Form, FInput, SIcon, SIconLnk, SocialIcons, SLogo, SocialsNetworks, SocialsNetWrap, WsRights } from './Footer.elements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterC>
            <FooterSub>
                <FooterSHead>
                    Join our exclusive membership to 
                    receive the latest news and trends
                </FooterSHead>
                <FooSubText>You can unsubscribe at any time</FooSubText>
                <Form>
                    <FInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig>Subscribe</Button>
                   
                </Form>
            </FooterSub>
            <FooLnksCont>
                <FooLnksWrap>
                    <FooterLnksIts>
                        <FooLTitle>
                            About Us
                        </FooLTitle>
                        <FooLink to='/sign-up'>How it works</FooLink>
                        <FooLink to='/'>Testimonials</FooLink>
                        <FooLink to='/'>Careers</FooLink>
                        <FooLink to='/'>Investor</FooLink>
                        <FooLink to='/'>Terms of Service</FooLink>
                    </FooterLnksIts>
                    <FooterLnksIts>
                        <FooLTitle>
                            Contact Us
                        </FooLTitle>
                        <FooLink to='/sign-up'>How it works</FooLink>
                        <FooLink to='/'>Testimonials</FooLink>
                        <FooLink to='/'>Careers</FooLink>
                        <FooLink to='/'>Investor</FooLink>
                        <FooLink to='/'>Terms of Service</FooLink>
                    </FooterLnksIts>
                    </FooLnksWrap>

                    <FooterLnksIts>
                        <FooLTitle>
                            Videos
                        </FooLTitle>
                        <FooLink to='/sign-up'>How it works</FooLink>
                        <FooLink to='/'>Testimonials</FooLink>
                        <FooLink to='/'>Careers</FooLink>
                        <FooLink to='/'>Investor</FooLink>
                        <FooLink to='/'>Terms of Service</FooLink>
                    </FooterLnksIts>
                    <FooterLnksIts>
                        <FooLTitle>
                            Social Media
                        </FooLTitle>
                        <FooLink to='/sign-up'>How it works</FooLink>
                        <FooLink to='/'>Testimonials</FooLink>
                        <FooLink to='/'>Careers</FooLink>
                        <FooLink to='/'>Investor</FooLink>
                        <FooLink to='/'>Terms of Service</FooLink>
                    </FooterLnksIts>
                
            </FooLnksCont>
            <SocialsNetworks>
                <SocialsNetWrap>
                    <SLogo to="/">
                        <SIcon/>
                        SIGMA
                    </SLogo>
                    <WsRights>SIGMA &copyright 2021</WsRights>
                    <SocialIcons>
                        <SIconLnk href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SIconLnk>
                        <SIconLnk href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SIconLnk>
                        <SIconLnk href='/' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                        </SIconLnk>
                        <SIconLnk href='/' target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SIconLnk>
                        <SIconLnk href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin/>
                        </SIconLnk>
                    </SocialIcons>
                </SocialsNetWrap>
            </SocialsNetworks>
        </FooterC>
    )
}

export default Footer;