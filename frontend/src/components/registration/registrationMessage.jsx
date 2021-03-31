import React from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';



const RegistrationMessage = (props) => {

        const validateUser = () => {
        console.log(props.setStage('activating user'))
    }

    return (
        <>
                <RegistrationTitle>Registration <span></span></RegistrationTitle>
                <RegistrationField>
                    <p>Thanks for your registration.</p>
                    <p>Our hard working monkeys are preparing a digital</p>
                    <p>message called E-Mail that will be sent to you soon.</p>
                    <p>Since monkeys aren't good in writing the message could</p>
                    <p>end up in you junk folder. Our apologies for any </p>
                    <p>inconvenience. Thank you!</p>
                    <button onClick={validateUser}>Got it!</button>
                    {/* This will redirect to the Verification Page! */}
                </RegistrationField>
        </>
    )
}

export default RegistrationMessage;