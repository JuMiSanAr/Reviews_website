import styled from "styled-components"
import { OrangeButton } from "./lowerRightSection"

export const LowerLeftSection = styled.div `
display: flex;
flex-direction:column;
background-color: #f5f5f5;
width: 55vw;
padding-top: 0.75em;
padding-left: 5em;
`
export const FilterRow = styled.div `
display: flex;
flex-direction: row;
`
export const FilterInput = styled.input `
border: solid 0.0125em lightgray;
margin-right: 1.25em;
width: 90%;
padding-top: 0.25em;
padding-left: 0.75em;
color: gray;
font-weight: bolder;
`

export const FilterButton = styled(OrangeButton)`
padding: 0.775em;
width: 7em;
height: 2.5em;
`