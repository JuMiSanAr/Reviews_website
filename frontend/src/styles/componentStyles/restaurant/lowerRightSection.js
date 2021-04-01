import styled from "styled-components";

export const LowerRightSection = styled.div `
    display: flex;
    flex-direction:column;
    background-color: #f5f5f5;
    padding: 1em;
    width: 45vw;
`
// export const LowerLeftSection = styled.div `
//     display: flex;
//     flex-direction:column;
//     padding: 0.75em;
//     width: 50vw;
// `
export const LowerRightRow = styled.div `
    height: 2.5em;
    padding: 0.5em;
    font-weight: ligher;
    margin-bottom: 0.5em;
`

export const Icon = styled.img `
    height: 1.5em;
    width: 1.5em;
    margin: 0 1em -0.25em 1em;
`

export const OpeningHours = styled.p `
    border-bottom: solid 0.0125em lightgray;
    font-size: 1.25em;
    height: 2em;
`
export const PriceLevel = styled.p `
    font-size: 1.25em;
`
export const OrangeButton = styled.button `
    background-color: #E47D31;
    cursor: pointer;
    
    border-radius: 1.5em;
    color: #fff;
    border: none;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s;

    :hover {
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.05) translateY(-5px);
    }
`
export const RightSideButton = styled(OrangeButton)`
    padding: 0.775em;
    width: 220px;
    height: 2.5em;
    margin: 0 0.5em 0 2em;
`