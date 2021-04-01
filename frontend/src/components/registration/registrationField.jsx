import React, {useState} from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';
import {signupCodeFetch} from "../../store/fetches/signup_fetches";


//############################# Component ################################


const RegistrationFieldComponent = (props) => {

    const [ email, setEmail ] = useState('');

    const [ errorAlreadyActivated, setErrorAlreadyActivated ] = useState(false);
    const [ errorEmptyEmail, setErrorEmptyEmail ] = useState(false);

    const sendEmail = () => {

        if (email !== ''){
            signupCodeFetch(email)
            .then(data => {
                props.setStage('email sent');
            })
            .catch((response) => {
                const statusLastChar = response.toString().slice(-1);

                if (statusLastChar === '0') {
                    setErrorAlreadyActivated(true);
                }
                else {
                    props.setStage('email used');
                }
            });
        }
        else {
            setErrorEmptyEmail(true);
        }
    }


    return (
        <>
                <RegistrationTitle>Registration <span></span></RegistrationTitle>
                <RegistrationField>
                    <input
                        required
                        onChange={event => setEmail(event.target.value)}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                        onKeyUp={ event => event.key === 'Enter' ? sendEmail() : ''}

                    />
                    {errorEmptyEmail ?
                        <h1>Email field cannot be empty</h1>
                        : ''}
                    {errorAlreadyActivated ?
                        <>
                        <h1>It looks like there's an existing account that uses this email</h1>
                        <h1>Please log in using your email and password instead</h1>
                        </>
                        : ''}
                    <button onClick={sendEmail}>Register</button>
                </RegistrationField>
        </>
    )
}

export default RegistrationFieldComponent;