import React from 'react';
import { FooterButton, FooterLowerBar, FooterRightsText, FooterStyle, FooterUpperBar, 
    FooterUpperLeftSide, FooterUpperRightSide, SocialButton, SocialButtonIcon } from '../../styles/componentStyles/footer';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import googlePlus from '../../assets/googleplus.svg';
import instagram from '../../assets/instagram.svg';
    


const Footer = () => {


    return (
    <FooterStyle>
        <FooterUpperBar>
            <FooterUpperLeftSide>
                <FooterButton>About us</FooterButton>
                <FooterButton>Press</FooterButton>
                <FooterButton>Blog</FooterButton>
                <FooterButton>iOS</FooterButton>
                <FooterButton>Android</FooterButton>
            </FooterUpperLeftSide>
            <FooterUpperRightSide>
                <SocialButton><SocialButtonIcon src={facebook} /></SocialButton>
                <SocialButton><SocialButtonIcon src={twitter} /></SocialButton>
                <SocialButton><SocialButtonIcon src={googlePlus} /></SocialButton>
                <SocialButton><SocialButtonIcon src={instagram} /></SocialButton>
            </FooterUpperRightSide>
        </FooterUpperBar>

        <FooterLowerBar>
        <FooterRightsText>&copy; Copyright Luna 2021</FooterRightsText>
        </FooterLowerBar>
    </FooterStyle>

    );
};

export default Footer;