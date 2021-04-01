import styled from 'styled-components';


export const HeaderNaviStyle = styled.div`
/* margin-top: 0.5em; */

display: flex;
align-items: center;
justify-content: space-between;
width: 100vw;
height: 2em;
background-color: white;
padding: 22px 15px 22px 15px;
`;

export const LunaLogo = styled.img`
cursor: pointer;
justify-self: start;
object-fit: contain;
width: 3em;
height: 2em;
margin-left: 0.75em;
`;


export const RightHeaderSection = styled.div`
margin-right: 0.5em;
justify-items: end;
display: flex;
flex-direction: row;
`;


export const StyledTab = styled.button`
cursor: pointer;
padding: 1.5em;
margin: 0.25em;
border: none;
background-color: transparent;
font-size: 0.75em;
:hover{
    font-Weight: bold;
}
:focus {  
    border: none;
    box-shadow: 0px 2.5px #E47D31;
}
`

const StyledSignupLoginButton = styled.button`
cursor: pointer;
margin-right: 0.05em;
font-size: 0.75em;
width: 6em;
height: 2.5em;
border: none;
border-radius: 40px 0px 0px 40px;
background-color: #E47D31;
color: white;
margin-top: 1em;
padding: 0.85em;

:hover{
    font-Weight: bolder;
}
`

export const StyledSignupButton = styled(StyledSignupLoginButton)`
border-radius: 40px 0px 0px 40px;
margin-right: 0.075em;
`
export const StyledLoginButton = styled(StyledSignupLoginButton)`
border-radius: 0px 40px 40px 0px;
margin-left: 0.075em;
`
export const StyledSignoutButton = styled(StyledSignupLoginButton)`
    width: 12em;
    border-radius: 40px 40px 40px 40px;
    margin-left: 0.075em;
    margin-right: 0.075em;
`