import styled from 'styled-components';


export const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`
export const FooterUpperBar = styled.div`
    border-bottom: solid 0.05em lightgray;
    display: flex;
    flex-direction: row;
    height: 2em;
    align-items: center;
    justify-content: space-between;
`
export const FooterUpperLeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50wv;
    margin-left: 0.5em;
`

export const FooterButton = styled.button`
    cursor: pointer;
    border: none;
    font-size: 0.75em;

    margin-right: 1.5em;
    margin-left: 1em;
    :hover{
        font-Weight: bold;
    }
`

export const FooterUpperRightSide = styled.div`
    display: flex;
    flex-direction: row;
    width: 25wv;
    margin-right: 1em;
`
export const SocialButton = styled.button`
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    cursor: pointer;
`
export const SocialButtonIcon = styled.img`
    object-fit: contain;
    height: 1.5em;
    width: 1.5em;  
`;


export const FooterLowerBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.5em;
    margin-left: 1.25em;
`
export const FooterRightsText = styled.p`
    text-align: center;
    font-size: 0.5em;
`