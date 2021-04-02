import React from 'react';
import logo from '../../assets/logo.png'
import { HeaderNaviStyle, RightHeaderSection, LunaLogo, 
    StyledLoginButton, StyledSignupButton, StyledTab, StyledSignoutButton } from '../../styles/componentStyles/headerNavi';

import {useHistory} from "react-router-dom";
import {loginAction} from "../../store/actions/loginActions";
import {useDispatch} from "react-redux";

  
const HeaderNavi = () => {

    const dispatch = useDispatch();


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
        localStorage.removeItem('token');
        const action = loginAction(null,false);
        dispatch(action);
        history.push("/");
    };
        

    return(
        <HeaderNaviStyle>
            <LunaLogo src={logo} onClick={homeHandler}/>

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