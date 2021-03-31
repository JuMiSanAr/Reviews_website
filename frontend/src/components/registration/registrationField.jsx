import React, {useState} from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';
import {signupCodeFetch} from "../../store/fetches/signup_fetches";


//############################# Component ################################


const RegistrationFieldComponent = (props) => {

    const [ email, setEmail ] = useState('');

    const sendEmail = () => {

        signupCodeFetch(email)
            .then(data => {
                console.log('success!')
            })

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
                    <button onClick={sendEmail}>Register</button>
                </RegistrationField>
        </>
    )
}

export default RegistrationFieldComponent;