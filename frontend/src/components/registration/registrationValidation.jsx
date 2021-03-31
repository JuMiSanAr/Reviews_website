import styled from "styled-components";
import { RegistrationTitle } from "../../styles/pageStyles/registrationStyles";
import { VerificationFields } from "../../styles/pageStyles/regisValidStyles";

 

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

const RegistrationValidation = () => {
    return (
        <>
        <ValidationWrapper>
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
        </ValidationWrapper>
        </>
    )
}

export default RegistrationValidation;