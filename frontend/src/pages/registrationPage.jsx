import React, {useState} from 'react'
import Footer from '../components/footer';
import HeaderNavi from '../components/headerNavi/index';
import RegistrationFieldComponent from '../components/registration/registrationField';
import RegistrationMessage from '../components/registration/registrationMessage';
import RegistrationValidation from '../components/registration/registrationValidation';
import { MainContainer, RegistrationWrapper } from '../styles/pageStyles/registrationStyles';
import RegistrationMessageEmailUsed from "../components/registration/registrationMessageEmailUsed";

//############################# Component ################################


const RegistrationPage = () => {

    const [ stage, setStage ] = useState('entering email');


    return (
        <MainContainer>
            <HeaderNavi/>
            <RegistrationWrapper>
                {stage === 'entering email' ? <RegistrationFieldComponent setStage={setStage}/> : ''}
                {stage === 'email sent' ? <RegistrationMessage setStage={setStage}/> : ''}
                {stage === 'email used' ? <RegistrationMessageEmailUsed setStage={setStage}/> : ''}
                {stage === 'activating user' ? <RegistrationValidation/> : ''}
            </RegistrationWrapper>
            <Footer/>
        </MainContainer>
    )
}

export default RegistrationPage;