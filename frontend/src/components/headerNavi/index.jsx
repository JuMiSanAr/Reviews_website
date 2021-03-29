import React from 'react';
import logo from '../../assets/logo.png'
import { HeaderNaviStyle, RightHeaderSection, LunaLogo, 
    StyledLoginButton, StyledSignupButton, StyledTab } from '../../styles/componentStyles/headerNavi';



  
const HeaderNavi = () => {

    const tabHandler = (event) => {
        console.log(event.target.title);
      };

    const singupHandler = (event) => {
        console.log(event.target.title);
    };


    const loginHandler = (event) => {
        console.log(event.target.title);
    };
        

    return(
        <HeaderNaviStyle>
            <LunaLogo src={logo}/>

            <RightHeaderSection>
                <StyledTab title='home' onClick={(event) => tabHandler(event)}>Home</StyledTab>
                <StyledTab title='search' onClick={(event) => tabHandler(event)}>Search</StyledTab>
                <StyledTab title='profile' onClick={(event) => tabHandler(event)}>Profile</StyledTab>
                <StyledSignupButton title='signup' onClick={(event) => singupHandler(event)}>SIGNUP</StyledSignupButton>
                <StyledLoginButton title='login' onClick={(event) => loginHandler(event)}>LOGIN</StyledLoginButton>
            </RightHeaderSection>
        </HeaderNaviStyle>
    );
};


export default HeaderNavi;