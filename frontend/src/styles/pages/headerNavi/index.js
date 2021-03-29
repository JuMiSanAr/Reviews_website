import styled from 'styled-components';


export const HeaderNaviStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 2em;
`;

export const LunaLogo = styled.img`
justify-self: start;
object-fit: contain;
width: 3em;
height: 2em;
margin-left: 0.75em;
`;


export const LeftHeaderSection = styled.div`
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
font-family: 'Roboto', '"Helvetica Neue"', "Arial", "sans-serif";
font-size: 0.75em;
:hover{
    font-Weight: bold;
}
:focus {  
    border: none;
    box-shadow: 0px 2.5px #E47D31;
}
`
export const StyledSignupButton = styled.button`
cursor: pointer;
margin-right: 0.02em;
font-size: 0.75em;
width: 6em;
height: 2.5em;
border: none;
border-radius: 40px 0px 0px 40px;
background-color: #E47D31;
color: white;
margin-top: 1em;
padding: 0.6em;
:hover{
    font-Weight: bolder;
}
`
export const StyledLoginButton = styled.button`
cursor: pointer;
font-size: 0.75em;
width: 6em;    
height: 2.5em;
border: none;
border-radius: 0px 40px 40px 0px;
background-color: #E47D31;
color: white;
margin-top: 1em;
padding: 0.6em;   
:hover{
    font-Weight: bolder;
} 
`