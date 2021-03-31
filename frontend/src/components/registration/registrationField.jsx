import React, {useState} from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';
import {signupCodeFetch} from "../../store/fetches/signup_fetches";


//############################# Component ################################


const RegistrationFieldComponent = (props) => {

    const [ email, setEmail ] = useState('');

    const [ errorUsedEmail, setErrorUsedEmail ] = useState(false);
    const [ errorEmptyEmail, setErrorEmptyEmail ] = useState(false);

    const sendEmail = () => {

        if (email !== ''){
            signupCodeFetch(email)
            .then(data => {
                props.setStage('email sent');
            })
            .catch((error) => {
                setErrorUsedEmail(true);
                props.setStage('email used');
            });
        }
        else {
            setErrorEmptyEmail(true);
        }

        // loginFetch(email, password)
        // .then(data => {
        //     const action = loginAction(data.access);
        //     dispatch(action);
        //     localStorage.setItem('token', data.access);
        //     setRedirect(true);
        // })
        // .catch(() => {
        //         setErrorMessage(true);
        //     })

        // props.setStage('email sent')
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
                    />
                    {errorEmptyEmail ?
                        <h1>Email field cannot be empty</h1>
                        : ''}
                    {errorUsedEmail ?
                        <>
                        <h1>A registration code was already sent to this email address</h1>
                        <h1>Please check your inbox and your spam folder</h1>
                        </>
                        : ''}
                    <button onClick={sendEmail}>Register</button>
                </RegistrationField>
        </>
    )
}

export default RegistrationFieldComponent;