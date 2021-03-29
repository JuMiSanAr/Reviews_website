import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import HeaderNavi from '../components/headerNavi/index';
import { loginAction } from '../store/actions/loginActions';
import { baseUrl, headers } from '../store/constants';
import { InputField, LoginTitle, LoginWrapper, MainContainer } from '../styles/pageStyles/loginStyles';

//############################# Component ################################

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch
    
    const loginHandler = () => {
        const url = `${baseUrl}auth/token/`;
        const config = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ email: email, password: password }),
        }
        console.log(config);
        // fetch(url, config)
        // .then((res) => res.json())
        // .then((data) => {
        //  dispatch(loginAction(data.access));
        //   localStorage.setItem('token', data.access);
        // });
    }

    return (
        <MainContainer>
            <HeaderNavi/>
            <LoginWrapper> 
                <LoginTitle>LOGIN<span></span> </LoginTitle>

                <InputField>
                    <input
                        required
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        name='username'
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        required
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                </InputField>
                <button onClick={loginHandler()}>Login</button>
            </LoginWrapper>
        </MainContainer>            
    )
}

export default LoginPage;