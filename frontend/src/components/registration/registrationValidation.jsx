import styled from "styled-components";
import { RegistrationTitle } from "../../styles/pageStyles/registrationStyles";
import { VerificationFields } from "../../styles/pageStyles/regisValidStyles";
import {Redirect} from "react-router-dom";
import React, {useState} from "react";
import {activateAccountFetch} from "../../store/fetches/signup_fetches";

 

const VerificationInputField = styled.div`
    display: flex;
    flex-direction: column;
`

// JUST A TEMPORARY SOLUTION; WHICH NEEDS TO BE FIXED AFTERWARDS WITH THAT CODE!

const ValidationWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: 5px;
align-items: center;
background: #F2F2F2;
min-height: 100vh;

    button {
        background-color: #E47D31;
        margin-top: 20px;
        padding: 15px 30px;
        width: 259px;
        height: 56px;
        align-self: center;
        border-radius: 28px;
        color: #fff;
        border: none;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s;

        :hover {
            box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
            transform: scale(1.05) translateY(-5px);
    }
}
`

const RegistrationValidation = (props) => {

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const [redirect, setRedirect] = useState(false)

    const [ errorCode, setErrorCode ] = useState(false);
    const [ errorPassword, setErrorPassword ] = useState(false);
    const [ errorEmpty, setErrorEmpty] = useState(false);

    const activateAccount = () => {
        if ((email || code || username || password1 || password2 || location) === '') {
            setErrorEmpty(true);
            return 0;
        }
        setErrorEmpty(false);

        const body = {
            email: email,
            code: code,
            username: username,
            password1: password1,
            password2: password2,
            location: location
        }
        activateAccountFetch(body)
            .then(data => {
                console.log(data)
                setRedirect(true)
            })
            .catch(response => {
                console.log(response)
                const statusLastChar = response.toString().slice(-1);

                if (statusLastChar === '0') {
                    setErrorPassword(true);
                    setErrorCode(false);
                }
                else {
                    setErrorPassword(false);
                    setErrorCode(true);
                }
            })
    }

    return (
        <>
        <ValidationWrapper>
            {redirect ? <Redirect to='/login' /> : ''}
                <RegistrationTitle>Verification <span></span></RegistrationTitle>
                <VerificationFields>
                    <VerificationInputField>
                    <input
                        required
                        onChange={event => setEmail(event.target.value)}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                    />
                    <input
                        required
                        onChange={event => setUsername(event.target.value)}
                        // value={}
                        name='username'
                        type='text'
                        placeholder='Username'
                    />
                    <input
                        required
                        onChange={event => setPassword1(event.target.value)}
                        // value={}
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                    </VerificationInputField>

                    <VerificationInputField>
                    <input
                        required
                        onChange={event => setCode(event.target.value)}
                        // value={}
                        name='code'
                        type='text'
                        placeholder='Validation code'
                    />

                    <input
                        required
                        onChange={event => setLocation(event.target.value)}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='Location'
                    />
                    
                    <input
                        required
                        onChange={event => setPassword2(event.target.value)}
                        // value={}
                        name='password repeat'
                        type='password'
                        placeholder='Password repeat'
                        onKeyUp={ event => event.key === 'Enter' ? activateAccount() : ''}

                    />

                    </VerificationInputField>
                </VerificationFields>
                {errorEmpty ?
                    <h1>Please make sure to fill in all fields</h1>
                    : ''}
                {errorCode ?
                    <h1>Email and code don't match</h1>
                    : ''}
                {errorPassword ?
                    <>
                    <h1>The two passwords introduced didn't match</h1>
                    </>
                    : ''}
                <button onClick={activateAccount}>Finish Registration</button>
        </ValidationWrapper>
        </>
    )
}

export default RegistrationValidation;