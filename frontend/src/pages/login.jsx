import React from 'react';
import HeaderNavi from '../components/headerNavi/index';
import { InputField, LoginTitle, LoginWrapper, MainContainer } from '../styles/pages/loginStyles';

//############################# Component ################################

const LoginPage = () => {
    return (
        <MainContainer>
            <HeaderNavi/>
            <LoginWrapper> 
                <LoginTitle>LOGIN<span></span> </LoginTitle>
                    <span></span>
                <InputField>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='username'
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </InputField>
                <button type='submit'>Login</button>
            </LoginWrapper>
        </MainContainer>            
    )
}

export default LoginPage;