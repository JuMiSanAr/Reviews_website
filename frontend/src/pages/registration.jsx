import React from 'react'
import HeaderNavi from '../components/headerNavi/index';
import RegistrationFieldComponent from '../components/registration/registrationField';
import RegistrationMessage from '../components/registration/registrationMessage';
import RegistrationValidation from '../components/registration/registrationValidation';
import { MainContainer, RegistrationWrapper } from '../styles/pageStyles/registrationStyles';

//############################# Component ################################


const RegistrationPage = () => {
    return (
        <MainContainer>
            <HeaderNavi/>
            <RegistrationWrapper>
                {/* <RegistrationFieldComponent/> */}
                <RegistrationMessage/>
                {/* <RegistrationValidation/> */}
            </RegistrationWrapper>
        </MainContainer>
    )
}

export default RegistrationPage;