import React from 'react'
import { RegistrationField, RegistrationTitle } from '../../styles/pageStyles/registrationStyles';


//############################# Component ################################


const RegistrationFieldComponent = () => {
    return (
        <>
                <RegistrationTitle>Registration <span></span></RegistrationTitle>
                <RegistrationField>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                    />
                    <button type='submit'>Register</button>
                </RegistrationField>
        </>
    )
}

export default RegistrationFieldComponent;