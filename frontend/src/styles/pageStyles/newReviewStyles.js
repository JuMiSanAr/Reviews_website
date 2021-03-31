import styled from "styled-components";

export const MainContainer = styled.div `
min-height: 100vh;
width: 100%;
`;

export const InputReviewField = styled.div`
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;
margin: 40px 10px 20px 250px;
border: 1px solid #E3E3E3;
box-sizing: border-box;
border-radius: 3px;
width: 832px;
height: 264.5px;
background: #FFFFFF;

    input {
        font-style: normal;
        letter-spacing: 0px;
        padding: 10px;
        margin-left: 0px;
        width: 731px;
        height: 192px;
        border: none;
        outline: none;
        font-family: Helvetica, sans-serif;
        font-size: 20px;
        line-height: 23px;
        font-weight: 400;
        
    }

    p {
        margin-top: 8px;
        margin-bottom: 1px;
        margin-left: 20px;
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 23px;
        color: #BBB7B7;
    }
`

export const P = styled.p`
        position: absolute;
        height: 18px;
        left: 0%;
        right: 82.69%;
        top: calc(50% - 18px/2 + 162.5px);
        
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        color: #B00000;
`


export const RatingField = styled.div `
        position: relative;
        
        width: 832px;
        margin: 30px 75px 10px 10px;
        padding: 10;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        font-size: 32px;
    
        h5 {
            height: 23px;
            font-family: Helvetica;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 23px;
            margin-left: 22px;
            color: #7E7E7E;
        }
        
        button {
        border: none;
        background: #F0F0F0;
          background-color: transparent;
        border: transparent;
        }
`

export const BtnReview = styled.button`
        width: 200px;
        height: 57px;
        background: #E47D31;
        border-radius: 28px;
        border-style:none;
        margin-left: 880px;
        margin-bottom: 100px;
        font-family: Helvetica; // needs to be changed to Roboto!!
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #000000;
        outline:none;
        cursor: pointer;
        transition: all 0.3s;
`
