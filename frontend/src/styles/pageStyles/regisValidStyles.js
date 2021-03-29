import styled from "styled-components";

export const VerificationFields = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin: 60px 0 20px 0;
    
    input {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
        padding: 10px;
        margin: 10px;
        width: 340px;
        height: 52px;
        border: none;
        outline: none;

        ::placeholder {
            font-size: 1rem;
        }
    }
`