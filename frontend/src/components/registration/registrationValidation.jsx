import styled from "styled-components";
import { RegistrationTitle } from "../../styles/pageStyles/registrationStyles";
import { VerificationFields } from "../../styles/pageStyles/regisValidStyles";

 

const VerificationInputField = styled.div`
    display: flex;
    flex-direction: column;
`

const RegistrationValidation = () => {
    return (
        <>
                <RegistrationTitle>Verification <span></span></RegistrationTitle>
                <VerificationFields>
                    <VerificationInputField>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='E-Mail address'
                    />
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
                    </VerificationInputField>

                    <VerificationInputField>
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='code'
                        type='text'
                        placeholder='Validation code'
                    />

                    <input
                        required
                        // onChange={}
                        // value={}
                        name='email'
                        type='text'
                        placeholder='Location'
                    />
                    
                    <input
                        required
                        // onChange={}
                        // value={}
                        name='password repeat'
                        type='password'
                        placeholder='Password repeat'
                    />

                    </VerificationInputField>
                    
                </VerificationFields>
                <button type='submit'>Finish Registration</button>
        </>
    )
}

export default RegistrationValidation;