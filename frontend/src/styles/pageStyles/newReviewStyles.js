import styled from "styled-components";


export const ReviewBanner = styled.div `
    height: 150px;
    width: 100vw;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    display: flex;
    align-items: start;
    margin-top:0.5em;
    z-index: 0;
`;

export const MainContainer = styled.div `
    min-height: 60vh;
    width: 100%;
`;

export const InputReviewField = styled.div`
        display: flex;
        justify-content: center;
        align-items: left;
        flex-direction: column;
        margin: 20px 10px 10px 250px;
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
  width: 300px;
  left: 0%;
  right: 82.69%;
  top: calc(50% - 18px / 2 + 162.5px);

  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #b00000;
  margin-top: 1px;
  margin-left: 150px;
`


export const RatingField = styled.div `
        position: relative;
        
        width: 555px;
        margin: 30px 15px 1px 110px;
        padding: 0;
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
          background-color: transparent;

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
        font-family: Roboto, sans-serif;
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
