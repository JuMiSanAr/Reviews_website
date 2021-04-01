import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import HeaderNavi from '../components/headerNavi/index';
import { loginAction } from '../store/actions/loginActions';
import { InputField, LoginTitle, LoginWrapper, MainContainer } from '../styles/pageStyles/loginStyles';
import loginFetch from "../store/fetches/login_fetches";
import {Redirect, useHistory} from 'react-router-dom';
import {getLoggedInUserInfoFetch} from "../store/fetches/users_fetches";
import {getUserInfoAction} from "../store/actions/usersActions";

//############################# Component ################################

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [errorMessage, setErrorMessage] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory()


    const loginHandler = async () => {

        const response = await loginFetch(email, password)
                .then(data => {
            const action = loginAction(data.access);
            dispatch(action);
            localStorage.setItem('token', data.access);
            return data;
        })
        .catch(() => {
                setErrorMessage(true);
            })

        const data = await response.access

        getLoggedInUserInfoFetch(data)
            .then(data => {
                const action = getUserInfoAction(data);
                dispatch(action);
                history.push('/');
        })
    }

    return (
        <>
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
                            placeholder='Email'
                        />
                        <input
                            required
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            name='password'
                            type='password'
                            placeholder='Password'
                            onKeyUp={ event => event.key === 'Enter' ? loginHandler() : ''}
                        />
                    </InputField>
                    <h1>{errorMessage ? 'Invalid username or password' : ''}</h1>
                    <h1> </h1>
                    <button onClick={loginHandler}>Login</button>
                </LoginWrapper>
            </MainContainer>

        </>
    )
}

export default LoginPage;