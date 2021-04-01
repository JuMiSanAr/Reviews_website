import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import { HeaderNaviStyle, RightHeaderSection, LunaLogo, 
    StyledLoginButton, StyledSignupButton, StyledTab, StyledSignoutButton } from '../../styles/componentStyles/headerNavi';

import {useHistory} from "react-router-dom";

  
const HeaderNavi = () => {


    const token = localStorage.getItem('token');
    let history = useHistory();
    const homeHandler = (event) => {
        history.push("/");
      };

    const searchHandler = () => {
        history.push("/search");
      };
     
      const profileHandler = (event) => {
        history.push("/userProfile");
      };

    const singupHandler = (event) => {
        history.push("/registration");
    };


    const loginHandler = (event) => {
        history.push("/login");
    };

    const logoutHandler = () => {
        localStorage.clear();
        history.push("/");
    };
        

    return(
        <HeaderNaviStyle>
            <LunaLogo src={logo}/>

            <RightHeaderSection>
                <StyledTab title='home' onClick={homeHandler}>Home</StyledTab>
                <StyledTab title='search' onClick={searchHandler}>Search</StyledTab>
                <StyledTab title='profile' onClick={(event) => profileHandler(event)}>Profile</StyledTab>

                {
                    token ? <StyledSignoutButton onClick={logoutHandler}>LOGOUT</StyledSignoutButton> :
                    (<>
                        <StyledSignupButton title='signup' onClick={singupHandler}>SIGNUP</StyledSignupButton>
                        <StyledLoginButton title='login' onClick={loginHandler}>LOGIN</StyledLoginButton>
                    </>)
                }
            </RightHeaderSection>
        </HeaderNaviStyle>
    );
};


export default HeaderNavi;