import React from 'react';
import logo from '../../assets/logo.png'
import { HeaderNaviStyle, RightHeaderSection, LunaLogo, 
    StyledLoginButton, StyledSignupButton, StyledTab, StyledSignoutButton } from '../../styles/componentStyles/headerNavi';

import { useHistory } from "react-router-dom";

  
const HeaderNavi = () => {
    const token = localStorage.getItem('token');
    let history = useHistory();
    const homeHandler = (event) => {
        history.push("/");
      };

    const searchHandler = () => {
        history.push("search");
      };
     
      const profileHandler = (event) => {
        history.push("userProfile");
      };

    const singupHandler = (event) => {
        console.log(event.target.title);
    };


    const loginHandler = (event) => {
        console.log(event.target.title);
    };

    const logoutHandler = (event) => {
        localStorage.clear();
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
                        <StyledSignupButton title='signup' onClick={(event) => singupHandler(event)}>SIGNUP</StyledSignupButton>
                        <StyledLoginButton title='login' onClick={(event) => loginHandler(event)}>LOGIN</StyledLoginButton>
                    </>)
                }
            </RightHeaderSection>
        </HeaderNaviStyle>
    );
};


export default HeaderNavi;