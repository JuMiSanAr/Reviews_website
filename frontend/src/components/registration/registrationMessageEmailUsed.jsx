import React from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';



const RegistrationMessageEmailUsed = (props) => {

        const validateUser = () => {
        console.log(props.setStage('activating user'))
    }

    return (
        <>
                <RegistrationTitle>Registration <span></span></RegistrationTitle>
                <RegistrationField>
                    <p>It looks like our monkeys already sent</p>
                    <p>a registration code to that E-Mail address previously.</p>
                    <p>We have sent a new code so that you</p>
                    <p>don't have to worry too much about it.</p>
                    <p>Please make sure to check your inbox and your spam folder</p>
                    <p>and proceed to the next step.</p>
                    <button onClick={validateUser}>Got it!</button>
                </RegistrationField>
        </>
    )
}

export default RegistrationMessageEmailUsed;